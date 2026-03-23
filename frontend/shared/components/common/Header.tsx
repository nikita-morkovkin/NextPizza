import { cn } from "@/shared/lib/utils";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";
import Container from "./Container";
import SearchInput from "./SearchInput";
import CardButton from "./card/CartButton";

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
          <Button
            variant={"outline"}
            className="flex items-center gap-1 hover:bg-primary hover:text-white transition duration-300"
          >
            <User size={16} />
            Войти
          </Button>

          {isEnableBuyButton && <CardButton />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
