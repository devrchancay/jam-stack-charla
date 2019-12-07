/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';

const Header = () => {
  return (
    <div css={tw`bg-blue-800 p-8`}>
      <h1 css={tw`m-0 p-0 text-center text-white`}>Speakers, Wordcamp 2019</h1>
    </div>
  );
};

export default Header;
