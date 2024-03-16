"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

export const LoaderContext = createContext<LoaderContextType>({
  isLoading: false,
  setIsLoading: () => {},
  searchValue: "",
  setSearchValue: () => {},
  results: "",
  setResults: () => {},
  theme: "",
  setTheme: () => {},
});
let currentMode = "dark";

// if (typeof window !== "undefined" && window.localStorage) {
//   currentMode =
//     window.localStorage.theme === "dark" ||
//     (!("theme" in window.localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
//       ? "dark"
//       : "light";
// } else {
//   currentMode = "light";
// }

interface Props {
  children: ReactNode;
}
type LoaderContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: (e: string) => void;
  results: string;
  setResults: (val: string) => void;
  theme: string;
  setTheme: (mode: string) => void;
};

export const LoaderProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState("5");
  const [theme, setTheme] = useState(currentMode);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
        searchValue,
        setSearchValue,
        results,
        setResults,
        theme,
        setTheme,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
