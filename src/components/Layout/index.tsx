import * as React from "react";
import styled from "styled-components";
import Footer from "component/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      {children}
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Asap";
  min-height: 100%;
  max-width: 100%;
  padding: 5rem;
  @media (max-width: 900px) {
    scrollbar-width: none;
    padding: 2rem;
  }
  @media (max-width: 550px) {
    scrollbar-width: none;
    padding: 1rem;
  }
`;
