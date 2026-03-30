export interface IStory {
  id: string;
  previewImage: string;
  items: IStoryItem[];
}

export interface IStoryItem {
  id: string;

  name: string;
  imageUrl: string;

  storiesId: string;
  stories: IStory;

  createdAt: Date;
  updatedAt: Date;
}
