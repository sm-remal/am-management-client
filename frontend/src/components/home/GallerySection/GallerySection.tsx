"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getPublishedGalleryImages } from "@/features/gallery/gallery.api";
import type { GalleryImageRecord } from "@/features/gallery/gallery.types";

export default function GallerySection({
  initialImages,
}: {
  initialImages?: GalleryImageRecord[];
}) {
  const hasInitialData = initialImages !== undefined;
  const [images, setImages] = useState<GalleryImageRecord[]>(initialImages ?? []);
  const [isLoading, setIsLoading] = useState(!hasInitialData);

  useEffect(() => {
    if (hasInitialData) return;

    const loadGallery = async () => {
      setIsLoading(true);

      try {
        const result = await getPublishedGalleryImages({ limit: 6 });
        setImages(result.data?.galleryImages ?? []);
      } catch {
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    };

    void loadGallery();
  }, [hasInitialData]);

  return (
    <section className="bg-background py-7 text-foreground md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            OUR WORK IN PICTURES
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Highlights from operations, projects and company activities across
            the group.
          </p>
        </div>

        {isLoading ? (
          <div className="flex min-h-48 flex-col items-center justify-center text-muted-foreground">
            <Loader2 className="mb-3 size-7 animate-spin text-primary" />
            <p className="text-sm">Loading gallery...</p>
          </div>
        ) : images.length === 0 ? (
          <div className="rounded-md border border-border bg-card p-10 text-center text-muted-foreground">
            Gallery images will appear here once published.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="group relative h-64 overflow-hidden rounded-md border border-border shadow-sm"
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.title || image.category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                      {image.title || image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                View full gallery
                <ArrowRight size={16} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
