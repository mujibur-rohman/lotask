"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { MoonIcon, SunIcon } from "lucide-react";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
      <TabsList>
        <TabsTrigger
          value="light"
          onClick={() => {
            setTheme("light");
          }}
        >
          <SunIcon />
        </TabsTrigger>
        <TabsTrigger
          value="dark"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <MoonIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
