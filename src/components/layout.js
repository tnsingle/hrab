import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Modal from '../components/modal'
import { AnchorLink } from "gatsby-plugin-anchor-links";

class Layout extends React.Component {
  constructor () {
    super();
    this.state = {
      show: false
    };
    
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.contactRef = React.createRef();
  }
  
  showModal (e) {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    });
    return false;
  }
  
  closeModal (e) {
    this.setState({ show: false });
  }

  scrollToRef(e, ref){
    e.preventDefault();
    if(ref && ref.current){
      ref.current.scrollIntoView({ 
        behavior: "smooth"
     });
    }
  }

  render() {
    const { location, title, children, donateRef } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`

    let header


    if (location.pathname === rootPath) {
      // big header
      header = ( 
        <header className="o-header -large-header -screen-bg -max-height-fill relative w-100 vh-100 overflow-hidden">
        <div className="o-header-content pa5 z-1 relative o-90">
          <div className="o-header-content__top flex flex-wrap flex-column flex-row-l">
            <a href="/" className="link w-100 w-30-l dib"><img src="./logo-dark-bg.png" /></a>
            <nav className="o-header__nav flex-grow-1">
              <ul className="list flex f5 ttu ml0 justify-end items-center">
                <li className="ph2"><a href="#donate" onClick={e => {
              this.scrollToRef(e, donateRef);
            }} className="a-nav-link link white dim">Ways to Donate</a></li>
                <li className="ph2"><a href="#contact" onClick={e => {
              this.scrollToRef(e, this.contactRef);
            }} className="a-nav-link link white dim">Contact Us</a></li>
                <li className="ph2"><a href="https://www.facebook.com/hrab.singletaryscholarship" className="a-nav-link link f3 white dim fab fa-facebook">&nbsp;</a></li>
                <li className="ph2"><a href="https://www.instagram.com/hrab.singletary.scholarship/" className="a-nav-link link f3 white dim fab fa-instagram">&nbsp;</a></li>
              </ul>
            </nav>
          </div>

          <div className="o-header-intro tc tl-l w-50-l mt5-l ml6-l pl4-l bl-l">
          <p className="white f3 lh-copy">The Harrison R. & Azzie Bell Singletary Family Scholarship is an endowment scholarship established in honor of the matriarch and patriarch of this family. The scholarship supports scholars who believe in the family values of Faith, Family, Ethics, Education and Community Service.
        </p>
          <div className="tc flex flex-column flex-row-l items-center justify-center">
            <a href="#" className="a-donate link brand-gold-bg black ttu pv3 ph4 br3 f5 b dib" 
            onClick={e => {
              this.showModal(e);
            }}
          >Donate Online</a><a href="#donate" onClick={e => {
            this.scrollToRef(e, donateRef);
          }} className="dib mt2 link white bl-l pl3-l ml3-l">More Ways to Donate</a>
          </div>
          </div>
        
        
        </div>
        <video className="o-header-video absolute top-0 left-0 right-0 z-0" preload="auto" muted autoPlay loop>
            <source src="https://hrab-assets-temp.s3.amazonaws.com/students.mp4" type="video/mp4" />
        </video>
        </header>

        
      )
    } else {
      // smaller header
      header = (
        <header className="o-header brand-dark-blue-bg">
        <div className="o-header-content z-1 relative pa3">
          <div className="o-header-content__top flex items-center">
            <a href="/" className="link white dim dib"><span class="fas fa-long-arrow-alt-left dib pr2"></span> Return to the Home Page</a>
            <nav className="o-header__nav flex-grow-1">
              <ul className="list flex f5 ttu ma0 justify-end items-center">
                <li className="ph2 ma0"><AnchorLink to="/#donate" title="Ways to Donate" className="a-nav-link link white dim">Donate</AnchorLink></li>
                <li className="ph2 ma0"><a href="/#contact" onClick={e => {
              this.scrollToRef(e, this.contactRef);
            }} className="a-nav-link link white dim">Contact Us</a></li>
                <li className="ph2 ma0"><a href="https://www.facebook.com/hrab.singletaryscholarship" className="a-nav-link link f3 white dim fab fa-facebook">&nbsp;</a></li>
                <li className="ph2 ma0"><a href="https://www.instagram.com/hrab.singletary.scholarship/" className="a-nav-link link f3 white dim fab fa-instagram">&nbsp;</a></li>
              </ul>
            </nav>
          </div>
          </div></header>
      )
    }
    return (
      <Wrapper>
          {header}
          <main>{children}</main>
          <footer className="o-footer brand-dark-blue-bg flex flex-column">
            <div className="o-footer-content mh5 mv5 mv6-ns ph5-ns bl-ns white">
              <h2 ref={ this.contactRef } id="contact" className="o-footer-heading ttu normal f2">Contact Us</h2>
              <h3 className="ttu f5 normal mb3">General Inquiries</h3>
              <p className="lh-solid f5"><span className="b">email:</span> contact@singletaryscholarship.fund</p>
              <a className="typeform-share link brand-blue-bg white ttu pv3 ph4 br3 f5 dib mb3 dim" href="https://tnsingle.typeform.com/to/B4ZZDK44" target="_blank">Contact Form</a>
              <h3 className="ttu f5 normal mt4 mb3">Follow Us for Updates!</h3>
              <div className="flex">
              <a href="https://www.facebook.com/hrab.singletaryscholarship" className="dib pr2"><span className="link f3 white dim fab fa-facebook">&nbsp;</span></a>
              <a href="https://www.instagram.com/hrab.singletary.scholarship/" className="dib pr2"><span className="link f3 white dim fab fa-instagram">&nbsp;</span></a>
              </div>
            </div>
            <div className="o-footer-bottom white bg-near-black pa3 f6 tc">
              Made with <i className="fas fa-heart">&nbsp;</i>by <a href="https://www.nikki-singletary.com" className="link white dim" target="_blank">Nikki Singletary</a>
            </div>
          </footer>
          <Modal onClose={e => {this.showModal(e)}} show={this.state.show}>
                    <h2 className="o-module__title ttu f3 f2-ns brand-blue-bg white pa4 pa5-ns">Thank you for your donation!</h2>
                    <p className="ph3 ph5-ns gray f4-ns">You will be taken to A&T's donation page in a new tab at:<br/> <a className="brand-blue"
                    href="https://ssbprod-ncat.uncecs.edu/pls/NCATPROD/bwzkadcd.P_DispPersInfo" 
                    target="_blank">https://ssbprod-ncat.uncecs.edu/pls/NCATPROD/bwzkadcd.P_DispPersInfo</a>.</p>
                    <p className="ph3 ph5-ns gray f5">Report any questions or issues to <a className="link brand-blue" href="mailto:contact@singletaryscholarship.fund">contact@singletaryscholarship.fund</a>.</p>
                    <a 
                    className="link brand-blue-bg white ttu pv3 ph4 br3 f5 b dib mb3"
                    href="https://ssbprod-ncat.uncecs.edu/pls/NCATPROD/bwzkadcd.P_DispPersInfo"
                    target="_blank">Continue</a>
          </Modal>
        </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
