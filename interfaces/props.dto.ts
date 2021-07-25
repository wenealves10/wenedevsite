import { ReactNode } from 'react';
 export interface IProps {
   children: ReactNode;
 }

 export interface ICover {
   title?: string;
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
   description?: string;
   seriesType?: string;
   thumbUrl?: {
    id: string;
    url: string;
   };
   seasons: {
     id: string;
   }[];
 }

 export interface ISeries {
   series: ISerie[];
 }
