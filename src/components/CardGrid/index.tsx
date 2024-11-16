import * as React from "react";
import Card from "component/Card";
import { Project } from "types";
import styled from "styled-components";
import ProgressBar from "component/ProgressBar";

type SwipeDirection = "left" | "right" | undefined;

export default function CardGrid({ nodes }: { nodes: [Project] }) {
  const [barProgress, setBarProgress] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function logScrollLeft() {
      const left = scrollRef.current && scrollRef.current.scrollLeft;
      const width =
        scrollRef.current &&
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const nextBarProgress = (left && width && (left / width) * 100) || 0;
      setBarProgress(nextBarProgress);
    }
    scrollRef.current?.addEventListener("scroll", logScrollLeft);

    return () => {
      scrollRef.current?.removeEventListener("scroll", logScrollLeft);
    };
  }, [barProgress]);

  return (
    <>
      <Wrapper ref={scrollRef}>
        {nodes.map((node: Project, index: number) => {
          return <Card cardData={node} key={index} />;
        })}
      </Wrapper>
      <SwipeProgressBar value={barProgress} size="scroll" />
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  justify-content: space-between;
  width: var(--width);
  margin: auto;
  padding-top: var(--margin-padding);
  padding-bottom: var(--margin-padding);
  border-bottom: 2px solid black;
  @media (max-width: 550px) {
    border-bottom: none;
    padding-top: calc(var(--mobile-padding) / 3);
    padding-bottom: calc(var(--mobile-padding) / 3);
    width: auto;
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;
    overscroll-behavior: contain;
    scroll-snap-type: x mandatory;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-left: calc(var(--mobile-padding) * -1);
    margin-right: calc(var(--mobile-padding) * -1);
    & div {
      scroll-snap-align: center;
    }
  }
`;

const SwipeProgressBar = styled(ProgressBar)`
  display: none;

  @media (max-width: 550px) {
    display: block;
  }
`;
