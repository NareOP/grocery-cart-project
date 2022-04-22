import React, { useState, useContext } from 'react';
import { ItemsContext } from 'ItemsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import logo from 'assets/images/logo.svg';
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

const Header = () => {
  const menu = ['Home', 'About', 'Store'];
  const [toggleMenu, setToggleMenu] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  const { basketItems: items = [], totalPrice } = useContext(ItemsContext);

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
          <BasketInfoButton onClick={() => setOpenBasket((prev) => !prev)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>
              {items.length}items - ${totalPrice}
            </span>
          </BasketInfoButton>
        </Nav>
        <CollapseMenuIcon onClick={() => setToggleMenu((prev) => !prev)}>
          <FontAwesomeIcon
            icon={faBars}
            size='2x'
            color='white'
          />
        </CollapseMenuIcon>
      </Navbar>
      <Banner
        openBasket={openBasket}
        items={items}
        totalPrice={totalPrice}
      />
    </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
