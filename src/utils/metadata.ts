import { BASE_URL_USER } from "@/utils/constants";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    name: string;
  };
};

export async function getMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const userName = params.name;
  const user = await fetch(BASE_URL_USER + userName).then((res) => res.json());
  const previousTitle = (await parent).title || "";
  return {
    title: user.login || previousTitle,
  };
}
