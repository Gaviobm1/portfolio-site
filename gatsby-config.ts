import type { GatsbyConfig, GatsbyNode } from "gatsby";

require("dotenv").config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gavin O'Brien`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          component: `./src/components`,
          types: `./types`,
          images: `./src/images`,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `heroData`,
        path: `${__dirname}/heroData`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Asap`,
            file: `https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,100..900;1,100..900&display=swap`,
          },
          {
            name: `Recursive`,
            file: `https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap`,
          },
        ],
      },
    },
    "gatsby-transformer-json",
  ],
};

export default config;
