/* eslint-disable no-unused-vars */
import React, { MutableRefObject, ReactNode } from "react";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";

type ProgressProps = {
  value: number;
  radius: number;
};

type WrapperProps = {
  style: React.CSSProperties;
  role: string;
  "aria-valuenow": number;
  "aria-valuemin": string;
  "aria-valuemax": string;
};

type Size = {
  "--height": string | number;
  "--border-radius": string | number;
  "--progress-radius": string | number;
  "--bar-height": string | number;
  "--padding": string | number;
  "--display": string;
};

type Sizes = {
  small: Size;
  medium: Size;
  large: Size;
  scroll: Size;
};

const SIZES: Sizes = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
    "--progress-radius": "4px",
    "--bar-height": "8px",
    "--padding": "0px",
    "--display": "block",
  },
  medium: {
    "--height": "16px",
    "--border-radius": "4px",
    "--bar-height": "16px",
    "--progress-radius": "4px",
    "--padding": "0px",
    "--display": "block",
  },
  large: {
    "--height": "24px",
    "--bar-height": "16px",
    "--border-radius": "8px",
    "--progress-radius": "4px",
    "--padding": "4px",
    "--display": "block",
  },
  scroll: {
    "--height": "8px",
    "--bar-height": "4px",
    "--border-radius": "0px",
    "--progress-radius": "0px",
    "--padding": "0px",
    "--display": "none",
  },
};

type SizeProp = "small" | "medium" | "large" | "scroll";

const ProgressBar = ({ value, size }: { value: number; size: SizeProp }) => {
  if (value > 100) {
    value = 100;
  }

  const styles: Size = SIZES[size];
  const radius = 4 - 4 * (100 % value);
  return size === "scroll" ? (
    <ScrollWrapper
      style={styles as React.CSSProperties}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarWrap>
        <Progress value={value} radius={radius} />
      </BarWrap>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </ScrollWrapper>
  ) : (
    <Wrapper
      style={styles as React.CSSProperties}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarWrap>
        <Progress value={value} radius={radius} />
      </BarWrap>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperProps>`
  width: auto;
  height: var(--height);
  background: hsla(0 0% 50% / 0.15);
  box-shadow: 0px 2px 4px hsla(0, 0%, 50%, 0.35) inset;
  border-radius: var(--border-radius);
  padding: var(--padding);
  margin-left: calc(1rem * -1);
  margin-right: calc(1rem * -1);
`;

const ScrollWrapper = styled(Wrapper)`
  display: none;
  @media (max-width: 550px) {
    display: block;
  }
`;

const BarWrap = styled.div`
  height: 100%;
  width: 100%;
  border-radius: var(--progress-radius);
  overflow: hidden;
`;

const Progress = styled.div<ProgressProps>`
  width: ${(props) => props.value + "%"};
  background: hsla(240, 80%, 60%, 1);
  height: 100%;
`;

export default ProgressBar;
