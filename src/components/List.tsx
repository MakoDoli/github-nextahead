"use client";
import { LoaderContext } from "@/context/LoaderContext";
import Spinner from "./ui/Spinner";
import User from "./ui/User";
import { BASE_URL } from "@/utils/constants";
import useFetchData from "@/services/useFetchData";
import { useContext } from "react";

// type ListProps = {
//   amount: string;
// };

export default function List() {
  const { searchValue, results } = useContext(LoaderContext);
  const [list] = useFetchData(BASE_URL, searchValue);

  const { isLoading } = useContext(LoaderContext);

  const slicedList = results === "all" ? list : list.slice(0, Number(results));

  if (isLoading) return <Spinner />;

  return (
    <div className=" dark:text-white grid grid-cols-1 md:grid-cols-2">
      {slicedList.map((item) => (
        <User
          name={item.login}
          key={item.id}
          src={item.avatar_url}
          url={item.html_url}
        />
      ))}
    </div>
  );
}
