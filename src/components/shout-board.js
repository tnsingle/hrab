import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function ShoutBoard({ className }) {

  const data = useStaticQuery(graphql `query MyQuery {
    cards: allAirtable(filter: {data: {Status: {eq: "Approved"}}}) {
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
        }
      }
    }
  }`);

  let cards = (
    data.cards.nodes.map((content, index) => {
      const quote = content.data.Statement;
      const name = content.data.Name;
      const image = content.data.Image[0].thumbnails.large;

      const fb = "";
      const twitter = "";
      const instagram = "";
      const linkedIn = "";

      const hasSocial = fb || twitter || instagram || linkedIn;

      const degree = content.data.Degree;
      const year = content.data.Graduating_Class;

      return(
        <div className="m-shout bg-white br3 overflow-hidden shadow-4 ma2">
          <div class="m-shout__top white brand-blue-bg pa4 tc f4 flex items-center">{quote}</div>
          <div class="m-shout__bottom flex flex-column justify-between">
            <div class="m-shout__bio flex pa3">
              { image ? (<div class="m-shout__img-wrapper overflow-hidden">
                <img class="w-100 ma0 db" src={image.url} width={image.width} />
              </div>) : ""}
              
              <div class="m-shout__desc f6 pl2">
                <h3 class="f6 ttu mb2">{name}</h3>
                {degree ? (
                <p class="lh-solid gray mb0">{degree}</p>
            ) : ""}

              {year > 0 ? (
                <span class="b f7">c/o {year}</span>
            ) : ""}
                
                
              </div>
            </div>

            {hasSocial ? (
                <div class="m-shout__social ph3 pb3">
                <a href="#" class="fab fa-facebook link dib black pr2"></a>
                <a href="#" class="fab fa-twitter  link dib black pr2"></a>
                <a href="#" class="fab fa-linkedin  link dib black pr2"></a>
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