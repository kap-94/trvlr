import { FC, useEffect } from "react";
import classNames from "classnames/bind";
import { LayoutProps } from "../interfaces";
import CalendaSidebar from "../../CalendaSidebar";
import DashboardNavbar from "../../DashboardNavbar";
import { useLocations } from "@/src/modules/Locations/useLocations";
import { useUserProfile } from "@/src/modules/Profile/hooks/useUserProfile";
import styles from "./DashboardLayout.module.scss";

const cx = classNames.bind(styles);

export const DashboardLayout: FC<LayoutProps> = ({
  children,
  bgColor,
  showNavbar = true,
}) => {
  const { fetchUserProfile } = useUserProfile();
  const { fetchLocations } = useLocations();

  useEffect(() => {
    fetchUserProfile();
    fetchLocations();
  }, []);

  return (
    <div className={cx("layout")}>
      <CalendaSidebar />

      <main className={cx("layout__main")} style={{ backgroundColor: bgColor }}>
        {showNavbar && <DashboardNavbar className={cx("layout__navbar")} />}
        {children}
      </main>
    </div>
  );
};
