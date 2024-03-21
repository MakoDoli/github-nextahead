"use client";
import { Button } from "@/components/ui/button";
import { SearchResults } from "@/context/SearchResults";
import React, { useContext } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(SearchResults);

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <Button onClick={handleTheme} className="">
      {theme === "dark" ? "Let it shine" : "Save my eyes"}
    </Button>
  );
}
