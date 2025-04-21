import React, { useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import { gsap } from "gsap";
import { FaBrain, FaHeartbeat, FaLanguage, FaEye } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import {
  ImageContainer,
  List,
  ListContainer,
  ListTitle,
  ListParagraph,
  ListItem,
  IconWrapper
} from "./TechnologiesStyles";

const Technologies = () => {
  const theme = useTheme();
  const containerRef = useRef();
  const itemsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const items = itemsRef.current;

    const tl = gsap.timeline();

    // Add all animations to the same timeline
    tl.to(
      container,
      {
        backgroundColor: theme.colors.background1,
        duration: 0.5,
        ease: "power2.inOut"
      },
      0
    ); // Start at 0 seconds

    items.forEach((item) => {
      tl.to(
        item,
        {
          backgroundColor: theme.colors.background2,
          duration: 0.5,
          ease: "power2.inOut"
        },
        0 // Start at 0 seconds
      );
    });
  }, [theme]);

  const technologies = [
    {
      icon: <FaBrain size={24} />,
      title: "Machine Learning",
      description:
        "Expert in developing and deploying ML models for real-world applications"
    },
    {
      icon: <FaHeartbeat size={24} />,
      title: "Healthcare AI",
      description:
        "Specialized in AI solutions for healthcare and medical applications"
    },
    {
      icon: <FaLanguage size={24} />,
      title: "NLP",
      description:
        "Advanced natural language processing and text analysis expertise"
    },
    {
      icon: <FaEye size={24} />,
      title: "Computer Vision",
      description:
        "Deep learning for image recognition and visual data analysis"
    }
  ];

  return (
    <Section id="tech" ref={containerRef}>
      <SectionDivider />
      <br />
      <SectionTitle>Experiences</SectionTitle>
      <ImageContainer>
        <List>
          {technologies.map((tech, index) => (
            <ListItem key={index}>
              <ListContainer ref={(el) => (itemsRef.current[index] = el)}>
                <IconWrapper>{tech.icon}</IconWrapper>
                <ListTitle>{tech.title}</ListTitle>
                <ListParagraph>{tech.description}</ListParagraph>
              </ListContainer>
            </ListItem>
          ))}
        </List>
      </ImageContainer>
    </Section>
  );
};

export default Technologies;
