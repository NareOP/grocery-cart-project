import React from 'react';
import { Title, Button, TextMuted } from 'components/Common.styles';
import { AboutContainer, AboutContent, ImageBox } from './About.styles';

const About = () => (
  <AboutContainer>
    <AboutContent>
      <Title color='black'>
        About <span>Us</span>
      </Title>
      <TextMuted>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam
        voluptas beatae vitae expedita consectetur nesciunt quia deserunt
        asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum!
        Ad!
      </TextMuted>
      <Button>explore</Button>
    </AboutContent>
    <ImageBox image='https://js-beginners.github.io/grocery-cart-project/img/sweets-1.jpeg' />
  </AboutContainer>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
