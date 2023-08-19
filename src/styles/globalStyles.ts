import { css } from '@emotion/react';

import resetStyles from './resetStyles';

const mobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );

const globalStyles = css`
  ${resetStyles};

  :root {
    --safe-top: ${mobile ? 'env(safe-area-inset-top)' : '24px'};
    --safe-right: ${mobile ? 'env(safe-area-inset-right)' : '0px'};
    --safe-bottom: ${mobile ? 'env(safe-area-inset-bottom)' : '24px'};
    --safe-left: ${mobile ? 'env(safe-area-inset-left)' : '0px'};
  }

  html {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  html {
    overflow: hidden;
    background-color: #eee;
  }

  body {
    padding: 0;
    overflow: hidden scroll;
  }

  #root {
    position: relative;
    overflow: unset;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;

export default globalStyles;
