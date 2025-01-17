import * as React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Image } from "src/types";

export default function Hero({
  bigImage,
  sideImage,
  middleImage,
  title,
  blurb,
}: {
  bigImage: Image;
  sideImage: Image;
  middleImage: Image;
  title: string;
  blurb: string;
}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <BigImage>
        {bigImage.image && (
          <GatsbyImage image={bigImage.image} alt={bigImage.alt} />
        )}
        <Caption>{bigImage.caption}</Caption>
      </BigImage>
      <SideImage>
        {sideImage.image && (
          <GatsbyImage image={sideImage.image} alt={sideImage.alt} />
        )}
        <Caption>{sideImage.caption}</Caption>
      </SideImage>
      <MiddleImage>
        {middleImage.image && (
          <GatsbyImage image={middleImage.image} alt={middleImage.alt} />
        )}
        <Caption>{middleImage.caption}</Caption>
      </MiddleImage>
      <TextWrap>{blurb}</TextWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: var(--width);
  margin: auto;
  padding-bottom: var(--margin-padding);
  position: relative;
  color: hsl(0deg 0% 100%);

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: var(--mobile-padding);
  }
`;

const Title = styled.h1`
  grid-area: 1 / 1 / 2 / 5;
  font-size: 2rem;
  font-weight: 900;
`;

const TextWrap = styled.p`
  position: absolute;
  bottom: 5%;
  right: -9%;
  max-width: 50ch;
  font-weight: 500;
  @media (max-width: 900px) {
    max-width: 40ch;
    right: 0;
  }
  @media (max-width: 760px) {
    position: revert;
    max-width: 60ch;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  background: conic-gradient(
    from 90deg at 40% 110%,
    #003f5b,
    #2b4b7d,
    #5f5195,
    #98509d,
    #cc4c91,
    #f25375,
    #ff6f4e,
    #ff9913
  );
  padding: 1rem 1rem 3rem 1rem;
  box-shadow: inset 2px 2px 8px hsl(0deg 0% 0% / 0.33);
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 100%;
  }
  & img {
    box-shadow: 2px 2px 8px hsl(0deg 0% 0% / 0.33);
  }
  @media (max-width: 900px) {
    flex: 1;
    min-width: 300px;
    margin-left: -1rem;
    margin-right: -1rem;
    margin-top: -2rem;
  }

  @media (max-width: 760px) {
    margin-top: 0;
    & img {
      border-radius: 0px;
    }
  }
`;

const BigImage = styled(ImageWrap)`
  background: conic-gradient(
    from 270deg at 40% 110%,
    #003f5b,
    #2b4b7d,
    #5f5195,
    #98509d,
    #cc4c91,
    #f25375,
    #ff6f4e,
    #ff9913
  );
  grid-area: 1 / 10 / 3 / 15;
  transform: rotate(-15deg);
  margin-left: -2rem;
  @media (max-width: 900px) {
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: 0;
  }

  @media (max-width: 760px) {
    transform: rotate(0deg);
  }
`;

const SideImage = styled(ImageWrap)`
  background: conic-gradient(
    from 90deg at 40% 110%,
    #003f5b,
    #2b4b7d,
    #5f5195,
    #98509d,
    #cc4c91,
    #f25375,
    #ff6f4e,
    #ff9913
  );
  grid-area: 2 / 1 / 4 / 3;
  margin-top: -2rem;
  margin-right: -2rem;
  transform: rotate(-5deg);

  @media (max-width: 900px) {
    display: none;
  }
`;

const MiddleImage = styled(ImageWrap)`
  background: conic-gradient(
    from 180deg at 40% 110%,
    #003f5b,
    #2b4b7d,
    #5f5195,
    #98509d,
    #cc4c91,
    #f25375,
    #ff6f4e,
    #ff9913
  );
  grid-area: 2 / 4 / 4 / 9;
  transform: rotate(10deg);
  margin-top: -4rem;
  margin-bottom: 4rem;
  @media (max-width: 900px) {
    grid-area: 2 / 1 / 4 / 8;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;

const Caption = styled.caption`
  font-family: "Recursive", sans-serif;
  color: hsl(0deg, 100%, 98%);
  font-weight: 600;
  font-variation-settings: "CASL" 1, "slnt" -10;
  position: absolute;
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
`;
