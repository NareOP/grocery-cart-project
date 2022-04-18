import styled from 'styled-components';

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  padding: 5% 0 5% 0;
`;

const ImageBox = styled.div`
  wdith: 70%;
  & > img::before {
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
`;

export { AboutContent, ImageBox };
