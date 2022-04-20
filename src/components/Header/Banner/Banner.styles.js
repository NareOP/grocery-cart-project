import styled from 'styled-components';

const BannerContainer = styled.div(
  ({ image }) => `
  background-image: url(${image});
  min-height: 100vh;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &::before {
      content: '';
      position: absolute;
      background-color: var(--yellowTrans);
      height: 100%;
      width: 100%;
  }
`
);

const BasketContainer = styled.div(
  ({ show }) => `
  position: absolute;
  top: 0;
  right: ${show ? 0 : '-18rem'};
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 2rem 1.25rem;
  background: var(--whiteTransparent);
  transition: all 0.7s ease-in-out;
  @media screen and (max-width: 992px) {
    right: -18rem !important;
    justify-content: space-between;
  }
`
);

const BasketItems = styled.div``;

const BasketInfo = styled.div`
  width: 100%;
  padding: 1.25rem 0;
  word-spacing: 2rem;
  display: flex;
  justify-content: center;
`;

const Elem = styled.span``;

export { BannerContainer, BasketContainer, BasketItems, BasketInfo };
