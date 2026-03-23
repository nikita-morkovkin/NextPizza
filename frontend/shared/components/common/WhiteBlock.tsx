import { cn } from "@/shared/lib/utils";
import { PropsWithChildren, type ReactNode } from "react";
import { Title } from "./Title";

interface WhiteBlockProps {
  className?: string;
  contentClassName?: string;
  title?: string;
  endAdornment?: ReactNode;
}

const WhiteBlock = ({
  children,
  contentClassName,
  className,
  title,
  endAdornment,
}: PropsWithChildren<WhiteBlockProps>) => {
  return (
    <div className={cn("bg-white rounded-3xl", className)}>
      {title && (
        <div>
          <Title
            text={title}
            size="sm"
            className="flex items-center justify-between p-5 px-7 border-b border-gray-100"
          />
          {endAdornment}
        </div>
      )}

      <div className={cn("px-5 py-4", contentClassName)}>{children}</div>
    </div>
  );
};

export default WhiteBlock;
