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
  }
  
  showTimeline (e) {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    });
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
        <section className="m-card -max-height-fill pa5 flex flex-column flex-row-l items-center justify-center vh-100">
          <h2 className="normal f2 tc tr-l brand-dark-blue w-20-l ttu">From <span className="gray">humble</span> beginnings</h2>
          <div className="m-history__intro bl-l ml4-l pl4-l w-50-l">
          <p className="brand-black lh-copy f4">Harrison Roosevelt and Azzie Bell Singletary, blazed and cleared a trail for their children and those to follow. This journey began with one mule, one acre of land and two small old drafty buildings connected by a board they used to walk on. One building was used as a bedroom and the adjacent one used as the kitchen. Both buildings were heated by wood and kerosene lanterns were used to provide light. Harrison and Bell, what he affectionately called her, worked jointly day and night, each one attending to the task at hand. Daddy used the old mule and a lantern as he tilled the fields by night to prepare for the planting season while Mama kept the home and reared the children. Their home always had prepared food no matter the time of day. <br/><br/>The Patriarch and Matriarch of our family were sustained by their basic beliefs in faith, family, christian ethics, work ethics, community and education. Therefore, <strong>a scholarship has been established in honor of their legacy highlighting examples of their “truths”.</strong></p>
          <div className="mt3 tc">
          <a href="#" onClick={e => {
              this.showTimeline(e);
            }} class="link brand-blue-bg white pa3 br3 f5 b dib dim">View Family History</a>
          </div>
          </div>
        </section>
        <Timeline onClose={e => {this.showTimeline(e)}} show={this.state.show} parentClassName="m-card brand-black-bg pa5 inner-shadow" />
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
