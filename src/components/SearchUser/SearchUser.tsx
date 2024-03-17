"use client";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useContext, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoaderContext } from "@/context/LoaderContext";

type SearchProps = {
  setAmount: (e: string) => void;
};

export default function SearchInput() {
  const { setSearchValue, results, setResults, theme, setTheme } =
    useContext(LoaderContext);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setSearchValue(e.target.value);
    }, 1000);
  }

  function handleTheme() {
    // window.localStorage.theme = theme === "dark" ? "light" : "dark";
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex  sm:flex-row md:flex-row gap-6 ">
      <Input className="dark:text-white" onChange={handleChange} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="dark:text-teal-500">
            {results} results
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Amount of results</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={results} onValueChange={setResults}>
            <DropdownMenuRadioItem value="5">show 5</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="10">show 10</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="all">show all</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button onClick={handleTheme}>
        {theme === "dark" ? "Let it shine" : "Save my eyes"}
      </Button>
    </div>
  );
}
