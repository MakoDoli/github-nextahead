import List from "@/components/List";
import SearchInput from "@/components/SearchUser";

import React from "react";

function HomePage() {
  // const currentMode =
  //   localStorage.theme === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  //     ? "dark"
  //     : "light";

  //const [amount, setAmount] = useState("5");
  // const [theme, setTheme] = useState(currentMode);
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  return (
    <div className="py-8 px-6 lg:px-48  min-h-screen dark:bg-slate-800">
      <SearchInput />
      <List />
      
    </div>
  );
}

export default HomePage;
