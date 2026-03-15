import { cn } from "@/shared/lib/utils";
import CategoriesList from "./CategoriesList";
import Container from "./Container";
import SortPopup from "./SortPopup";

interface TopBarProps {
  className?: string;
}

const TopBar = ({ className }: TopBarProps) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-background py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <CategoriesList />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
