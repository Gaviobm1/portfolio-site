import { IGatsbyImageData } from "gatsby-plugin-image";

interface ChildImageSharp {
  gatsbyImageData: IGatsbyImageData;
}

export interface File {
  childImageSharp: ChildImageSharp;
}

type Node = {
  gatsbyImageData: IGatsbyImageData;
};

export type Project = {
  name: string;
  github: string;
  link: string;
  excerpt: string;
  technologies: [string];
};

export type Image = {
  image?: IGatsbyImageData;
  alt: string;
  caption: string;
};

export type HeroDataType = {
  bigImage: Image;
  middleImage: Image;
  sideImage: Image;
  title: string;
  blurb: string;
};

export type QueryDataType = {
  allProjectsJson: {
    nodes: [Project];
  };
  allImageSharp: {
    nodes: Node[];
  };
  heroDataJson: HeroDataType;
};

export type QueryResult = {
  allProjectsJson: QueryDataType;
  file: File;
};

export type Size = {
  "--height": string | number;
  "--border-radius": string | number;
  "--progress-radius": string | number;
  "--bar-height": string | number;
  "--padding": string | number;
};

export type Sizes = {
  small: Size;
  medium: Size;
  large: Size;
};
