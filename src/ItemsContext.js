import React, { createContext, useState, useEffect, useMemo } from 'react';

const items = [
  {
    id: 1,
    image:
      'https://js-beginners.github.io/grocery-cart-project/img/cake-1.jpeg',
    title: 'Cake item',
    price: 5,
  },
  {
    id: 2,
    image:
      'https://js-beginners.github.io/grocery-cart-project/img/cake-2.jpeg',
    title: 'Cake item',
    price: 5,
  },
  {
    id: 3,
    image:
      'https://js-beginners.github.io/grocery-cart-project/img/cake-3.jpeg',
    title: 'Cake item',
    price: 5,
  },
  {
    id: 4,
    image:
      'https://js-beginners.github.io/grocery-cart-project/img/cupcake-1.jpeg',
    title: 'Cupcake item',
    price: 10,
  },
  {
    id: 5,
    image:
      'https://js-beginners.github.io/grocery-cart-project/img/cupcake-2.jpeg',
    title: 'Cupcake item',
    price: 10,
  },
  {
    id: 6,
    image:
      'https://js-beginners.github.io/grocery-cart-project/img/cupcake-3.jpeg',
    title: 'Cupcake item',
    price: 10,
  },
  {
    id: 7,
    image:
      'https://js-beginners.github.io/grocery-cart-project/img/doughnut-1.jpeg',
    title: 'Cupcake item',
    price: 15,
  },
  {
    id: 8,
    image:
      'https://js-beginners.github.io/grocery-cart-project/img/doughnut-2.jpeg',
    title: 'Cupcake item',
    price: 15,
  },
  {
    id: 9,
    image:
      'https://js-beginners.github.io/grocery-cart-project/img/doughnut-3.jpeg',
    title: 'Cupcake item',
    price: 15,
  },
];

const ItemsContext = createContext();
export { ItemsContext };

localStorage.setItem('items', JSON.stringify(items));
localStorage.setItem('basketItems', JSON.stringify([]));

const ItemsContextProvider = (props) => {
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = (basketItem) => {
    setBasketItems((prev) => [...prev, basketItem]);
    setTotalPrice((prev) => prev + basketItem.price);
  };

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }, [basketItems]);

  return (
    <ItemsContext.Provider
      value={useMemo(
        () => ({ basketItems, totalPrice, dispatch }),
        [basketItems, totalPrice, dispatch]
      )}>
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
