import * as React from "react";
import styled from "styled-components";
import { Phone, Mail, GitHub, Linkedin } from "react-feather";
import ContactModal from "component/ContactModal";

export default function Header() {
  return (
    <Wrapper>
      <MorphLink href="https://github.com/Gaviobm1/">
        <Contact>
          <GitHub />
          <DesktopParagraph>GitHub</DesktopParagraph>
        </Contact>
      </MorphLink>
      <MorphLink href="https://www.linkedin.com/in/gavinobrien90/">
        <Contact>
          <Linkedin />
          <DesktopParagraph>Linkedin</DesktopParagraph>
        </Contact>
      </MorphLink>
      <ContactModal />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  color: var(--text-links-color);
  padding-bottom: 2rem;

  @media (max-width: 550px) {
    width: 100%;
    justify-content: space-between;
    padding-bottom: 1rem;
  }
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

const Contact = styled.article`
  font-family: "Recursive";
  display: flex;

  gap: 0.5rem;
`;
