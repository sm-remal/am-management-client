"use client";

import {
  AlertCircle,
  Award,
  CheckCircle2,
  Globe2,
  Loader2,
  Phone,
  RefreshCw,
  Save,
  Settings,
  Share2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  getSettings,
  upsertSettings,
} from "@/features/settings/setting.api";
import type { SettingRecord } from "@/features/settings/setting.types";
import { invalidatePublicSettings } from "@/features/settings/usePublicSettings";
import { cn } from "@/lib/utils";

type QuickSettingField = {
  key: string;
  label: string;
  placeholder: string;
  multiline?: boolean;
};

const quickSettingGroups: Array<{
  title: string;
  icon: LucideIcon;
  fields: QuickSettingField[];
}> = [
  {
    title: "Company Info",
    icon: Globe2,
    fields: [
      {
        key: "site.name",
        label: "Site Name",
        placeholder: "AM Management Group",
      },
      {
        key: "site.tagline",
        label: "Tagline",
        placeholder: "One Group. Multiple Businesses.",
      },
      {
        key: "site.description",
        label: "Description",
        placeholder: "Short company overview",
        multiline: true,
      },
      {
        key: "site.business_hours",
        label: "Business Hours",
        placeholder: "Monday - Friday: 8:30 AM - 5:30 PM",
        multiline: true,
      },
      {
        key: "site.website_logo",
        label: "Website Logo URL",
        placeholder: "https://example.com/logo.png",
      },
      {
        key: "site.hero_banner_desktop",
        label: "Hero Banner URLs (Desktop)",
        placeholder:
          "https://example.com/banner-1.jpg, https://example.com/banner-2.jpg",
        multiline: true,
      },
      {
        key: "site.hero_banner_mobile",
        label: "Hero Banner URLs (Mobile)",
        placeholder:
          "https://example.com/mobile-banner-1.jpg, https://example.com/mobile-banner-2.jpg",
        multiline: true,
      },
    ],
  },
  {
    title: "Contact Info",
    icon: Phone,
    fields: [
      { key: "contact.phone", label: "Phone", placeholder: "+60 12-345 6789" },
      {
        key: "contact.whatsapp",
        label: "WhatsApp Number",
        placeholder: "60123456789",
      },
      { key: "contact.email", label: "Email", placeholder: "info@example.com" },
      {
        key: "contact.address",
        label: "Address",
        placeholder: "Company address",
        multiline: true,
      },
    ],
  },
  {
    title: "Achievements",
    icon: Award,
    fields: [
      {
        key: "achievements.title",
        label: "Section Title",
        placeholder: "Our Achievements",
      },
      {
        key: "achievements.description",
        label: "Section Description",
        placeholder: "A decade of excellence and sustainable value creation.",
        multiline: true,
      },
      {
        key: "achievements.item1.value",
        label: "Card 1 Value",
        placeholder: "10",
      },
      {
        key: "achievements.item1.suffix",
        label: "Card 1 Suffix",
        placeholder: "+",
      },
      {
        key: "achievements.item1.label",
        label: "Card 1 Label",
        placeholder: "Years of Corporate Excellence",
      },
      {
        key: "achievements.item2.value",
        label: "Card 2 Value",
        placeholder: "6",
      },
      {
        key: "achievements.item2.suffix",
        label: "Card 2 Suffix",
        placeholder: "+",
      },
      {
        key: "achievements.item2.label",
        label: "Card 2 Label",
        placeholder: "Sister Concerns & Divisions",
      },
      {
        key: "achievements.item3.value",
        label: "Card 3 Value",
        placeholder: "4.8",
      },
      {
        key: "achievements.item3.suffix",
        label: "Card 3 Suffix",
        placeholder: "M+",
      },
      {
        key: "achievements.item3.label",
        label: "Card 3 Label",
        placeholder: "Active Project Value",
      },
      {
        key: "achievements.item4.value",
        label: "Card 4 Value",
        placeholder: "500",
      },
      {
        key: "achievements.item4.suffix",
        label: "Card 4 Suffix",
        placeholder: "K",
      },
      {
        key: "achievements.item4.label",
        label: "Card 4 Label",
        placeholder: "Issued Share Capital",
      },
    ],
  },
  {
    title: "Social & SEO",
    icon: Share2,
    fields: [
      {
        key: "social.facebook",
        label: "Facebook",
        placeholder: "https://facebook.com/...",
      },
      {
        key: "social.linkedin",
        label: "LinkedIn",
        placeholder: "https://linkedin.com/...",
      },
      {
        key: "social.instagram",
        label: "Instagram",
        placeholder: "https://instagram.com/...",
      },
      {
        key: "social.twitter",
        label: "Twitter / X",
        placeholder: "https://x.com/...",
      },
      {
        key: "seo.title",
        label: "SEO Title",
        placeholder: "Homepage SEO title",
      },
      {
        key: "seo.description",
        label: "SEO Description",
        placeholder: "Homepage SEO description",
        multiline: true,
      },
    ],
  },
];

