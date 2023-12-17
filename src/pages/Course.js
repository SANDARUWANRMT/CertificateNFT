import React from "react";
import tw from "twin.macro";
import { SectionHeading as HeadingTitle } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/svg-decorator-blob-3.svg";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import SingleCol from "components/faqs/SingleCol";
import Footer from "components/footers/MiniCenteredFooter.js";
import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from "../components/headers/light.js";
import styled from "styled-components";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Column = tw.div`mt-12 lg:w-1/2 items-center h-full w-1/2 rounded-lg flex mx-auto`;
const Video = tw.video`h-full rounded-lg`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-3xl`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  heading = (
    <>
      Course 1 - <span tw="text-teal-700">Blockchain!</span>
    </>
  ),
  description = "In this course, you'll explore how a blockchain works as a decentralized and secure digital ledger. You'll learn about the basics of blockchain architecture, the role of consensus mechanisms, and the use of cryptographic techniques to ensure the integrity of data. The course may also cover practical applications of blockchain, such as cryptocurrencies and smart contracts. Overall, it's a beginner-friendly journey to understand the foundational elements of this transformative technology.",
}) => {
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
      <Container>
        <Content>
          <HeadingInfoContainer>
            <HeadingTitle>{heading}</HeadingTitle>
            <HeadingDescription>{description}</HeadingDescription>
          </HeadingInfoContainer>
          <Column>
            <Video controls autoPlay muted loop>
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </Video>
          </Column>
          <SingleCol />
        </Content>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
