"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Loader2, MapPin } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  getProjectCategoryLabel,
  getProjectImage,
  getProjectStatusLabel,
  projectFallbackImage,
} from "@/features/projects/project-display";
import { getPublishedProjects } from "@/features/projects/project.api";
import type {
  ProjectRecord,
  ProjectStatus,
} from "@/features/projects/project.types";

type StatusFilter = "ALL" | "COMPLETED" | "ONGOING";

const statusTabs: Array<{ value: StatusFilter; label: string }> = [
  { value: "ALL", label: "All" },
  { value: "COMPLETED", label: "Completed" },
  { value: "ONGOING", label: "Ongoing" },
];

export default function FeaturedProjects({
  initialProjects,
}: {
  initialProjects?: ProjectRecord[];
}) {
  const hasInitialData = initialProjects !== undefined;
  const [projects, setProjects] = useState<ProjectRecord[]>(initialProjects ?? []);
  const [filter, setFilter] = useState<StatusFilter>("ALL");
  const [isLoading, setIsLoading] = useState(!hasInitialData);

  useEffect(() => {
    if (hasInitialData) return;

    const loadProjects = async () => {
      setIsLoading(true);

      try {
        const featuredResult = await getPublishedProjects({
          limit: 12,
          featured: "true",
        });

        let list = featuredResult.data?.projects ?? [];

        if (list.length === 0) {
          const allResult = await getPublishedProjects({ limit: 6 });
          list = allResult.data?.projects ?? [];
        }

        setProjects(list);
      } catch {
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    void loadProjects();
  }, [hasInitialData]);

  const filteredProjects = useMemo(() => {
    if (filter === "ALL") return projects.slice(0, 6);
    return projects.filter((project) => project.status === filter).slice(0, 6);
  }, [filter, projects]);

  const getStatusBadgeClass = (status: ProjectStatus) => {
    if (status === "COMPLETED") return "bg-primary text-primary-foreground";
    if (status === "ONGOING") return "bg-secondary text-secondary-foreground";
    return "bg-muted text-muted-foreground";
  };

  return (
    <section className="bg-background py-7 text-foreground md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-3xl space-y-3 text-center">
          <h2 className="text-3xl font-bold text-primary tracking-tight md:text-4xl">
            FEATURED PROJECTS & ACHIEVEMENTS
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            A showcase of our landmark real estate developments, infrastructure
            construction, and high-value sub-contract engineering works across
            Malaysia.
          </p>
        </div>

        <div className="mb-6 flex justify-end">
          <div className="flex items-center gap-1 rounded-md bg-muted p-1.5">
            {statusTabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setFilter(tab.value)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  filter === tab.value
                    ? "bg-secondary text-secondary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex min-h-64 flex-col items-center justify-center text-muted-foreground">
            <Loader2 className="mb-3 size-8 animate-spin text-primary" />
            <p className="text-sm">Loading featured projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="rounded-md border border-border bg-card p-10 text-center text-muted-foreground">
            No featured projects available
            {filter !== "ALL"
              ? ` for ${getProjectStatusLabel(filter)}`
              : ""}{" "}
            yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-md border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative h-72 w-full overflow-hidden bg-muted">
                  <Image
                    src={getProjectImage(project) || projectFallbackImage}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${getStatusBadgeClass(
                      project.status,
                    )}`}
                  >
                    {getProjectStatusLabel(project.status)}
                  </span>
                </div>

                <div className="space-y-4 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    {getProjectCategoryLabel(project.category)}
                  </span>

                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-secondary">
                    {project.name}
                  </h3>

                  <div className="space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
                    {project.clientName && (
                      <div className="flex items-center gap-2">
                        <Building2 className="size-4 text-secondary" />
                        <span className="font-semibold text-foreground">
                          {project.clientName}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 text-secondary" />
                      <span>{project.location || "Malaysia"}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border-2 border-secondary px-4 py-2 font-semibold text-foreground transition-colors hover:text-secondary"
          >
            <span>View All Projects</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
