import AboutBanner from "@/components/About/AboutBanner/AboutBanner";
import ContactPage from "@/components/ContactPage/ContactPage";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <AboutBanner
        title="Contact AM Management Group"
        description="Have a project tender, sub-contracting requirement, or corporate inquiry? Reach out to our team today."
        descriptionClassName="hidden md:block"
      ></AboutBanner>
      <ContactPage></ContactPage>
    </div>
  );
};

export default page;
