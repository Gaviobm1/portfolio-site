import * as React from "react";
import styled from "styled-components";
import { Phone, Mail, GitHub, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <Wrapper>
      <InfoWrapper>
        <LinkWrapper>
          <MorphLink href="https://github.com/Gaviobm1/">
            <Contact>
              <GitHub />
              <DesktopParagraph>https://github.com/Gaviobm1/</DesktopParagraph>
            </Contact>
          </MorphLink>
          <MorphLink href="https://www.linkedin.com/in/gavinobrien90/">
            <Contact>
              <Linkedin />
              <DesktopParagraph>
                https://www.linkedin.com/in/gavinobrien90/
              </DesktopParagraph>
            </Contact>
          </MorphLink>
        </LinkWrapper>
        <p>&copy; 2024 Gavin O&apos;Brien</p>
      </InfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  padding-top: var(--margin-padding);
  color: hsl(0deg 0% 100%);
  @media (max-width: 550px) {
    justify-content: center;
    padding-top: var(--mobile-padding);
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Contact = styled.article`
  font-family: "Recursive";
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MorphLink = styled.a`
  font-variation-settings: "CASL" 0;
  opacity: 1;
  transition: opacity 600ms ease, font-variation-settings 400ms ease;
  &:hover {
    font-variation-settings: "CASL" 1;
    opacity: 0.8;
    transition: opacity 600ms ease, font-variation-settings 400ms ease;
  }
`;

const DesktopParagraph = styled.p`
  display: block;
  @media (max-width: 900px) {
    display: none;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
