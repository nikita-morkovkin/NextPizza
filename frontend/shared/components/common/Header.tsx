"use client";

import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CardButton from "./card/CartButton";
import Container from "./Container";
import { AuthModal } from "./modals";
import ProfileButton from "./ProfileButton";
import SearchInput from "./SearchInput";

interface HeaderProps {
  isEnableSearchInput?: boolean;
  isEnableBuyButton?: boolean;
  className?: string;
}

const Header = ({
  isEnableSearchInput = true,
  isEnableBuyButton = true,
  className,
}: HeaderProps) => {
  const [openModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Left side */}
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <Image src={"/logo.png"} alt="Logo" width={35} height={35} />
            <div className="flex flex-col">
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                Вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        {/* Search bar */}
        {isEnableSearchInput && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/* Right side */}
        <div className="flex items-center gap-3">
          <AuthModal isOpen={openModal} onClose={() => setIsOpenModal(false)} />

          <ProfileButton onClickSignIn={() => setIsOpenModal(true)} />

          {isEnableBuyButton && <CardButton />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
