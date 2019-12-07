/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
          }
          p {
            margin: 0;
            line-height: 1.25;
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
          }
        `}
      />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
