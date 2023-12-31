import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../../components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "../../components/misc/Buttons";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border w-full sm:rounded-lg relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw` h-64 w-96 bg-cover bg-center rounded sm:rounded-lg`,
]);

const Button = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-teal-500 text-gray-100 w-48 py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .text {
    ${tw`ml-3`}
  }
`;

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Course 1",
      description: "About the course 1",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Course 2",
      description: "About the course 2",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Course 3",
      description: "About the course 3",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Course 4",
      description: "About the course 4",
    },
  ];

  const cards2 = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Course 1",
      description: "about course 1",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Course 2",
      description: "about course 2",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Course 3",
      description: "about course 3",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "Course 4",
      description: "about course 4",
    },
  ];

  return (
    <Container id="features">
      <Content>
        <HeadingWithControl>
          <Heading>Popular Courses</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
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
        </CardSlider>
      </Content>
      <Content>
        <HeadingWithControl>
          <Heading>All courses</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards2.map((card, index) => (
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
        </CardSlider>
        <a href="/courses">
          <Button type="button" className="mx-auto d-flex">
            <span className="text">Explore More</span>
          </Button>
        </a>
      </Content>
    </Container>
  );
};
