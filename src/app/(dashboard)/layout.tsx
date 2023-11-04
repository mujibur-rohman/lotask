import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex justify-between border-b border-border h-14 px-4 py-2">
        <Logo />
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <div className="flex bg-red-200 w-full flex-col items-center">
        <div className="flex flex-grow w-full justify-center dark:bg-netrual-950">
          <div className="max-w-[920px] flex flex-col flex-grow px-4 py-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
