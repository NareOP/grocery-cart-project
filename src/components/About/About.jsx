import React from 'react';
import { AboutContent, ImageBox } from './About.styles.js';
import { Section, Title, Button } from '../Common.styles.js';
import sweetImage from '../../assets/images/sweets-1.jpeg';

const About = () => {
  return (
    <Section>
      <AboutContent>
        <Title color='black'>
          About <span>Us</span>
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          aliquam voluptas beatae vitae expedita consectetur nesciunt quia
          deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro
          at dolorum! Ad!
        </p>
        <Button>explore</Button>
      </AboutContent>
      <ImageBox>
        <img
          src={sweetImage}
          alt=''
        />
      </ImageBox>
    </Section>
  );
};

About.propTypes = {};

About.defaultProps = {};

export default About;
