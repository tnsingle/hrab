import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Steps from "rsuite/lib/Steps";
import "rsuite/lib/Steps/styles";

class IndexPage extends React.Component {

  constructor () {
    super();
    this.state = {
      step: 2
    };

    this.onChange = this.onChange.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
  }

  onChange(nextStep){
    this.setState({ step: nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep });
    }

     onNext() { this.onChange(this.state.step + 1)}
     onPrevious(){ this.onChange(this.state.step - 1)}

  

  render() {
    const siteTitle = "Harrison R. and Azzie Bell Singletary Family Scholarship";

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`scholarship`, `education`, `endowment`, `singletary`]}
        />
        <section className="m-card pa5 flex flex-column flex-row-l items-center justify-center">
          <h2 className="normal f2 tc tr-l brand-dark-blue w-20-l ttu">From <span className="gray">humble</span> beginnings</h2>
          <div className="m-history__intro bl-l ml3-l pl3-l w-50-l">
          <p className="brand-black lh-copy f4">Harrison Roosevelt and Azzie Bell Singletary, blazed and cleared a trail for their children and those to follow. This journey began with one mule, one acre of land and two small old drafty buildings connected by a board they used to walk on. One building was used as a bedroom and the adjacent one used as the kitchen. Both buildings were heated by wood and kerosene lanterns were used to provide light. Harrison and Bell, what he affectionately called her, worked jointly day and night, each one attending to the task at hand. Daddy used the old mule and a lantern as he tilled the fields by night to prepare for the planting season while Mama kept the home and reared the children. Their home always had prepared food no matter the time of day. <br/><br/>The Patriarch and Matriarch of our family were sustained by their basic beliefs in faith, family, christian ethics, work ethics, community and education. Therefore, <strong>a scholarship has been established in honor of their legacy highlighting examples of their “truths”.</strong></p>
          <div className="mt3 tc">
          {/* <a href="#" class="link brand-blue-bg white pa3 br3 f5 b dib dim">View Family History</a> */}
          </div>
          </div>
        </section>
        <section className="m-card pa6 brand-black-bg flex items-center justify-center black">
          <div className="m-progress brand-black-bg w-100 mw9 vh-100 pa5">
            <h2 className="f1 brand-gold">Currently<br/>Fundraising</h2>
            <div className="white flex justify-between mb5">
              <p className="f4 w-50 mv4 mr3">Quisque eleifend sapien massa, vitae cursus odio laoreet sed. Proin ultrices leo non eros suscipit, et gravida turpis congue. Aenean a velit dapibus, vestibulum velit nec, pretium nulla. Mauris et luctus massa. Aenean interdum eleifend felis et gravida. Nulla vitae fringilla est. Nulla leo ligula, mollis at neque id, feugiat ultrices leo. Praesent et luctus mauris. Etiam rutrum sollicitudin fringilla.
              <br/><br/>
              <a href="#" className="a-donate link brand-gold-bg black ttu pv3 ph4 br3 f5 b dib">Donate</a>
              </p>
              <div className="w-40 bg-gray">image placeholder</div>
            </div>
            <Steps current={this.state.step}>
                <Steps.Item title="Research" description="Description" />
                <Steps.Item title="Establish Endowment Scholarship" description="Description" />
                <Steps.Item title="Fundraising" description="Description" />
                <Steps.Item title="First Award" description="Description" />
              </Steps>
        </div>
        </section>
        <section className="m-card -card-red pa4 tc flex items-center justify-center white f2">
          <p className="w-50-l">In Honor and Memory of Harrison R and Azzie Bell Singletary, the family establishes this Scholarship Fund. 
          <br/><br/>
          <span className="brand-black f1 b">“The Legacy Lives On”.</span></p>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
