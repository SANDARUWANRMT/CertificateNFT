import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../components/misc/Headings";
import Footer from "components/footers/MiniCenteredFooter.js";

import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from "../components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;

const Card = tw.div`h-full flex! flex-col border w-full max-w-64 rounded-lg relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw` h-64 w-64 bg-cover bg-center rounded rounded-lg`,
]);

const TextInfo = tw.div`py-6 px-6 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;
export default () => {
  const cards = [
    {
      name: "Malala Yousafzai",
      imageSrc:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
      expertise: "Expert in Sociology",
    },
    {
      name: "Jonathan Doe",
      imageSrc:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      expertise: "Expert in Sociology",
    },
    {
      name: "Emily Johnson",
      imageSrc:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
      expertise: "Mathematics Specialist",
    },
    {
      name: "Alexandra Smith",
      imageSrc:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      expertise: "Science Enthusiast",
    },
    {
      name: "David Miller",
      imageSrc:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
      expertise: "Literature Expert",
    },
    {
      name: "Sophia Davis",
      imageSrc:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
      expertise: "Language Arts Instructor",
    },
    {
      name: "Daniel Brown",
      imageSrc:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      expertise: "History Buff",
    },
    {
      name: "Olivia White",
      imageSrc:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
      expertise: "Art and Design Specialist",
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
            <Heading>Our Tutors</Heading>
          </HeadingWithControl>
          <div className="d-flex flex-wrap justify-content-center mt-5 gap-4">
            {cards.map((card, index) => (
              <Card key={index}>
                <CardImage imageSrc={card.imageSrc} />
                <TextInfo>
                  <TitleReviewContainer>
                    <Title>{card.name}</Title>
                  </TitleReviewContainer>
                  <Description>{card.expertise}</Description>
                </TextInfo>
              </Card>
            ))}
          </div>
        </Content>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
