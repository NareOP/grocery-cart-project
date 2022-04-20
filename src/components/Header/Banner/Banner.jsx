import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  Button,
  Center,
  Section,
  HorizontalButtons,
} from '../../Common.styles';
import {
  BannerContainer,
  BasketContainer,
  BasketItems,
  BasketInfo,
} from './Banner.styles';
import backgroundImage from '../../../assets/images/headerBcg.jpeg';

const Banner = ({ openBasket }) => {
  const [totalPrice] = useState(0);
  return (
    <Section>
      <BasketContainer show={openBasket}>
        <BasketItems />
        <BasketInfo>Total ${totalPrice}</BasketInfo>
        <HorizontalButtons>
          <Button>CLEAR CART</Button>
          <Button pink>CHECKOUT</Button>
        </HorizontalButtons>
      </BasketContainer>
      <BannerContainer image={backgroundImage}>
        <Center>
          <Title color='white'>
            Welcome To <span>Grandma&aposs</span>
          </Title>
          <Button size='larger'>explore</Button>
        </Center>
      </BannerContainer>
    </Section>
  );
};

Banner.propTypes = {
  openBasket: PropTypes.bool,
};

Banner.defaultProps = {
  openBasket: false,
};

export default Banner;
