export type ChildrenProps = {
  children: React.ReactNode;
};

export type CharacterForm = {
  char: string;
  name?: string;
  type: string;
  desc?: string;
  pronuntiation: string;
  charRomaji: string;
  nameRomaji?: string;
};

export type CharacterItem = {
  id: string;
  character: string;
  type: string;
  pronunciation: string;
  characterRomaji: string;
  name: string;
  nameRomaji: string;
  description?: string;
  imageUrl: string;
};

export type FormErrors = {
  [key: string]: string;
};

export type CharacterType = {
  name: string;
  displayname: string;
};

export type Summary = {
  title: string;
  summary: string;
  content: Content[];
};

export type Content = {
  title: string;
  count: number;
  description: string;
};
