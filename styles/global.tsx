import Head from 'next/head';
import { ReactNode } from 'react';
import { CSSReset } from "@chakra-ui/react";
import { Global, css } from '@emotion/react';

type Props = {
  children?: ReactNode;
}

const GlobalStyle = ({ children }: Props) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    />
    {children}
  </>
);

export { GlobalStyle };
