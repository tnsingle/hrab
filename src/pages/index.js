import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Timeline from "../components/timeline"

class IndexPage extends React.Component {
  constructor () {
    super();
    this.state = {
      show: false
    };
    
    this.showTimeline = this.showTimeline.bind(this);
    this.closeTimeline = this.closeTimeline.bind(this);

    this.timelineRef = React.createRef();
  }
  
  showTimeline (e) {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    });

    if(this.timelineRef.current){
      this.timelineRef.current.scrollTo();
    }
    return false;
  }
  
  closeTimeline (e) {
    this.setState({ show: false });
  }

  render() {
    const siteTitle = "Harrison R. and Azzie Bell Singletary Family Scholarship"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`scholarship`, `education`, `endowment`, `singletary`]}
        />
        <section className="m-card pa5 flex flex-column flex-row-l items-center justify-center min-vh-100">
          <h2 className="normal f2 tc tr-l brand-dark-blue w-30-l ttu">From <span className="gray">humble</span> beginnings</h2>
          <div className="m-history__intro bl-l ml4-l pl4-l w-60-l">
          <p className="brand-black lh-copy f4">The Legacy of Faith, Family, Christian ethics, Work ethics, Community and Education began with Harrison R. Singletary, the patriarch of this family.</p>
          <p className="brand-black lh-copy f4">Up from humble and meager beginnings, the journey of Harrison and Azzie Bell began in Bladenboro, North Carolina, after matrimony in June of 1933. Initially Harrison was given one acre of land by his father that housed two small old buildings - one served as the bedroom and the other was used as the kitchen. The two buildings were connected by a walking board for easy access. Both buildings were heated by wood while kerosene lanterns provided flickering light during night. Harrison often worked by day until the sun set and by night using a lantern and an old "cranky and rebellious mule" to help him till the soil in preparation for the planting of various farm crops including soy beans, corn, wheat, peanuts, cucumbers, cotton, and tobacco. The farm also included livestock.... hogs and cattle that were used as food and financial subsistence. “Bell”, the name he affectionately called his wife, worked jointly with her husband on the farm, as much as possible, while maintaining the home front. Large vegetable gardens and chickens roving freely in closed pins, and at times in the yard, were common scenes that permiated this home landscape. When relatives and friends came to call, the doors of this home were open. The late night conversations, laughter, the smell of coffee, the cooked food and the sleep-overs made the home of Harrison and Azzie Bell a safe and inviting haven for many travelers.</p>
          <p className="brand-black lh-copy f4">As descendants of Harrison R. and Azzie Bell Singletary, we celebrate their memory and we are committed to perpetuating the principles that sustained them throughout their lives. <strong>Therefore, "The Legacy Lives On" through establishing the HR&AB Scholarship Fund.</strong></p>
          <div className="mt3 tc">
          <a href="#" onClick={e => {
              this.showTimeline(e);
            }} className="link brand-blue-bg white pa3 br3 f5 b dib dim">View Family History</a>
          </div>
          </div>
        </section>
        <Timeline ref={ this.timelineRef } onClose={e => {this.showTimeline(e)}} show={this.state.show} parentClassName="m-card brand-black-bg pa5 inner-shadow" />
        <section className="m-card -max-height-fill -card-red pa4 tc flex items-center justify-center white f2">
          <p className="w-50-l">In Honor and Memory of Harrison R and Azzie Bell Singletary, the family establishes this Scholarship Fund. 
          <br/><br/>
          <span className="brand-black f1 b">“The Legacy Lives On”.</span></p>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
