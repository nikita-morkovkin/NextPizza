import { useEffect, useState } from "react";
import { API } from "../services/api-client";
import { IStory } from "../types";

interface ReturnProps {
  stories: IStory[];
  onClickStory: (story: IStory) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedStory: IStory | null;
}

const useStories = (): ReturnProps => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStory, setSelectedStory] = useState<IStory | null>(null);

  useEffect(() => {
    API.stories.getAll().then((data) => setStories(data));
  }, []);

  const onClickStory = (story: IStory) => {
    setSelectedStory(story);

    if (story.items.length > 0) {
      setIsOpen(true);
    }
  };

  return {
    stories,
    onClickStory,
    isOpen,
    setIsOpen,
    selectedStory,
  };
};

export default useStories;
