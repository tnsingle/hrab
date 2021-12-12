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
                  width: 75
                  transformOptions: { fit: CONTAIN }
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
      const className = "m-shout__top white pa4 tc f4 flex justify-center items-center brand-" + displayColor + "-bg"

      return(
        <div className="m-shout bg-white br3 overflow-hidden shadow-4 ma2" key={index}>
          <div className={className}>{quote}</div>
          <div className="m-shout__bottom flex flex-column justify-between">
            <div className="m-shout__bio flex pa3">
              { image ? (<div className="m-shout__img-wrapper overflow-hidden">
                <GatsbyImage image={image} />
              </div>) : ""}
              
              <div className="m-shout__desc f6 pl2">
                <h3 className="f6 ttu mb2">{name}</h3>
                {degree ? (
                <p className="lh-solid gray mb0">{degree}</p>
            ) : ""}

              {year > 0 ? (
                <span className="b f7">c/o {year}</span>
            ) : ""}
                
                
              </div>
            </div>


            {hasSocial ? (
                <div className="m-shout__social ph3 pb3">

                {fb ? ( <a href={fb} className="fab fa-facebook link dib black pr2" target="_blank" rel="noreferrer"><span className="clip">Follow {name} on Facebook</span></a> ) : "" } 

                {twitter ? ( <a href={twitter} className="fab fa-twitter link dib black pr2" target="_blank" rel="noreferrer"><span className="clip">Follow {name} on Twitter</span></a> ) : "" }
                
                { linkedIn ? ( <a href={linkedIn} className="fab fa-linkedin link dib black pr2" target="_blank" rel="noreferrer"><span className="clip">Connect with {name} on LinkedIn</span></a> ) : "" }

                { instagram ? ( <a href={instagram} className="fab fa-instagram link dib black pr2" target="_blank" rel="noreferrer"><span className="clip">Follow {name} on Instagram</span></a> ) : "" }
              </div>
            ) : ""}

              {hasBusiness ? (
                <div className="ph3 pb3 f6 b"><span className="ttu gray f7 db normaml">Business</span>
                  {businessURL ? (<a href={businessURL}>{businessName ? businessName : businessURL}</a>) : businessName ? businessName : ""}
                  </div>

              ) : ""}
            
            
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