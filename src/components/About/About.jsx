import React from 'react';
import { AboutContainer, AboutContent, ImageBox } from './About.styles';
import { Title, Button, TextMuted } from '../Common.styles';
import sweetImage from '../../assets/images/sweets-1.jpeg';

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
    <ImageBox image={sweetImage} />
  </AboutContainer>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
