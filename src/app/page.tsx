import List from "@/components/UserList/List";
import SearchInput from "@/components/SearchUser/SearchUser";

import React from "react";
import UserList from "@/components/UserList/UserList";
import ListOfUsers from "@/components/UserList/ListofUsers";
import Provider from "@/utils/queryprovider";

function HomePage() {
  return (
    <div className="py-8 px-6 lg:px-48  min-h-screen dark:bg-slate-800">
      <Provider>
        <SearchInput />
        {/* <List /> */}

        <ListOfUsers />
      </Provider>
    </div>
  );
}

export default HomePage;
