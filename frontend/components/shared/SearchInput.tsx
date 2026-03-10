"use client";

import { cn } from "@/lib/utils";
import { API } from "@/services/api-client";
import { type ProductType } from "@/shared/types/product-type";
import { isDev } from "@/shared/utils/is-dev.util";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type KeyboardEvent, useRef, useState } from "react";
import { useDebounce } from "react-use";
import { Input } from "../ui";

interface SearchInputProps {
  className?: string;
}

const SearchInput = ({ className }: SearchInputProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const ref = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  const router = useRouter();

  useDebounce(
    () => {
      API.products.search(searchQuery).then((res) => setProducts(res));
    },
    300,
    [searchQuery]
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setFocused(!focused);
      ref.current?.blur();
    }
  };

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}

      <div
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative items-center transition-opacity",
          className,
          focused ? "z-40 bg-white" : ""
        )}
      >
        <Input
          ref={ref}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="w-full px-4 py-2 h-8 border border-gray-300 rounded-xl ring-none"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => handleKeyDown(e)}
          onKeyUp={(e) => handleEnterKey(e)}
        />
        <Search className="absolute top-1.5 right-2 h-5 text-gray-400" />

        <div
          className={cn(
            "absolute w-full bg-white rounded-lg py-2 top-14 shadow-md transition-all duration-200 invisible opacity-20 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="flex hover:bg-primary/10 px-3 py-2 gap-3 items-center"
            >
              <Image
                unoptimized={isDev}
                src={product.imageUrl}
                className="h-8 w-8"
                alt={product.name}
                width={32}
                height={32}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
