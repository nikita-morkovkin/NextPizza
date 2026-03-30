"use client";

import useStories from "@/shared/hooks/useStories";
import { cn } from "@/shared/lib/utils";
import { X } from "lucide-react";
import ReactStories from "react-insta-stories";
import Container from "./Container";

interface StoriesProps {
  className?: string;
}

const Stories = ({ className }: StoriesProps) => {
  const { stories, onClickStory, isOpen, setIsOpen, selectedStory } =
    useStories();

  const isStoriesEmpty = stories.length === 0;

  return (
    <Container
      className={cn("flex items-center justify-between gap-2 my-10", className)}
    >
      {isStoriesEmpty && [
        ...Array(6).map((_, index) => (
          <div
            key={index}
            className="w-[200px] h-[250px] bg-gray-200 rounded-md animate-pulse"
          />
        )),
      ]}

      {stories.map((story) => (
        <img
          key={story.id}
          src={story.previewImage}
          alt={"Story"}
          height={250}
          width={200}
          className="rounded-md cursor-pointer"
          onClick={() => onClickStory(story)}
        />
      ))}

      {isOpen && (
        <div className="absolute left-0 top-0 h-full bg-black/80 flex items-center justify-center z-20">
          <div className="relative w-[520px]" />

          <button
            className="absolute -right-10 -top-5 z-30"
            onClick={() => setIsOpen(false)}
          >
            <X className="absolute top-0 right-0 w-8 h-8 text-white/50" />
          </button>
          <ReactStories
            onAllStoriesEnd={() => setIsOpen(false)}
            stories={
              selectedStory?.items.map((item) => ({
                url: item.imageUrl,
              })) || []
            }
            defaultInterval={3000}
            width={520}
            height={800}
          />
        </div>
      )}
    </Container>
  );
};

export default Stories;
