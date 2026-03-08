import { cn } from "@/lib/utils";
import { type PropsWithChildren } from "react";

interface ContainerProps {
  className?: string;
}

const Container = ({
  className,
  children,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <div className={cn("max-w-[1280px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
