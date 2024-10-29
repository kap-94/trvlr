import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";

import { BusinessRegisterLayoutProps } from "../interfaces";
import Logo from "../../Logo";
import Stepper from "../../Stepper";

import styles from "./BusinessRegisterLayout.module.scss";

const cx = classNames.bind(styles);

export const BusinessRegisterLayout: FC<BusinessRegisterLayoutProps> = ({
  children,
  steps,
  currentStep,
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [stepperOrientation, setStepperOrientation] = useState<
    "vertical" | "horizontal"
  >("vertical");

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth <= 836) {
      setStepperOrientation("horizontal");
    } else {
      setStepperOrientation("vertical");
    }
  }, [windowWidth]);

  return (
    <div className={cx("layout")}>
      <div className={cx("layout__left-column")}>
        <Logo
          variant="isotypeSecondary"
          style={{ height: "75px", width: "75px" }}
        />
        <Stepper
          steps={steps}
          currentStep={currentStep}
          orientation={stepperOrientation}
        />
      </div>

      <div className={cx("layout__right-column")}>{children}</div>
    </div>
  );
};
