import React, { useContext } from 'react';
import { ItemsContext } from 'ItemsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Title, Button, HorizontalButtons } from 'components/Common.styles';
import {
  StoreContainer,
  Input,
  SearchBox,
  Items,
  Item,
  ItemImageContainer,
  ItemContent,
  IconContainer,
} from './Store.styles';

const Store = () => {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const { dispatch } = useContext(ItemsContext);
  const addItemInBasket = (id) => {
    alert('item added to the card');
    const basketItem = items.find((i) => i.id === id);
    dispatch(basketItem);
  };

  return (
    <StoreContainer>
      <Title>
        Our <span>store</span>
      </Title>
      <HorizontalButtons>
        <Button>All</Button>
        <Button>Cakes</Button>
        <Button>Cupcakes</Button>
        <Button>Sweets</Button>
        <Button>Doughnuts</Button>
      </HorizontalButtons>

      <SearchBox>
        <FontAwesomeIcon icon={faSearch} />
        <Input />
      </SearchBox>
      <Items>
        {items.map((item) => (
          <Item key={item.id}>
            <ItemImageContainer>
              <img
                alt={item.title}
                src={item.image}
              />
              <IconContainer>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  onClick={() => addItemInBasket(item.id)}
                />
              </IconContainer>
            </ItemImageContainer>
            <ItemContent>
              <span>{item.title}</span>
              <span>${item.price}</span>
            </ItemContent>
          </Item>
        ))}
      </Items>
    </StoreContainer>
  );
};

Store.propTypes = {};

Store.defaultProps = {};

export default Store;
