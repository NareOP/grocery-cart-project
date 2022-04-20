import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  Nav,
  Menu,
  MenuItem,
  Contacts,
  BasketInfoButton,
  CollapseMenuIcon,
} from './Header.styles';
import Banner from './Banner/Banner';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  const menu = ['Home', 'About', 'Store'];
  const [toggleMenu, setToggleMenu] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  const [totalPrice] = useState(0);
  const items = [];

  return (
    <header>
      <Navbar>
        <img
          src={logo}
          alt='logo'
        />
        <Nav>
          <Menu toggle={toggleMenu}>
            {menu.map((menuItem) => (
              <MenuItem key={menuItem}>{menuItem}</MenuItem>
            ))}
          </Menu>
          <Contacts>
            <FontAwesomeIcon icon={faPhone} />+ 123 456 789
          </Contacts>
          <BasketInfoButton onClick={() => setOpenBasket(!openBasket)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>
              {items.length}items - ${totalPrice}
            </span>
          </BasketInfoButton>
        </Nav>
        <CollapseMenuIcon onClick={() => setToggleMenu(!toggleMenu)}>
          <FontAwesomeIcon
            icon={faBars}
            size='2x'
            color='white'
          />
        </CollapseMenuIcon>
      </Navbar>
      <Banner openBasket={openBasket} />
    </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
