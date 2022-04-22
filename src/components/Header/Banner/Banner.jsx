import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  Title,
  Button,
  Center,
  Section,
  HorizontalButtons,
} from 'components/Common.styles';
import backgroundImage from 'assets/images/headerBcg.jpeg';
import {
  BannerContainer,
  BasketContainer,
  BasketInfo,
  BasketItems,
  BasketItem,
  BasketItemContent,
} from './Banner.styles';

const Banner = ({ openBasket, items, totalPrice }) => (
  <Section>
    <BasketContainer show={openBasket}>
      <BasketItems>
        {items.map((item) => (
          <BasketItem key={`${item.id}`}>
            <img
              alt={item.title}
              src={item.image}
            />
            <BasketItemContent>
              <span>{item.title}</span>
              <span>${item.price}</span>
            </BasketItemContent>
            <FontAwesomeIcon icon={faTrash} />
          </BasketItem>
        ))}
      </BasketItems>
      <BasketInfo>Total ${totalPrice}</BasketInfo>
      <HorizontalButtons>
        <Button>clear cart</Button>
        <Button pink>checkout</Button>
      </HorizontalButtons>
    </BasketContainer>
    <BannerContainer image={backgroundImage}>
      <Center>
        <Title color='white'>
          Welcome To <span>Grandma&apos;s</span>
        </Title>
        <Button size='larger'>explore</Button>
      </Center>
    </BannerContainer>
  </Section>
);

Banner.propTypes = {
  openBasket: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  totalPrice: PropTypes.number,
};

Banner.defaultProps = {
  openBasket: false,
  items: [],
  totalPrice: 0,
};

export default Banner;
