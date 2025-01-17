import * as React from "react";
import { Project } from "types";
import styled from "styled-components";
import IconWrapper from "component/IconWrapper";
import { GitHub, ExternalLink } from "react-feather";

export default function Card({ cardData }: { cardData: Project }) {
  const { name, excerpt, github, link, technologies } = cardData;
  return (
    <Wrapper>
      <Heading>{name}</Heading>
      <InfoWrapper>{excerpt}</InfoWrapper>
      <LinksWrapper>
        <a href={github}>
          <GitHub />
        </a>
        {link.length > 0 && (
          <a href={link}>
            <ExternalLink />
          </a>
        )}
      </LinksWrapper>
      <IconWrapper>
        {technologies.map((technology, index) => (
          <InfoPill key={technology + index}>{technology}</InfoPill>
        ))}
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(0deg, 0%, 93%);
  border-radius: 4px;
  box-shadow: 4px 4px 8px hsl(0deg, 0%, 80%);
  padding: 1.5rem;
  min-width: 300px;
  gap: 2rem;
  @media (max-width: 550px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const Heading = styled.h1`
  height: 20%;
`;

const InfoWrapper = styled.p`
  display: block;
  height: 40%;
`;

const InfoPill = styled.article`
  width: fit-content;
  color: hsl(0deg, 100%, 100%);
  background: linear-gradient(
    15deg,
    #140064,
    #150456,
    #150848,
    #140a3c,
    #130c30,
    #120c26,
    #0f0c1c,
    #0c0a14,
    #09080c,
    #050405,
    #000000
  );
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  border-radius: 4px;
`;

const LinksWrapper = styled(IconWrapper)`
  justify-content: flex-end;
  gap: 1.5rem;
`;
