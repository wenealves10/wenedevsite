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
