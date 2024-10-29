import React, { FC } from "react";
import classes from "./Layout.module.scss";

interface Props {
  children: React.ReactNode | Array<React.ReactNode>;
  style?: React.CSSProperties;
}

export const Layout: FC<Props> = ({ children, style }) => {
  return (
    <div className={classes.layout} style={style}>
      {children}
    </div>
  );
};

export default Layout;
