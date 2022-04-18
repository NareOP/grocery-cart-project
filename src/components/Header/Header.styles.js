import styled from 'styled-components';

const Menu = styled.div(
  ({ toggle }) => `
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: transparent;
  flex: 1;
  @media screen and (max-width: 992px) {
	position: absolute;
	left: 0;
	top: 5rem;
	z-index: 33;
	background: var(--mainWhite);
	width: 100%;
	overflow: hidden;
	height: ${toggle ? '0' : '10rem'};
	transition: height 0.3s;
	display: flex;
	flex-direction: column;
	padding-left: 1rem;
  }
`
);
const MenuItem = styled.span`
  padding: 8px;
  font-size: 1.5rem;
  transition: all 0.5s ease-in-out;
  color: var(--pink);
  &:hover {
    color: var(--mainBlack);
  }
  @media screen and (max-width: 992px) {
    padding-bottom: 0.625rem;
  }
`;

const Contacts = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const BasketInfoButton = styled.div`
  padding: 0.4rem 0.6rem;
  color: var(--mainWhite);
  border: 0.1rem solid var(--mainBlack);
  border-radius: 0.25rem;
  cursor: pointer;
  // FontAwesomeIcon
  & svg {
    margin-right: 1rem;
  }
  &:hover {
    color: var(--mainWhite);
    background-color: var(--pink);
    border-color: var(--pink);
    & svg path {
      fill: var(--mainWhite);
    }
    & span {
      color: var(--mainWhite);
    }
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  & div:not(:nth-child(1)) {
    margin: 0 3rem;
  }
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  backgroun-color: var(--mainWhite);
`;

const CollapseMenuIcon = styled.span`
  display: none;
  @media screen and (max-width: 992px) {
    float: right;
    display: block;
    visibility: visible;
    cursor: pointer;
  }
  &:first-child {
    color: var(--pink);
  }
`;

export {
  Menu,
  MenuItem,
  Contacts,
  BasketInfoButton,
  Nav,
  Navbar,
  CollapseMenuIcon,
};
