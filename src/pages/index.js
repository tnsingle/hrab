import React, { Component } from "react";

import Layout from "../components/layout"
import Seo from "../components/seo"
import Timeline from "../components/timeline"
import ShoutBoardContainer from "../components/shout-board-container"
import { Steps } from "rsuite";
import { StaticImage } from "gatsby-plugin-image"

class IndexPage extends Component {
  constructor () {
    super();
    this.state = {
      show: false,
      showModal: false
    };
    
    this.showTimeline = this.showTimeline.bind(this);
    this.closeTimeline = this.closeTimeline.bind(this);

    this.timelineRef = React.createRef();
    this.donate = React.createRef();

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal (e) {
    e.preventDefault();
    this.setState({
      showModal: !this.state.showModal
    });
    return false;
  }

  closeModal (e) {
    e.preventDefault();
    this.setState({
      showModal: false
    });
    return false;
  }
    
    onChange(nextStep){
        this.setState({ step: nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep });
    }
    
    onNext() { this.onChange(this.state.step + 1)}
    onPrevious(){ this.onChange(this.state.step - 1)}
  
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
    const siteTitle = "Harrison R. and Azzie Bell Singletary Family Scholarship";

    return (
      <Layout location={this.props.location} title={siteTitle} donateRef={ this.donate } showModal={ this.state.showModal } closeModal={this.closeModal}>
        <Seo
          title="Because of you, we can."
          lang="en"
          keywords={[`scholarship`, `education`, `endowment`, `singletary`, `fundraising`, `hbcu`, `contribute`, `donate`, `community`, `college`, `american heritage`, `giving tuesday`, `aggie pride`, `aggie born, aggie bred`, `ncat`, `black history`]}
        />
        <section className="m-card pv5 ph4 pa5-ns flex flex-column flex-row-l items-center justify-center min-vh-100">
          <h2 className="normal f2 tc tr-l brand-dark-blue w-30-l ttu">From <span className="gray">humble</span> beginnings</h2>
          <div className="m-history__intro bl-l ml4-l pl4-l w-60-l">
          <p className="brand-black lh-copy f4">The Legacy of Faith, Family, Christian ethics, Work ethics, Community and Education began with Harrison R. Singletary, the patriarch of this family.</p>
          <p className="brand-black lh-copy f4">Up from humble and meager beginnings, the journey of Harrison and Azzie Bell began in Bladenboro, North Carolina, after matrimony in June of 1933. Initially Harrison was given one acre of land by his father that housed two small old buildings - one served as the bedroom and the other was used as the kitchen. The two buildings were connected by a walking board for easy access. Both buildings were heated by wood while kerosene lanterns provided flickering light during night. Harrison often worked by day until the sun set and by night using a lantern and an old "cranky and rebellious mule" to help him till the soil in preparation for the planting of various farm crops including soy beans, corn, wheat, peanuts, cucumbers, cotton, and tobacco. The farm also included livestock.... hogs and cattle that were used as food and financial subsistence. “Bell”, the name he affectionately called his wife, worked jointly with her husband on the farm, as much as possible, while maintaining the home front. Large vegetable gardens and chickens roving freely in closed pins, and at times in the yard, were common scenes that permiated this home landscape. When relatives and friends came to call, the doors of this home were open. The late night conversations, laughter, the smell of coffee, the cooked food and the sleep-overs made the home of Harrison and Azzie Bell a safe and inviting haven for many travelers.</p>
          <p className="brand-black lh-copy f4">As descendants of Harrison R. and Azzie Bell Singletary, we celebrate their memory and we are committed to perpetuating the principles that sustained them throughout their lives. <strong>Therefore, "The Legacy Lives On" through establishing the HR&AB Scholarship Fund.</strong></p>
          <div className="mt3 tc">
          <a href="#" title="View Family History" onClick={e => {
              this.showTimeline(e);
            }} className="link brand-red-bg white pa3 br3 f5 b dib dim"><i class="dib pr2 fas fa-expand-alt"></i>View Family Timeline</a>
          </div>
          </div>
        </section>
        <Timeline ref={ this.timelineRef } onClose={e => {this.showTimeline(e)}} show={this.state.show} parentClassName="m-card brand-black-bg pa5 inner-shadow" />
        <section id="image-divider-1" className="m-card a-image-divider"></section>
        <section className="m-card pv5 ph4 pa5-ns brand-black-bg flex items-center justify-center black">
          <div className="m-progress brand-black-bg w-100 mw9">
          <h2 className="w-50-l f1 brand-gold mb0">Currently<br/>Fundraising</h2>
          <div className="white flex flex-column flex-row-l justify-between mb3">
            <div className="w-50-l mr3">
            <p className="f4 mv4">
            Our goal is to raise $<span className="squiggle">25,000</span> to be able to grant our first award.
            <br/><br/>
            NC A&T will match the scholarship endowment fund dollar-for-dollar with no maximum (aka 100% match).
            <br/><br/>
            <span className="b brand-gold">What does this mean?</span><br/>
            Once our initial goal of $25K is reached the endowment fund would become a $50K endowment.
            <br/><br/>
              <ul className="mb3">
                <li>Monies donated will go directly to the scholarship fund established by the family and managed by NC A&T University.</li>
                <li>Each family, friend, or other person/s that makes a donation will receive a tax deduction receipt from NC A&T.</li>
              </ul>
              <br/>
              Please help us reach this goal. By doing so you are investing in the <span className="brand-gold">future of the youth in our communities</span>.
          </p>
            </div>
          <div className="w-40-l"><StaticImage src="https://cdn.singletaryscholarship.fund/images/donate_900.jpg" width="615" alt="A spilled jar of coins with the word 'Donate' written on a piece of paper"/></div>
          
          </div>
          <div className="mb5"><a href="#" onClick={e => {
              this.showModal(e);
            }} 
            className="a-donate link brand-gold-bg black ttu pv3 ph4 br3 f5 b dib">Donate</a></div>
          <Steps className="m-progress-steps dn flex-l mb5" current={2}>
          <Steps.Item title="Research" description="Researched many different ways to establish our scholarship fund in memory of many family who've instilled the importance of education within the family and many friends." className="m-progress-steps__step flex" />
          <Steps.Item title="Establish Endowment Scholarship" description="Established criteria and applied for endowment scholarship with North Carolina A&T State University" className="m-progress-steps__step flex"  />
          <Steps.Item title="Fundraising" description="Raising funds within 5 year deadline." className="m-progress-steps__step flex"  />
          <Steps.Item title="1st Award" className="m-progress-steps__step flex"  />
          </Steps>
          </div>
        </section>
        <section id="image-divider-2" className="m-card a-image-divider"></section>
        <section ref={this.donate} id="donate" className="pv5 ph4 pa5-ns min-vh-100 brand-black-bg white">
          <h2 className="normal f2 w-30-l ttu tc tl-l">Ways to<span className="db brand-gold b ttu f1">Donate</span></h2>
          <div className="flex flex-column flex-row-l justify-between tc">
            <div className="br-l w-50-l mh3 pa4">
            <span className="db mb3 f-5 fas fa-laptop">&nbsp;</span>
              <h3 className="f2 brand-gold">Donate Online</h3>
              <p class="f4">Donate online using North Carolina A&T's secure form.<br/>Your gift receipt will be mailed to you.</p>
              <a href="#" className="a-donate link brand-gold-bg black ttu pv3 ph4 br3 f5 b dib" 
            onClick={e => {
              this.showModal(e);
            }}
          >Donate Online</a>
            </div>
            <div className="w-50-l mh3 pa4">
            <span className="db mb2 f-5 far fa-envelope">&nbsp;</span>
              <h3 className="f2 brand-gold">Mail Your Donation</h3>
              <p className="f4">Please make your check payable to: <br/>NC A&T Foundation Inc.</p>
              <a href="https://cdn.singletaryscholarship.fund/forms/ncat-gift-form.pdf" target="_blank" 
              className="a-donate-pdf link brand-gold-bg black ttu pv3 ph4 mb3 br3 f5 b dib" rel="noreferrer">Download PDF Form</a>
              <p className="f4">Designation: <br/>Harrison R & Azzie Bell Singletary Endowed Scholarship<br/><br/>

                Kenneth E. Sigmon, Jr. <br/>
                Vice Chancellor University Advancement<br/>
                North Carolina A&T State University<br/>
                Dowdy Administration Building<br/>
                1601 E. Market Street <br/>
                Greensboro, NC 27411</p>
            </div>
          </div>
        </section>
        <section id="image-divider-3" className="m-card a-image-divider"></section>
        <section className="flex min-vh-100 shadow-4 brand-gold-bg pa5-l pa3 -home-view">
            <ShoutBoardContainer />
        </section>

        <section id="image-divider-1" className="m-card a-image-divider"></section>
        <section className="m-card -max-height-fill -card-red pa4 tc flex items-center justify-center white f3 f2-ns">
          <p className="w-50-l">In Honor and Memory of Harrison R and Azzie Bell Singletary, the family establishes this Scholarship Fund. 
          <br/><br/>
          <span className="brand-black f2 f1-ns b">“The Legacy Lives On”.</span></p>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
