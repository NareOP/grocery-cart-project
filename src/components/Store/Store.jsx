import React from 'react';
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
} from './Store.styles';

const Store = () => {
  const items = [
    {
      id: 1,
      image: './images/cake-1.jpeg',
      title: 'Cake item',
      price: 5,
    },
    {
      id: 2,
      image: './images/cake-2.jpeg',
      title: 'Cake item',
      price: 5,
    },
    {
      id: 3,
      image: './images/cake-3.jpeg',
      title: 'Cake item',
      price: 5,
    },
    {
      id: 4,
      image: './images/cupcake-1.jpeg',
      title: 'Cupcake item',
      price: 10,
    },
    {
      id: 5,
      image: './images/cupcake-2.jpeg',
      title: 'Cupcake item',
      price: 10,
    },
    {
      id: 6,
      image: './images/cupcake-3.jpeg',
      title: 'Cupcake item',
      price: 10,
    },
    {
      id: 7,
      image: './images/doughnut-1.jpeg',
      title: 'Cupcake item',
      price: 15,
    },
    {
      id: 8,
      image: './images/doughnut-2.jpeg',
      title: 'Cupcake item',
      price: 15,
    },
    {
      id: 9,
      image: './images/doughnut-3.jpeg',
      title: 'Cupcake item',
      price: 15,
    },
  ];
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
                src={item.image}
                alt={item.title}
              />
              <FontAwesomeIcon icon={faShoppingCart} />
            </ItemImageContainer>
            <ItemContent>
              <p>
                {item.title} ${item.price}
              </p>
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
