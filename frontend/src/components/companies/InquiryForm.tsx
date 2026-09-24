import InquiryFormCard from "@/components/contact/InquiryFormCard";

interface InquiryFormProps {
  companyName?: string;
}

const InquiryForm = ({
  companyName = "AM Management Group",
}: InquiryFormProps) => {
  return (
    <InquiryFormCard
      defaultCompanyName={companyName}
      successCompanyName={companyName}
    />
  );
};

export default InquiryForm;
