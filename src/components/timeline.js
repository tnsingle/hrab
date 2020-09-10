import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Collapse from "@kunukn/react-collapse";

export default class Timeline extends React.Component {

    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.timelineRef = React.createRef();
        this.scrollTo = this.scrollTo.bind(this);
        this.onClose = this.onClose.bind(this);
      }

    onClose = e => {
      this.props.onClose && this.props.onClose(e);
    };

    scrollTo = () => {
        if(this.timelineRef.current){
            this.timelineRef.current.scrollIntoView({ 
               behavior: "smooth"
            });
        }
    };

    render() {
      return (
          <Collapse isOpen={this.props.show}>
              <section 
                ref={ this.timelineRef } className={ this.props.parentClassName }>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: 'transparent', color: '#fff', boxShadow: '0 3px 0 #FFD800' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFD800' }}
                date="June, 1933"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
                
            >
                <h3 className="vertical-timeline-element-title lh-copy">Harrison and Azzie Bell began in Bladenboro, North Carolina, after matrimony in June, 1933</h3>
                <p>
                Initially Harrison was given one acre of land by his father that housed two small old buildings - one served as the bedroom and the other was used as kitchen. 
                <br/><br/>The two buildings were connected by a walking board for easy access. Both buildings were heated by wood while kerosene lanterns provided flickering light during night.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: 'transparent', color: '#fff', boxShadow: '0 3px 0 #FFD800' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFD800' }}
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <figure><img className="mb0" src="https://cdn.singletaryscholarship.fund/images/harrisoncows-01.jpg" alt="Harrison tending to his cows"/></figure>
                <p>
                Harrison ventured into livestock by raising hogs and cattle for financial and family subsistence. “Bell”, the name he affectionately called her, worked jointly with her husband on the farm while she maintained the home front.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: 'transparent', color: '#fff', boxShadow: '0 3px 0 #FFD800' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFD800' }}
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <div>
                <figure>
                <img className="mb0" src="https://cdn.singletaryscholarship.fund/images/oldchalkboard_unsplash.jpg" alt="Formulas on an old blackboard" />
                <figcaption className="mt2 f7 silver">
                    <span>Photo by <a className="link silver" href="https://unsplash.com/@roman_lazygeek?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Roman Mager</a> on <a className="link silver" href="https://unsplash.com/s/photos/education?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></figcaption>
                </figure>
                </div>
                <h3 className="vertical-timeline-element-title lh-copy">Instilling the Importance of Education</h3>
                <p>
                As a united team, Harrison and Azzie Bell promoted and supported their children’s educational pursuits.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{backgroundColor: '#26547C', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid  #26547C' }}
                date="2006 - 2008"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <figure><img className="mb0" src="https://cdn.singletaryscholarship.fund/images/jake-cropped-01.jpg" alt="Portrait of Jake"/></figure>
                <h3 className="vertical-timeline-element-title lh-copy">James Singletary</h3>
                <h4 className="vertical-timeline-element-subtitle brand-gold lh-copy">North Carolina A&T State University<span class="db white f7">formally A&T College of NC</span></h4>
                <p>
                James, the eldest, attended A&T College of NC where he studied for 3 years prior to joining the United States Army. After serving the military he established his own trucking business, and later he was appointed Post Master for the United States Postal Service. Upon retirement, he returned to farming tending as many as 80 acres.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{backgroundColor: '#26547C', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid  #26547C' }}
                date="2006 - 2008"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <figure><img className="mb0" src="https://cdn.singletaryscholarship.fund/images/weeyum.jpg" alt="William in front of one of his trucks"/></figure>
                <h3 className="vertical-timeline-element-title lh-copy">William Singletary</h3>
                <h4 className="vertical-timeline-element-subtitle brand-gold lh-copy">Armstrong Barber School</h4>
                <p>
                William worked with the United States Soldiers' Home in Washington DC before completing his studies at Armstrong Barber School in Washington DC; he entered an apprenticeship prior to establishing his own trucking business.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{backgroundColor: '#26547C', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid  #26547C' }}
                date="2006 - 2008"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <figure><img className="mb0" src="https://cdn.singletaryscholarship.fund/images/carl-02.jpg" alt="Carl Singletary in front a plane"/></figure>
                <h3 className="vertical-timeline-element-title lh-copy">Carlentine Singletary</h3>
                <h4 className="vertical-timeline-element-subtitle brand-gold lh-copy">Teterboro School of Aeronautics</h4>
                <p>
                Carlentine joined the United States Air Force, after attending and graduating from Teterboro School of Aeronautics in Hackensack, New Jersey culminating in an assignment with the Federal Aviation Administration as a federal agent. He also had an affiliation with the the Tuskegee Airmen.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{backgroundColor: '#26547C', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid  #26547C' }}
                date="2006 - 2008"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <figure><img className="mb0" src="https://cdn.singletaryscholarship.fund/images/blondine-cropped-01.jpg" alt="Saundra Singletary in her graduation uniform" /></figure>
                <h3 className="vertical-timeline-element-title lh-copy">Dr. Saundra Singletary White</h3>
                <h4 className="vertical-timeline-element-subtitle brand-gold lh-copy">North Carolina A&T State University<span class="db white f7">formally North Carolina A&T College</span></h4>
                <p>
                Saundra, the youngest of the siblings, attended and graduated from NC A&T College and continued her studies to earn the Ed.S and Ed.D from another North Carolina Institution.
                <br /><br />Because of her success as a Bladen county Principal in moving one of the lowest 25 performing schools in the state to one of the top 25 highest performing in the state within one academic year, she was chosen to serve as a North Carolina Curriculum and Instruction Assistance state team leader. After completing this assignment, she retired but continues to encourage others to pursue higher education.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: 'transparent', color: '#fff', boxShadow: '0 3px 0 #FFD800' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFD800' }}
                date="Present"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <h3 className="vertical-timeline-element-title lh-copy">The legacy of pursuing higher education and securing successful careers did not end with the children of Harrison and Azzie Bell</h3>
                <p>...it continues to proliferate throughout the generations of grandchildren. There are graduates of North Carolina A&T State University while others have graduated from or are currently attending other prestigious universities.  
                <br/><br/>The union of Harrison and Azzie Bell Singletary has produced <strong>educators, engineers, successful entrepreneurs, a medical doctor, an optometrist and cooperate leaders</strong>. 
                <span className="f3 db lh-solid mv3 brand-gold">The present and future continues to be written.</span></p>
                <div className="f1 db tc brand-gold"><i class="fas fa-graduation-cap"></i></div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: '#0D1321', border: '5px solid #FFD800', boxShadow: 'none' }}
                />
                </VerticalTimeline>

                <div className="tc">
                <a href="#" className="a-link link ttu f5 white dib tc mt5 pa3 ba br3" onClick={this.onClose}>
                <i class="fas fa-times">&nbsp;</i> COLLAPSE TIMELINE
                </a>
                </div>
            
            </section>
        
          </Collapse>
          
      );
    }
  }