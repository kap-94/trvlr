// app/_components/Header/index.tsx
import { createStaticContentService } from "@/app/_services";
import HeaderClient from "./HeaderClient";

const defaultVariantRoutes = ["/"];

async function getHeaderData() {
  const staticContentService = createStaticContentService();
  return await staticContentService.getHeaderContent();
}

export default async function Header() {
  const headerData = await getHeaderData();

  return (
    <HeaderClient
      data={headerData.data}
      defaultVariantRoutes={defaultVariantRoutes}
      frontPageID={headerData.frontPageID}
    />
  );
}