const quickSettingKeys = quickSettingGroups.flatMap((group) =>
  group.fields.map((field) => field.key),
);

const SettingsManagement = () => {
  const [settings, setSettings] = useState<SettingRecord[]>([]);
  const [quickValues, setQuickValues] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSavingQuick, setIsSavingQuick] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const loadSettings = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getSettings({ page: 1, limit: 200 });
      const allSettings = result.data?.settings ?? [];
      setSettings(allSettings);

      const nextQuickValues: Record<string, string> = {};
      quickSettingKeys.forEach((key) => {
        nextQuickValues[key] =
          allSettings.find((setting) => setting.key === key)?.value ?? "";
      });
      setQuickValues(nextQuickValues);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load settings");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      void loadSettings();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [loadSettings]);

  const handleQuickChange = (key: string, value: string) => {
    setQuickValues((current) => ({ ...current, [key]: value }));
  };

  const handleSaveQuickSettings = async () => {
    setIsSavingQuick(true);
    setError(null);
    setSuccess(null);

    try {
      await upsertSettings({
        settings: quickSettingKeys.map((key) => ({
          key,
          value: quickValues[key] ?? "",
        })),
      });
      invalidatePublicSettings();
      setSuccess("Settings saved successfully");
      await loadSettings();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save settings");
    } finally {
      setIsSavingQuick(false);
    }
  };

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-[#fb731f]">
            Website Settings
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-normal text-slate-950 md:text-3xl">
            Dashboard settings
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Manage global website configuration, contact details and SEO text.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={loadSettings}
            disabled={isLoading}
          >
            <RefreshCw className={cn("size-4", isLoading && "animate-spin")} />
            Refresh
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">Total settings</p>
            <Settings className="size-5 text-[#234279]" />
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            {settings.length}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">Quick fields</p>
            <Globe2 className="size-5 text-emerald-600" />
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            {quickSettingKeys.length}
          </p>
        </div>
      </section>

      {(error || success) && (
        <section
          className={cn(
            "flex items-start gap-2 rounded-lg border p-3 text-sm",
            error
              ? "border-rose-200 bg-rose-50 text-rose-700"
              : "border-emerald-200 bg-emerald-50 text-emerald-700",
          )}
        >
          {error ? (
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
          ) : (
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
          )}
          <p>{error || success}</p>
        </section>
      )}

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-950">
              Quick website settings
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Common settings used across public website pages.
            </p>
          </div>
          <Button
            type="button"
            onClick={() => void handleSaveQuickSettings()}
            disabled={isSavingQuick || isLoading}
          >
            {isSavingQuick ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Save className="size-4" />
            )}
            Save Settings
          </Button>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          {quickSettingGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-lg border border-slate-200 p-4"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Icon className="size-4 text-[#234279]" />
                  <h3 className="text-sm font-bold text-slate-950">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.fields.map((field) => (
                    <div key={field.key}>
                      <label
                        htmlFor={field.key}
                        className="mb-1.5 block text-xs font-bold text-slate-700"
                      >
                        {field.label}
                      </label>
                      {field.multiline ? (
                        <textarea
                          id={field.key}
                          value={quickValues[field.key] ?? ""}
                          onChange={(event) =>
                            handleQuickChange(field.key, event.target.value)
                          }
                          placeholder={field.placeholder}
                          rows={4}
                          className="min-h-24 w-full resize-y rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                        />
                      ) : (
                        <Input
                          id={field.key}
                          value={quickValues[field.key] ?? ""}
                          onChange={(event) =>
                            handleQuickChange(field.key, event.target.value)
                          }
                          placeholder={field.placeholder}
                          className="h-10"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SettingsManagement;


