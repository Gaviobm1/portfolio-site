import * as React from "react";
import styled from "styled-components";
import Footer from "component/Footer";
import Toast from "component/Toast/Toast";
import useOpenContext from "../../hooks/useOpenContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { toast, setToast } = useOpenContext();
  return (
    <Wrapper>
      {children}
      {toast === "success" && (
        <Toast variant="success" handleRemove={() => setToast("")}>
          Email Sent
        </Toast>
      )}
      {toast === "error" && (
        <Toast variant="error" handleRemove={() => setToast("")}>
          Something went wrong
        </Toast>
      )}
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Asap";
  min-height: 100%;
  max-width: 100%;
  padding: 2rem;

  @media (max-width: 900px) {
    scrollbar-width: none;
    padding: 2rem;
  }
  @media (max-width: 550px) {
    scrollbar-width: none;
    padding: 1rem;
  }
`;
