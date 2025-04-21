import React, { useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import gsap from "gsap";
import {
  Section,
  SectionTitle,
  SectionDivider
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText, Imgs } from "./CertificateStyles";
import { certif } from "../../constants/constants";

const Certificate = () => {
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
    <Section id="certificates">
      <SectionDivider />
      <br />
      <SectionTitle>Certifications</SectionTitle>
      <Boxes>
        {certif.map((card, index) => (
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

export default Certificate;
