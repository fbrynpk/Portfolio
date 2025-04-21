import styled from "styled-components";

export const BgAnimation_svg = styled.svg`
  color: ${(props) => props.theme.colors.text};
  opacity: 0.3;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 145px;
    width: 140px;
    margin-left: -93%;
    margin-top: -30%;
  }
`;
