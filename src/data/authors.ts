export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Abi",
    slug: "abi",
    image: "./src/assets/authors/abi.jpg",
    bio: "Abi is a baker and lover of all things sweet. S",
  },
];
