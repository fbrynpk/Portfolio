import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.background1};

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 50px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    padding: 15px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 8px;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 13%;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    align-items: stretch;
    justify-content: center;
    margin-left: 50%;
    margin-top: 55%;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${(props) => props.theme.colors.accent1};
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
  }
  &:hover {
    color: ${(props) => props.theme.colors.accent1};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${(props) => props.theme.colors.text};
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: ${(props) => props.theme.colors.background2};
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const MargList = styled.li`
  margin: 2%;
`;
