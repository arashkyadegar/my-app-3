// components/common/MainLayout.tsx
import React, { PropsWithChildren } from "react";
import MainNavBar from "./mainNavBar";
import MainFooter from "./mainFooter";
export default function MainLayout({ children }: PropsWithChildren)  {
  return (
    <>
      <MainNavBar />
      <div className="text-base px-6 py-6 top-10 relative">{children}</div>
      <MainFooter />
    </>
  );
};
