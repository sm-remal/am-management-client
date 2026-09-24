import AboutBanner from "@/components/About/AboutBanner/AboutBanner";
import CompaniesSection from "@/components/companies/CompaniesSection";

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutBanner
        title="Companies built for long-term value."
        description="Explore the businesses and capabilities represented within the group."
      />

      <CompaniesSection />
    </main>
  );
}
