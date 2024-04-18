import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There, <br /> I'm Raunak Pandey
      </SectionTitle>
      <SectionText>
        The purpose of my knowlodge about web develpoment to make the most
        interactive and awesome apps and make the world more easier and smarter.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://github.com/raunak-dows17?tab=repositories")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;