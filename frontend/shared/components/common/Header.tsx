import { cn } from "@/shared/lib/utils";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";
import Container from "./Container";
import SearchInput from "./SearchInput";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
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
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Button variant={"outline"} className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>

          <Button className="group relative flex items-center overflow-hidden">
            <b className="text-white">520₽</b>

            <span className="h-4 w-px bg-white/30 mx-3" />

            <div className="relative flex items-center">
              <div className="flex items-center gap-1 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
                <ShoppingCart className="text-white" size={16} />
                <b className="text-white">3</b>
              </div>

              <ArrowRight
                size={16}
                className="absolute left-0 text-white transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </div>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
