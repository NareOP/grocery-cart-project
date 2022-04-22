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

const BasketInfo = styled.div`
  width: 100%;
  padding: 1.25rem 0;
  word-spacing: 2rem;
  display: flex;
  justify-content: center;
`;

const BasketItems = styled.div`
  width: 100%;
`;

const BasketItem = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  img {
    width: 3rem;
    height: auto;
    border-radius: 50%;
  }

  @media screen and (max-width: 992px) {
    right: -18rem !important;
    justify-content: space-between;
  }

  svg path {
    color: var(--pink);
    transition: all 0.8s ease-in-out;

    &:hover {
      color: var(--mainBlack);
      transition: all 0.8s ease-in-out;
    }
  }
`;

const BasketItemContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  span:first-child {
    font-weight: 700;
  }
`;

export {
  BannerContainer,
  BasketContainer,
  BasketItems,
  BasketInfo,
  BasketItem,
  BasketItemContent,
};
