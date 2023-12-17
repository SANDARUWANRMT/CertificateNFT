import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../components/misc/Headings";

import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from "../components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Footer from "components/footers/MiniCenteredFooter.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;

const Card = tw.div`h-full flex! flex-col border w-full max-w-96 rounded-lg relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw` h-64 w-96 bg-cover bg-center rounded rounded-lg`,
]);

const TextInfo = tw.div`py-6 px-6 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;
export default () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      alt: "Web Development Course Image",
      title: "Web Development",
      description:
        "Learn the basics of web development and build your first website.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      alt: "Data Science Course Image",
      title: "Data Science Fundamentals",
      description:
        "Explore the world of data science and its applications in various industries.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      alt: "Graphic Design Course Image",
      title: "Graphic Design Basics",
      description:
        "Unlock your creativity with the fundamentals of graphic design and visual communication.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      alt: "Mobile App Development Course Image",
      title: "Mobile App Development",
      description:
        "Build mobile apps for iOS and Android platforms with hands-on projects.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      alt: "Digital Marketing Course Image",
      title: "Digital Marketing Essentials",
      description:
        "Master the core concepts of digital marketing and grow your online presence.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      alt: "Photography Course Image",
      title: "Photography for Beginners",
      description:
        "Capture stunning images by learning the basics of photography and composition.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      alt: "Language Learning Course Image",
      title: "Introduction to Spanish",
      description:
        "Begin your journey to learn Spanish with essential vocabulary and grammar.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      alt: "Fitness and Wellness Course Image",
      title: "Fitness for Life",
      description:
        "Achieve a healthy lifestyle with fitness routines and wellness practices.",
    },
  ];

  const StyledHeader = styled(Header)`
    ${tw`justify-between`}
    ${LogoLink} {
      ${tw`mr-8 pb-0`}
    }
  `;

  const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/#home">Home</NavLink>
      <NavLink href="/courses">Courses</NavLink>
      <NavLink href="/tutors">Tutors</NavLink>
      <NavLink href="/#howitworks">How it works</NavLink>
      <NavLink href="/#aboutus">About us</NavLink>
    </NavLinks>,
  ];

  return (
    <AnimationRevealPage>
      <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
      <Container id="features">
        <Content>
          <HeadingWithControl>
            <Heading>All Courses</Heading>
          </HeadingWithControl>
          <div className="d-flex flex-wrap justify-content-center mt-5 gap-4">
            {cards.map((card, index) => (
              <a href="/course">
                <Card key={index}>
                  <CardImage imageSrc={card.imageSrc} />
                  <TextInfo>
                    <TitleReviewContainer>
                      <Title>{card.title}</Title>
                    </TitleReviewContainer>
                    <Description>{card.description}</Description>
                  </TextInfo>
                </Card>
              </a>
            ))}
          </div>
        </Content>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
