import List from "@/components/UserList/List";
import SearchInput from "@/components/SearchUser/SearchUser";

import React from "react";

function HomePage() {
  return (
    <div className="py-8 px-6 lg:px-48  min-h-screen dark:bg-slate-800">
      <SearchInput />
      <List />
    </div>
  );
}

export default HomePage;
