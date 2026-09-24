import CompaniesSection from "@/components/companies/CompaniesSection";
import Banner from "@/components/home/Banner/Banner";
import BusinessIntro from "@/components/home/BusinessIntro/BusinessIntro";
import BusinessSectors from "@/components/home/BusinessSectors/BusinessSectors";
import CareerCTA from "@/components/home/CareerCTA/CareerCTA";
import CorporateValues from "@/components/home/CorporateValues/CorporateValues";
import FeaturedProjects from "@/components/home/FeaturedProjects/FeaturedProjects";
import GallerySection from "@/components/home/GallerySection/GallerySection";
// import SisterConcerns from "@/components/home/SisterConcerns/SisterConcerns";
import Statistics from "@/components/home/Statistics/Statistics";
import WhyChooseUs from "@/components/home/WhyChooseUs/WhyChooseUs";
import { getPublishedCompanies } from "@/features/companies/company.api";
import { getPublishedGalleryImages } from "@/features/gallery/gallery.api";
import { getPublishedProjects } from "@/features/projects/project.api";

const loadHomeData = async () => {
  const [companiesResult, projectsResult, galleryResult] =
    await Promise.allSettled([
      getPublishedCompanies({ limit: 6 }),
      getPublishedProjects({ limit: 12, featured: "true" }),
      getPublishedGalleryImages({ limit: 6 }),
    ]);

  return {
    companies:
      companiesResult.status === "fulfilled"
        ? companiesResult.value.data?.companies
        : undefined,
    projects:
      projectsResult.status === "fulfilled"
        ? projectsResult.value.data?.projects
        : undefined,
    galleryImages:
      galleryResult.status === "fulfilled"
        ? galleryResult.value.data?.galleryImages
        : undefined,
  };
};

export default async function Home() {
  const {  projects, galleryImages } = await loadHomeData();

  return (
    <div>
      <Banner></Banner>

      <BusinessIntro></BusinessIntro>
      <Statistics></Statistics>
      <CompaniesSection />
      <BusinessSectors></BusinessSectors>
      <WhyChooseUs></WhyChooseUs>
      <FeaturedProjects initialProjects={projects}></FeaturedProjects>
      <CorporateValues></CorporateValues>
      <GallerySection initialImages={galleryImages}></GallerySection>
      <CareerCTA></CareerCTA>
    </div>
  );
}
