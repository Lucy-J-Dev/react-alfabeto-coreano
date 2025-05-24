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

export type FormErrors = {
  [key: string]: string;
};

export type CharacterType = {
  name: string;
  displayname: string;
};
