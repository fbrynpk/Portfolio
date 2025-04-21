import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.text};
  transition: none;
`;

export const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 250px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 200px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 150px;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 10px;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.background2};
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 700px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 600px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  color: inherit;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: currentColor;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: inherit;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: inherit;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: inherit;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: ${(props) => props.theme.colors.background2};
  border-radius: 15px;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.8;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;

export const Tag = styled.li`
  color: inherit;
  font-size: 1.5rem;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;
  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 1000px;
    padding: 0 70px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 800px;
    padding: 0 60px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
    padding: 0 50px;
  }
`;

export const CarouselContainer = styled.ul`
  width: 100%;
  background: inherit;
  padding: 2rem;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  min-height: 600px;
  @media ${(props) => props.theme.breakpoints.lg} {
    min-height: 550px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    min-height: 500px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 450px;
  }
`;

export const CarouselItem = styled.div`
  position: absolute;
  width: 100%;
  max-width: 800px;
  background: inherit;
  border-radius: 10px;
  opacity: ${(props) => (props.active === props.index ? 1 : 0)};
  transform: ${(props) => {
    const totalItems = props.totalItems;
    const active = props.active;
    const index = props.index;

    // Calculate the shortest distance between items
    let distance = index - active;
    if (Math.abs(distance) > totalItems / 2) {
      distance = distance > 0 ? distance - totalItems : distance + totalItems;
    }

    if (distance === 0) return "translateX(0) scale(1)";
    if (distance < 0) return "translateX(-100%) scale(0.8)";
    return "translateX(100%) scale(0.8)";
  }};
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => (props.active === props.index ? 2 : 1)};
  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 700px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 600px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
  }
`;

export const CarouselButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
  z-index: 3;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 1rem;
    gap: 0.5rem;
  }
`;

export const CarouselButton = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: currentColor;
  opacity: ${(props) => (props.active === props.index ? 1 : 0.3)};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 8px;
    height: 8px;
  }
`;

export const CarouselButtonDot = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: inherit;
  border: none;
  color: inherit;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  z-index: 3;
  transition: all 0.3s ease;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 25px;
    height: 25px;
    font-size: 16px;
  }
`;

export const LeftArrow = styled(CarouselArrow)`
  left: 20px;
`;

export const RightArrow = styled(CarouselArrow)`
  right: 20px;
`;

export const ViewToggle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

export const ToggleButton = styled.button`
  background: inherit;
  color: inherit;
  border: 2px solid currentColor;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  opacity: ${(props) => (props.active ? 1 : 0.5)};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;
