import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

export default function ShoutBoard({ className }) {

  const data = useStaticQuery(graphql `query MyQuery {
    cards: allAirtable(filter: {data: {Status: {eq: "Approved"}}}, sort: {fields: data___Date, order: DESC}) {
      nodes {
        data {
          Date
          Image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  width: 80
                  height: 80
                  backgroundColor: "transparent"
                )
              }
            }
          }
          Name
          Statement
          Degree
          Graduating_Class
          Twitter
          Linkedin
          Instagram
          Business_URL
          Business_Name
          Display_Color
        }
      }
    }
  }`);

  let cards = (
    data.cards.nodes.map((content, index) => {
      const quote = content.data.Statement;
      const name = content.data.Name;
      const image = content.data?.Image?.localFiles[0]?.childImageSharp?.gatsbyImageData;

      const fb = "";
      const twitter = content.data.Twitter;
      const instagram = content.data.Instagram;
      const linkedIn = content.data.LinkedIn;

      const hasSocial = fb || twitter || instagram || linkedIn;

      const businessName = content.data.Business_Name;
      const businessURL = content.data.Business_URL;

      const hasBusiness = businessURL || businessName

      const degree = content.data.Degree;
      const year = content.data.Graduating_Class;
      const displayColor = content.data.Display_Color ? content.data.Display_Color : "blue"
      const rightWrapperClassName = "m-shout__right pa3 tc f4 flex flex-column justify-between items-center flex-auto"
      const wrapperClassName = "m-shout br3 overflow-hidden shadow-4 ma2 flex brand-" + displayColor + "-bg"
      const leftWrapperClassName = "m-shout__left flex flex-column justify-start items-center mv3 w-34 white"
      const firstLetter = name ? name.charAt(0) : "?"

      return(
        <div className={wrapperClassName} key={index}>
          <div className={leftWrapperClassName}>
            <div className="m-shout__img-wrapper">
            <div className="m-shout__img overflow-hidden brand-gold-bg tc flex justify-center items-center black br-100">
            { image ? (<GatsbyImage image={image} />) : (<span className="f3 fw3">{firstLetter}</span>)}
            </div>
            </div>
            <div className="m-shout__bio flex flex-column justify-between ph3 pt3 tc">
              <div className="m-shout__desc f6 pl2">
                <h3 className="f6 ttu mb2">{name}</h3>
                {degree ? (
                <p className="lh-solid mb2 f7 fw3">{degree}</p>
            ) : ""}

{hasBusiness ? (
                <div className="f7 b">
                  {businessURL ? (<a href={businessURL}>{businessName ? businessName : businessURL}</a>) : businessName ? businessName : ""}
                  </div>

              ) : ""}
              </div>
              {hasSocial ? (
                <div className="m-shout__social ph3 pb3">

                {fb ? ( <a href={fb} className="fab fa-facebook link dib white pr2" target="_blank" rel="noreferrer"><span className="clip">Follow {name} on Facebook</span></a> ) : "" } 

                {twitter ? ( <a href={twitter} className="fab fa-twitter link dib white pr2" target="_blank" rel="noreferrer"><span className="clip">Follow {name} on Twitter</span></a> ) : "" }
                
                { linkedIn ? ( <a href={linkedIn} className="fab fa-linkedin link dib white pr2" target="_blank" rel="noreferrer"><span className="clip">Connect with {name} on LinkedIn</span></a> ) : "" }

                { instagram ? ( <a href={instagram} className="fab fa-instagram link dib white pr2" target="_blank" rel="noreferrer"><span className="clip">Follow {name} on Instagram</span></a> ) : "" }
              </div>
            ) : ""}
            </div>
          </div>
          <div className={rightWrapperClassName}>
            <div class="m-shout__quote flex-auto fw3 white">{quote}</div>
            <div className="footer flex justify-between items-start w-100">
              {year > 0 ? (
                  <span className="m-shout__class f7 mt3 dib h2 pv2 ph3 brand-gold-bg br-pill flex items-center normal">c/o {year}</span>
              ) : ""}
            </div>
            </div>
        </div>
        
      )
      

    })
  )
    
    return (
            <div className = {className}>
              {cards}
            </div>
        );
    
}