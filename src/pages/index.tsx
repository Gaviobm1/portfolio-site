import * as React from "react";
import Seo from "component/Seo";
import Layout from "component/Layout";
import Hero from "component/Hero";
import CardGrid from "component/CardGrid";
import { graphql, PageProps } from "gatsby";
import { QueryDataType, Image } from "types";
import { getImage } from "gatsby-plugin-image";

export default function Home({ data }: PageProps<QueryDataType>) {
  const { allProjectsJson, allImageSharp, heroDataJson } = data;

  const bigImage: Image = {
    image: getImage(allImageSharp.nodes[2]),
    alt: heroDataJson.bigImage.alt,
    caption: heroDataJson.bigImage.caption,
  };
  const middleImage: Image = {
    image: getImage(allImageSharp.nodes[1]),
    alt: heroDataJson.middleImage.alt,
    caption: heroDataJson.middleImage.caption,
  };
  const sideImage = {
    image: getImage(allImageSharp.nodes[0]),
    alt: heroDataJson.sideImage.alt,
    caption: heroDataJson.sideImage.caption,
  };

  const { title, blurb } = heroDataJson;

  const nodes = allProjectsJson.nodes;

  return (
    <Layout>
      <Hero
        bigImage={bigImage}
        sideImage={sideImage}
        middleImage={middleImage}
        title={title}
        blurb={blurb}
      />
      <CardGrid nodes={nodes} />
    </Layout>
  );
}

export const query = graphql`
  query {
    allProjectsJson {
      nodes {
        name
        link
        github
        excerpt
        technologies
      }
    }

    allImageSharp {
      nodes {
        gatsbyImageData
      }
    }

    heroDataJson {
      title
      blurb
      sideImage {
        alt
        caption
      }
      middleImage {
        alt
        caption
      }
      bigImage {
        alt
        caption
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
