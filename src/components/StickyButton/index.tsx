import React from "react";
import styled from "styled-components";

const StickyButton = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return <Button ref={ref}>{children}</Button>;
});

const Button = styled.button`
  position: sticky;
  top: 0;
  left: 100%;
  padding: 1rem;
  border: none;
  background: transparent;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
`;

export default StickyButton;
