import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import * as FaIcons from "react-icons/fa";
import styled from "styled-components";
import gsap from "gsap";

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  position: relative;
  overflow: hidden;

  &:hover {
    color: ${(props) => props.theme.colors.accent1};
  }
`;

const Icon = styled.div`
  color: ${(props) => props.theme.colors.text};
  position: relative;
  z-index: 1;
  transition: none;

  &:hover {
    color: ${(props) => props.theme.colors.accent1};
  }
`;

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      const tl = gsap.timeline();

      // Animate the background color change
      tl.to("body", {
        backgroundColor: isDarkTheme ? "#121212" : "#f8f9fa",
        duration: 0.5,
        ease: "power2.inOut"
      });

      // Animate the icon
      tl.to(buttonRef.current, {
        scale: 1.2,
        duration: 0.2,
        ease: "power2.out"
      }).to(buttonRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "power2.in"
      });
    }
  }, [isDarkTheme]);

  return (
    <ToggleButton ref={buttonRef} onClick={toggleTheme}>
      <Icon>
        {isDarkTheme ? (
          <FaIcons.FaSun size="2rem" />
        ) : (
          <FaIcons.FaMoon size="2rem" />
        )}
      </Icon>
    </ToggleButton>
  );
};

export default ThemeToggle;
