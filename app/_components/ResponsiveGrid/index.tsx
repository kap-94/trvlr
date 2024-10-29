import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./ResponsiveGrid.module.scss";

type ResponsiveGridProps = {
  children: ReactNode;
  columns?: number;
};

const cx = classNames.bind(styles);

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = 3,
}) => {
  const gridClass = cx("responsive-grid", {
    [`responsive-grid--${columns}-columns`]: columns,
  });

  return <div className={gridClass}>{children}</div>;
};

export default ResponsiveGrid;
