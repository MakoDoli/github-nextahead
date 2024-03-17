import UserInfo from "@/components/UserInfo/UserInfo";
import Spinner from "@/components/ui/Spinner";
import { Metadata } from "next";
import React, { Suspense } from "react";

let pageTitle = "";

export default function Userpage({
  params,
}: {
  params: {
    name: string;
  };
}) {
  pageTitle = params.name;
  return (
    <Suspense fallback={<Spinner />}>
      <UserInfo name={params.name} />
    </Suspense>
  );
}
console.log(pageTitle);
export const metadata: Metadata = {
  title: `User ${pageTitle}`,
};
