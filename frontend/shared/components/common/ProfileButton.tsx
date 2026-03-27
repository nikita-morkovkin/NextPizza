"use client";

import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui";

interface ProfileButtonProps {
  className?: string;
  onClickSignIn: () => void;
}

const ProfileButton = ({ className, onClickSignIn }: ProfileButtonProps) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {session ? (
        <Link href={"/profile"}>
          <Button
            variant={"secondary"}
            className="flex items-center gap-1 hover:bg-primary hover:text-white transition duration-300"
          >
            Профиль
          </Button>
        </Link>
      ) : (
        <Button
          variant={"outline"}
          onClick={onClickSignIn}
          className="flex items-center gap-1 hover:bg-primary hover:text-white transition duration-300"
        >
          <User size={16} />
          Войти
        </Button>
      )}
    </div>
  );
};

export default ProfileButton;
