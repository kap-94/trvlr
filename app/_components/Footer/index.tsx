// app/_components/Footer/index.tsx
import { createStaticContentService } from "@/app/_services";
import FooterClient from "./FooterClient";

async function getFooterData() {
  const staticContentService = createStaticContentService();
  return await staticContentService.getFooterContent();
}

export default async function Footer() {
  const footerData = await getFooterData();

  return (
    <FooterClient
      frontPageID={footerData.frontPageID}
      footerMenuData={footerData.footerMenuData}
      options={footerData.options}
    />
  );
}
