import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { gsap } from "gsap";
import { FaGithub, FaExternalLinkAlt, FaTh, FaThList } from "react-icons/fa";
import {
  ProjectsWrapper,
  GridContainer,
  BlogCard,
  TitleContent,
  HeaderThree,
  Hr,
  CardInfo,
  TagList,
  Tag,
  UtilityList,
  ExternalLinks,
  CarouselWrapper,
  CarouselContainer,
  CarouselItem,
  CarouselMobileScrollNode,
  CarouselButtons,
  CarouselButton,
  CarouselButtonDot,
  CarouselArrow,
  ViewToggle,
  ToggleButton,
  Img,
  LeftArrow,
  RightArrow
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const elements = [
      wrapperRef.current,
      containerRef.current,
      ...itemsRef.current
    ];

    tl.to(elements, {
      backgroundColor: theme.colors.background1,
      color: theme.colors.text,
      duration: 0.5,
      ease: "power2.inOut"
    });

    // Animate BlogCard backgrounds and text
    const blogCards = document.querySelectorAll(".blog-card");
    const cardInfos = document.querySelectorAll(".card-info");
    const titleContents = document.querySelectorAll(".title-content");
    const externalLinks = document.querySelectorAll(".external-link");

    tl.to(
      [blogCards, cardInfos, titleContents, externalLinks],
      {
        backgroundColor: theme.colors.background2,
        color: theme.colors.text,
        duration: 0.5,
        ease: "power2.inOut"
      },
      0
    );
  }, [theme]);

  useEffect(() => {
    if (viewMode === "carousel") {
      autoPlayRef.current = setInterval(() => {
        setActive((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [viewMode]);

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActive(index);
  };

  const renderProjectCard = ({
    id,
    image,
    title,
    play,
    description,
    tags,
    source,
    visit
  }) => (
    <BlogCard key={id}>
      <a href={play}>
        <Img src={image} />
      </a>
      <TitleContent className="title-content">
        <HeaderThree title>{title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo>{description}</CardInfo>
      <div>
        <TitleContent>Languages</TitleContent>
        <TagList>
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks
          href={visit}
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          <FaGithub /> Code
        </ExternalLinks>
        <ExternalLinks
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          <FaExternalLinkAlt /> Source
        </ExternalLinks>
      </UtilityList>
    </BlogCard>
  );

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <ProjectsWrapper ref={wrapperRef}>
        <ViewToggle>
          <ToggleButton
            active={viewMode === "grid"}
            onClick={() => setViewMode("grid")}
          >
            <FaTh /> Grid
          </ToggleButton>
          <ToggleButton
            active={viewMode === "carousel"}
            onClick={() => setViewMode("carousel")}
          >
            <FaThList /> Carousel
          </ToggleButton>
        </ViewToggle>

        {viewMode === "grid" ? (
          <GridContainer>
            {projects.map((project, index) => (
              <BlogCard
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="blog-card"
              >
                <a href={project.play}>
                  <Img src={project.image} alt={project.title} />
                </a>
                <TitleContent className="title-content">
                  <HeaderThree title>{project.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo className="card-info">{project.description}</CardInfo>
                <div>
                  <TitleContent className="title-content">
                    Languages
                  </TitleContent>
                  <TagList>
                    {project.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <FaGithub /> Code
                  </ExternalLinks>
                  <ExternalLinks
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <FaExternalLinkAlt /> Source
                  </ExternalLinks>
                </UtilityList>
              </BlogCard>
            ))}
          </GridContainer>
        ) : (
          <CarouselWrapper>
            <LeftArrow onClick={handlePrev}>←</LeftArrow>
            <CarouselContainer ref={containerRef}>
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  active={active}
                  index={index}
                  totalItems={projects.length}
                  ref={(el) => (itemsRef.current[index] = el)}
                >
                  <BlogCard className="blog-card">
                    <a href={project.play}>
                      <Img src={project.image} alt={project.title} />
                    </a>
                    <TitleContent className="title-content">
                      <HeaderThree title>{project.title}</HeaderThree>
                      <Hr />
                    </TitleContent>
                    <CardInfo className="card-info">
                      {project.description}
                    </CardInfo>
                    <div>
                      <TitleContent className="title-content">
                        Languages
                      </TitleContent>
                      <TagList>
                        {project.tags.map((tag, i) => (
                          <Tag key={i}>{tag}</Tag>
                        ))}
                      </TagList>
                    </div>
                    <UtilityList>
                      <ExternalLinks
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                      >
                        <FaGithub /> Code
                      </ExternalLinks>
                      <ExternalLinks
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                      >
                        <FaExternalLinkAlt /> Source
                      </ExternalLinks>
                    </UtilityList>
                  </BlogCard>
                </CarouselItem>
              ))}
            </CarouselContainer>
            <RightArrow onClick={handleNext}>→</RightArrow>
            <CarouselButtons>
              {projects.map((_, index) => (
                <CarouselButton
                  key={index}
                  active={active}
                  index={index}
                  onClick={() => handleDotClick(index)}
                >
                  <CarouselButtonDot />
                </CarouselButton>
              ))}
            </CarouselButtons>
          </CarouselWrapper>
        )}
      </ProjectsWrapper>
    </Section>
  );
};

export default Projects;
