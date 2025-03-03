require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteAddress = new URL("https://www.singletaryscholarship.fund");

module.exports = {
  siteMetadata: {
    siteUrl: `https://singletaryscholarship.fund/`,
    title: `Harrison R. and Azzie Bell Singletary Family Scholarship`,
    author: `Tarise Singletary`,
    description: `Official website of the Harrison R. and Azzie Bell Singletary Family Scholarship for students attending North Carolina A&T State University.`,
    image: `https://hrab-assets-temp.s3.amazonaws.com/hrab-logo-open-graph-08.png`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
          lessOptions: {
              javascriptEnabled: true,
          }
      }
  },
    {
    resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "singletaryscholarship.fund",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-M6BD4H8`,
        includeInDevelopment: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
          siteUrl: siteAddress.href.slice(0, -1),
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
            tableName: `Aggie Pride`,
            mapping: { Image: `fileNode` },
            defaultValues: {
              Degree: "",
              Graduating_Class: 0,
              Facebook: "",
              Twitter: "",
              Linkedin: "",
              Instagram: "",
              Business_Name: "",
              Business_URL: ""
            },
          }
        ]
      }
    }
  ],
}
