import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShoutBoardContainer from "../components/shout-board-container"

class ShoutBoardPage extends React.Component {

    render() {
        const siteTitle = "Harrison R. and Azzie Bell Singletary Family Scholarship"
    
        return (
          <Layout location={this.props.location} title={siteTitle} donateRef={ this.donate }>
            <SEO
              title="Aggie Pride Shout Board"
              keywords={[`scholarship`, `education`, `endowment`, `singletary`, "ncat", "aggie", "pride"]}
              image="https://s3.amazonaws.com/cdn.singletaryscholarship.fund/images/shout_1200.jpg"
            />
            <section className="flex min-vh-100 shadow-4 brand-gold-bg pa5-l pa3">
              <ShoutBoardContainer />
            </section>
            </Layout>
        );
    }
}

export default ShoutBoardPage