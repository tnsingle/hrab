require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `http://singletaryscholarship.fund/`,
    title: `Harrison R. and Azzie Bell Singletary Family Scholarship`,
    author: `Tarise Singletary`,
    description: `Official website of the Harrison R. and Azzie Bell Singletary Family Scholarship for students attending North Carolina A&T State University.`,
    image: `https://hrab-assets-temp.s3.amazonaws.com/hrab-logo-open-graph-08.png`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    {
    resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "hrab",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harrison R. and Azzie Bell Singletary Family Scholarship`,
        short_name: `HRAB Scholarship`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#26547C`,
        display: `minimal-ui`,
        icons: [
          {
              src: `/android-chrome-192x192.png`,
              sizes: `192x192`,
              type: `image/png`
          },
          {
              src: `/android-chrome-512x512.png`,
              sizes: `512x512`,
              type: `image/png`
          }
      ],
  
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`, // may instead specify via env, see below
        tables: [
          {
            baseId: `${process.env.REACT_APP_AIRTABLE_BASE_ID}`,
            tableName: `Aggie Pride`
          }
        ]
      }
    }
  ],
}
