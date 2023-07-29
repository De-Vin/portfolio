import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there... <br />
          I'm Vinay Avvaru
        </SectionTitle>
        <SectionText>
         A highly motivated and skilled Frontend Developer with a focus on ReactJS, 
         currently seeking new opportunities in the tech industry to contribute my work for reputable organization.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;