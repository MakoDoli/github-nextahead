"use client";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";
import User from "../ui/User";
import { BASE_URL, message } from "@/utils/constants";
import { useToast } from "@/components/ui/use-toast";
import { useContext, useEffect } from "react";
import { SearchResults } from "@/context/SearchResults";

type ChildProps = {
  login: string;
  avatar_url: string;
  id: number;
  html_url: string;
};

export default function ListOfUsers() {
  const { searchValue } = useContext(SearchResults);
  const { toast } = useToast();
  //const { isLoading, isError, data, error }
  const queryData = useQuery({
    queryKey: ["fetchedData"],
    queryFn: () => fetch(BASE_URL + searchValue).then((res) => res.json()),
    enabled: searchValue !== "",
  });

  useEffect(() => {
    if (queryData.isError) {
      toast({ description: queryData.error.message });
      //     }
      //     // if (!queryData.data.items) {
      //     //   toast({ description: message });
      //     // }
    }
  }, [queryData]);

  if (queryData.isLoading) return <Spinner />;

  if (queryData.data?.items)
    return (
      <div className=" dark:text-white grid grid-cols-1 md:grid-cols-2">
        {queryData.data.items.map((item: ChildProps) => (
          <User
            name={item.login}
            key={item.id}
            src={item.avatar_url}
            url={item.html_url}
          />
        ))}
      </div>
    );
  return <p></p>;
}
