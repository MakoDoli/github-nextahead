/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Spinner from "@/components/ui/Spinner";
import { Button } from "@/components/ui/button";
import { BASE_URL_USER } from "@/utils/constants";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

type UserType = {
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  html_url: string;
  public_repos: number;
};

export default function UserInfo({ name }: { name: string }) {
  const userName = name;

  const [isLoading, setisLoading] = useState(false);
  const [info, setInfo] = useState<UserType>({
    login: "",
    avatar_url: "",
    bio: "",
    followers: 0,
    html_url: "",
    public_repos: 0,
  });

  useEffect(() => {
    async function getData(url: string, id: string) {
      try {
        setisLoading(true);
        const res = await fetch(url + id);
        const data = await res.json();
        setInfo(data);
      } catch (err) {
        console.warn(err);
      } finally {
        setisLoading(false);
      }
    }
    getData(BASE_URL_USER, userName);
  }, [userName]);

  const {
    login,
    avatar_url: avatarUrl,
    bio,
    followers,
    html_url: htmlUrl,
    public_repos: publicRepos,
  } = info;

  if (isLoading) return <Spinner />;
  return (
    <div className="w-full pt-12 h-screen dark:bg-slate-900">
      <div className="w-[300px] md:w-[500px] border border-slate-300 dark:border-black shadow-md  rounded-2xl  mx-auto text-center p-2 dark:bg-slate-800">
        <BackgroundGradient className="rounded-[22px] max-w-[500px] p-4 sm:p-6 bg-white dark:bg-zinc-900 items-center">
          <ThemeToggle />
          <HoverCard>
            <HoverCardTrigger asChild>
              <img
                className="rounded-full w-24 mx-auto md:mt-6 cursor-pointer"
                src={avatarUrl}
                alt="avatar"
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <a href={htmlUrl} target="_blank" rel="noreferrer">
                  <img src="/github.png" />

                  <div className="space-y-1">
                    <h4 className="text-sm text-teal-500 font-semibold">
                      Click here for
                    </h4>
                    <p className="text-sm"> {login}&apos;s github account</p>
                  </div>
                </a>
              </div>
            </HoverCardContent>
          </HoverCard>

          <div className="flex m-10 flex-wrap ">
            <div className="w-1/2 dark:text-white">
              <p>Login: </p>
              <p>Followers: </p>
              <p> Public repos: </p>
              <p>Bio: </p>
            </div>
            <div className="text-teal-500 w-1/2">
              <p>{login}</p>
              <p>{followers}</p>
              <p>{publicRepos}</p>
              <p>{bio}</p>
            </div>
          </div>
          <Button>
            <Link href="/">Back</Link>
          </Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
