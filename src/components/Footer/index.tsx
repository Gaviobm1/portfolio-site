import * as React from "react";
import styled from "styled-components";
import { Phone, Mail, GitHub } from "react-feather";

export default function Footer() {
  return (
    <Wrapper>
      <InfoWrapper>
        <Contact>
          <Phone />
          <p>+34 678 042 307</p>
        </Contact>
        <Contact>
          <Mail />
          <p>gavinobrien@outlook.com</p>
        </Contact>
        <Contact>
          <GitHub />
          <p>https://github.com/Gaviobm1/</p>
        </Contact>
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
