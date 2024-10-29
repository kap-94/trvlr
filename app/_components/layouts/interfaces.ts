import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  bgColor?: string;
  showNavbar?: boolean;
}

export interface BusinessRegisterLayoutProps extends LayoutProps {
  steps: any;
  currentStep: any;
}

export interface AuthLayoutProps extends LayoutProps {
  image: { url: string; alt: string };
}
