// components/common/MainLayout.tsx
import React, { PropsWithChildren } from "react";
import MainNavBar from "./mainNavBar";
import MainFooter from "./mainFooter";
export default function MainLayout({ children }: PropsWithChildren)  {
  return (
    <>
      <div>
      <MainNavBar />
      <div className="px-6 py-6">{children}</div>
      <MainFooter />
      </div>
    </>
  );
};
