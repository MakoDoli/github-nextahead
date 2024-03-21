import UserInfo from "@/components/UserInfo/UserInfo";
import Spinner from "@/components/ui/Spinner";

import { getMetadata } from "@/utils/metadata";
import { Metadata, ResolvingMetadata } from "next";
import React, { Suspense } from "react";

type Props = {
  params: {
    name: string;
  };
};

export async function generateMetadata(
  params: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return getMetadata(params, parent);
}

export default function Userpage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <UserInfo name={params.name} />
      </Suspense>
    </>
  );
}
