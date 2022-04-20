import styled from 'styled-components';

const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: var(--mainGrey);
  padding: 4rem 2rem;
`;

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'items',
})``;

const SearchBox = styled.div`
  width: 40%;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 1rem;
  & svg {
    padding: 0.375rem 0.75rem;
    width: 1.5rem;
    height: 1.75rem;
    path {
      fill: var(--pink);
    }
  }
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 10% 0 10%;
`;

const Item = styled.div`
  width: 24rem;
  position: relative;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: var(--mainWhite);
  background-clip: border-box;
  border: 1px solid var(--borderColor);
  border-radius: 0.25rem;
  overflow: hidden;
  margin: 1rem;
`;

const ItemImageContainer = styled.div`
  width: inherit;
  height: inherit;
  overflow: hidden;
  img {
    width: inherit;
    transition: 1s ease-in-out;
    height: 100%;
  }
  & svg {
    width: 1.5rem;
    position: absolute;
    bottom: 2rem;
    background: var(--mainYellow);
    padding: 0.75rem;
    border-radius: 1rem;
    transition: 1s ease-in-out;
    z-index: 1;
  }
  &:hover {
    overflow: visible;
    img {
      transform: scale(1.3);
      transition: 1s ease-in-out;
    }
    span {
      transform: translate(-2.5em, -2.2em);
      transition-timing-function: ease-in-out;
      transition: 1s ease-in-out;
    }
  }
`;

const ItemContent = styled.div`
  background-color: var(--mainWhite);
  color: var(--mainBlack);
  padding: 1.25rem;
  font-size: 1.25rem;
  justify-content: space-between;
  display: flex;
  z-index: 2;
  p {
    word-spacing: 2rem;
    margin-bottom: 0.5rem;
  }
`;

export {
  StoreContainer,
  Input,
  SearchBox,
  Items,
  Item,
  ItemImageContainer,
  ItemContent,
};
