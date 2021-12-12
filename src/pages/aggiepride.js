import React from "react";

import Layout from "../components/layout"
import Seo from "../components/seo"
import ShoutBoardContainer from "../components/shout-board-container"

class ShoutBoardPage extends React.Component {

    render() {
        const siteTitle = "Harrison R. and Azzie Bell Singletary Family Scholarship"
    
        return (
          <Layout location={this.props.location} title={siteTitle} donateRef={ this.donate }>
            <Seo
              title="What Does Aggie Pride Mean to You?"
              keywords={[`scholarship`, `education`, `endowment`, `singletary`, `ncat`, "aggie", `aggie pride`, `aggie born, aggie bred`]}
              description="An interactive board that allows students and alumni to say what their most proud of from their time attending North Carolina A&T State Univeristy"
              image="https://cdn.singletaryscholarship.fund/images/shout_1200.jpg"
            />
            <section className="flex min-vh-100 shadow-4 brand-gold-bg pa5-l pa3">
              <ShoutBoardContainer />
            </section>
            </Layout>
        );
    }
}

export default ShoutBoardPage