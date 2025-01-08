import * as React from "react";
import styled from "styled-components";
import { Phone, Mail, GitHub } from "react-feather";

export default function Footer() {
  return (
    <Wrapper>
      <InfoWrapper>
        <MorphLink href="https://github.com/Gaviobm1/">
          <Contact>
            <GitHub />
            <p>https://github.com/Gaviobm1/</p>
          </Contact>
        </MorphLink>
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
