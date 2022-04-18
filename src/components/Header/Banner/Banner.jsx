import React, { useEffect, useState } from 'react';
import styles from './Banner.module.css';
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
  const [totalPrice, setTotalPrice] = useState(0);
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
            Welcome To <span>Grandma's</span>
          </Title>
          <Button size='larger'>explore</Button>
        </Center>
      </BannerContainer>
    </Section>
  );
};

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
