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
      menuDataPrimary={footerData.menuDataPrimary}
      menuDataSecondary={footerData.menuDataSecondary}
      options={footerData.options}
      light={footerData.light}
    />
  );
}
