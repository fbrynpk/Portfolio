import React, { useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import gsap from "gsap";
import {
  SectionDivider,
  Section,
  SectionTitle
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText, Imgs } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Acomplishments = () => {
  const { theme } = useTheme();
  const itemsRef = useRef([]);

  useEffect(() => {
    if (itemsRef.current.length > 0) {
      const tl = gsap.timeline();

      itemsRef.current.forEach((item) => {
        tl.to(
          item,
          {
            backgroundColor: theme.colors.background2,
            duration: 0.5,
            ease: "power2.inOut"
          },
          0
        );
      });
    }
  }, [theme]);

  return (
    <Section id="awards">
      <SectionDivider />
      <br />
      <SectionTitle>Awards</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index} ref={(el) => (itemsRef.current[index] = el)}>
            <BoxNum>
              <Imgs src={card.image} alt={card.text} />
            </BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
