import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Timeline extends React.Component {
    onClose = e => {
      this.props.onClose && this.props.onClose(e);
    };
    render() {
      if (!this.props.show) {
        return null;
      }
      return (
          <section className={ this.props.parentClassName }>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: 'transparent', color: '#fff', boxShadow: '0 3px 0 #FFD800' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFD800' }}
                date="June, 1930"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
                
            >
                <div><img src="https://cdn.singletaryscholarship.fund/images/house.jpeg"/></div>
                <h3 className="vertical-timeline-element-title">Harrison and Azzie Bell began in Bladenboro, North Carolina, after matrimony in June, 1930</h3>
                <p>
                Initially Harrison was given one acre of land by his father that housed two small old buildings - one served as the bedroom and the other was used as kitchen. 
                <br/><br/>The two buildings were connected by a walking board for easy access. Both buildings were heated by wood while kerosene lanterns provided flickering light during night.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: 'transparent', color: '#fff', boxShadow: '0 3px 0 #FFD800' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFD800' }}
                date="June, 1930"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <p>
                Harrison ventured into livestock by raising hogs and cattle  for financial and family subsistence. “Bell”, the name he affectionately called her, worked jointly with her husband on the farm while she maintained the home front.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: 'transparent', color: '#fff', boxShadow: '0 3px 0 #FFD800' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFD800' }}
                date="June, 1930"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <h3 className="vertical-timeline-element-title">Instilling the Importance of Education</h3>
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
                <h3 className="vertical-timeline-element-title">James Singletary</h3>
                <h4 className="vertical-timeline-element-subtitle brand-gold">North Carolina A&T College</h4>
                <p>
                James, the eldest, attended NC A&T College where he studied for 3 years prior to establishing his own trucking business
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{backgroundColor: '#26547C', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid  #26547C' }}
                date="2006 - 2008"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <h3 className="vertical-timeline-element-title">William Singletary</h3>
                <h4 className="vertical-timeline-element-subtitle brand-gold">Armstrong Barber School</h4>
                <p>
                William completed his studies at Armstrong Barber School in Washington DC, and entered an apprenticeship prior to establishing his trucking business
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{backgroundColor: '#26547C', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid  #26547C' }}
                date="2006 - 2008"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <h3 className="vertical-timeline-element-title">Carlentine Singletary</h3>
                <h4 className="vertical-timeline-element-subtitle brand-gold">Certification</h4>
                <p>
                Carlentine attended and graduated from Tedersboro School of Aeronautics in Hackensack, New Jersey culminating in an assignment as a Federal Agent for Air Safety
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{backgroundColor: '#26547C', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid  #26547C' }}
                date="2006 - 2008"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <h3 className="vertical-timeline-element-title">Saundra (Singletary) White</h3>
                <h4 className="vertical-timeline-element-subtitle brand-gold">North Carolina A&T College</h4>
                <p>
                Saundra, the youngest of the siblings, attended and graduated from NC A&T College and continued her studies to earn the Ed.S and Ed.D from another North Carolina Institution.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ backgroundColor: 'transparent', color: '#fff', boxShadow: '0 3px 0 #FFD800' }}
                contentArrowStyle={{ borderRight: '7px solid  #FFD800' }}
                date="Present"
                iconStyle={{ background: '#FFD800', color: '#fff', boxShadow: 'none' }}
            >
                <h3 className="vertical-timeline-element-title">The legacy of pursuing higher education and securing successful careers did not end with the children of Harrison and Azzie Bell</h3>
                <p>...it continues to proliferate  throughout the generations of grandchildren. There are graduates of North Carolina A&T State University while others have graduated from or are currently attending other prestigious universities.  
                <br/><br/>The union of Harrison and Azzie Bell Singletary has produced educators, engineers, successful entrepreneurs, a medical doctor, an optometrist and cooperate leaders. 
                <span className="f3 db lh-solid mv3 brand-gold">The present and future continues to be written.</span></p>
                <div className="f1 db tc brand-gold"><i class="fas fa-graduation-cap"></i></div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: '#0D1321', border: '5px solid #FFD800', boxShadow: 'none' }}
                />
                </VerticalTimeline>

                <a href="#" className="a-link link ttu f5 white db tc mv4" onClick={this.onClose}>
                <i class="fas fa-times">&nbsp;</i> COLLAPSE TIMELINE
                </a>
            </section>
        
      );
    }
  }