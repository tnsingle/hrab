import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function ShoutBoard({ className }) {

  const data = useStaticQuery(graphql `query MyQuery {
    cards: allAirtable(filter: {data: {Status: {eq: "Approved"}}}, sort: {fields: data___Date, order: DESC}) {
      nodes {
        data {
          Date
          Image {
            thumbnails {
              large {
                height
                url
                width
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
      const image = content.data.Image.length > 0 ? content.data.Image[0].thumbnails.large : "";

      const fb = "";
      const twitter = content.data.Twitter;
      const instagram = content.data.Instagram;
      const linkedIn = content.data.LinkedIn;

      const hasSocial = fb || twitter || instagram || linkedIn;

      const degree = content.data.Degree;
      const year = content.data.Graduating_Class;
      const className = "m-shout__top white pa4 tc f4 flex justify-center items-center brand-" + content.data.Display_Color + "-bg"

      return(
        <div className="m-shout bg-white br3 overflow-hidden shadow-4 ma2" key={index}>
          <div className={className}>{quote}</div>
          <div className="m-shout__bottom flex flex-column justify-between">
            <div className="m-shout__bio flex pa3">
              { image ? (<div className="m-shout__img-wrapper overflow-hidden">
                <img className="w-100 ma0 db" src={image.url} width={image.width} />
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

                {fb ? ( <a href={fb} className="fab fa-facebook link dib black pr2" target="_blank" rel="noreferrer"></a> ) : "" } 

                {twitter ? ( <a href={twitter} className="fab fa-twitter link dib black pr2" target="_blank" rel="noreferrer">&nbsp;</a> ) : "" }
                
                { linkedIn ? ( <a href={linkedIn} className="fab fa-linkedin link dib black pr2" target="_blank" rel="noreferrer"></a> ) : "" }

                { instagram ? ( <a href={instagram} className="fab fa-instagram link dib black pr2" target="_blank" rel="noreferrer"></a> ) : "" }
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