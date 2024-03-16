import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

type UserResultProps = {
  src: string;
  name: string;
  url: string;
};

export default function User({ src, name }: UserResultProps) {
  return (
    <div className="flex column gap-10 mt-10 pb-4 relative">
      <Link href={`/userInfo/${name}`}>
        <Avatar>
          <AvatarImage src={src} />
        </Avatar>
      </Link>
      <Link href={`/${name}/userinfo/`}>
        <h2>{name}</h2>
      </Link>
      <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    </div>
  );
}
