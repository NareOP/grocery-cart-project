import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem 0;

  > div {
    padding: 0 1rem;
    margin: 3rem 0;
    max-width: 33.3%;
    min-width: 370px;
  }

  @media screen and (max-width: 24rem) {
    padding: 0;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: start;
  height: 100%;

  & p {
    width: 75% !important;
  }
`;

const ImageBox = styled.div(
  ({ image }) => `
  position: relative;
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 20rem;

  &::before {
    content: '';
    position: absolute;
    top: -1.5rem;
    left: -1.7rem;
    width: 100%;
    height: 100%;
    outline: 0.5rem solid var(--mainYellow);
    z-index: -1;
    transition: all 1s ease-in-out;
  }

  &:hover::before {
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 24rem) {
    min-height: 17.5rem !important;
    min-width: 17rem !important;
  }
`
);

export { AboutContainer, AboutContent, ImageBox };
