import { Link } from "react-scroll";
import React, { useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styled from "styled-components";
import gsap from "gsap";
import { useTheme } from "../../context/ThemeContext";

import {
  Container,
  Div1,
  Div2,
  Div3,
  MargList,
  NavLink,
  SocialIcons
} from "./HeaderStyles";

const HomeIcon = styled(FaIcons.FaHome)`
  color: ${(props) => props.theme.colors.text};
`;

const Header = () => {
  const { isDarkTheme } = useTheme();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        backgroundColor: isDarkTheme ? "#121212" : "#fafafa",
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
  }, [isDarkTheme]);

  return (
    <Container ref={containerRef}>
      <Div1>
        <Link
          activeClass="active"
          to="home"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <SocialIcons>
            <HomeIcon size="4rem" />
          </SocialIcons>
        </Link>
      </Div1>
      <Div2>
        <MargList>
          <Link activeClass="active" to="about">
            <NavLink>About</NavLink>
          </Link>
        </MargList>
        <MargList>
          <Link activeClass="active" to="projects">
            <NavLink>Projects</NavLink>
          </Link>
        </MargList>
        <MargList>
          <Link activeClass="active" to="tech">
            <NavLink>Experiences</NavLink>
          </Link>
        </MargList>
        <MargList>
          <Link activeClass="active" to="certificates">
            <NavLink>Certificates</NavLink>
          </Link>
        </MargList>
        <MargList>
          <Link activeClass="active" to="awards">
            <NavLink>Awards</NavLink>
          </Link>
        </MargList>
        <MargList>
          <Link activeClass="active" to="contact">
            <NavLink>Contact</NavLink>
          </Link>
        </MargList>
      </Div2>
      <Div3>
        <ThemeToggle />
        <SocialIcons href="https://github.com/fbrynpk">
          <FaIcons.FaGithub size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/febryan-putra-kartika-592934207/">
          <FaIcons.FaLinkedin size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/fbrynpk/">
          <FaIcons.FaInstagram size="4rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
