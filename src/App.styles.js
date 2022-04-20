import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          --pink: #ef7998;
          --mainYellow: #f9e494;
          --mainWhite: #fff;
          --mainBlack: #000;
          --yellowTrans: #f9e49480;
          --mainGrey: #eeeeee;
          --borderColor: #ffffff1f;
          --whiteTransparent: #ffffff80;
          --mainFontColor: #212529;
          --mutedText: #6c757d;
        }
        * {
          margin: 0;
          padding: 0;
          border: 0;
          font-family: 'Kaushan Script', cursive;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: var(--mainFontColor);
          text-align: left;
        }
      `}
    />
  );
};

export { GlobalStyles };
