import {
  ReactNode
} from 'react';
export interface IProps {
  children: ReactNode;
}

export interface ICover {
  title ? : string;
}

export interface ITechnology {
  id: string,
    name: string,
    defaultVisible: boolean,
    logo: {
      url: string
    }
}

export type ColorMode = "light" | "dark";

export interface ITheme {
  initialColorMode: ColorMode,
    fonts: {
      body: string
    },
    fontWeights: {
      normal: number,
      medium: number,
      bold: number,
      xBold: number,
    }
}

export interface ITechnologies {
  technologies: ITechnology[],
}

export interface ISerie {
  id: string;
  name: string;
  slug: string;
  description ? : string;
  seriesType ? : string;
  updatedAt: string;
  createdAt: string;
  thumbUrl ? : {
    id: string;
    url: string;
  };
  seasons: {
    id: string;
  } [];
}

export interface ISeries {
  series: ISerie[];
}

export interface IAllSeries {
  id: string;
  name: string;
  slug: string;
  description: string;
  updatedAt: string;
  thumbUrl: {
    url: string;
  };
  features: {
    name: string;
  }[];
  seasons: {
    id: string;
    slug: string;
    name: string;
    description: string;
    episodes: {
      id: string;
      slug: string;
      name: string;
      description: string;
      videoUrl: string;
      author: {
        id: string;
      }
      videosTime: string;
      thumbUrl: {
        id: string;
      }
    }[];
  }[];
};

export interface IUser {
  uid: string,
  email: string,
  name: string,
  token: string,
  provider: string,
  photoUrl: string,
}
