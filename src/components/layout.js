import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ReactTypeformEmbed } from 'react-typeform-embed';
import Modal from '../components/modal'

class Layout extends React.Component {
  constructor () {
    super();
    this.state = {
      show: false
    };
    
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`

    let header


    if (location.pathname === rootPath) {
      // big header
      header = ( 
        <header className="o-header -large-header -screen-bg -max-height-fill relative w-100 vh-100 overflow-hidden">
        <div className="o-header-content pa5 z-1 relative o-90">
          <div className="o-header-content__top flex flex-wrap">
            <a href="/" className="link w-100 w-30-ns dib"><img src="./logo-dark-bg.png" /></a>
            <nav className="o-header__nav flex-grow-1">
              <ul className="list flex f5 ttu ml0 justify-end items-center">
                <li className="ph2"><a href="#" className="a-nav-link link white dim" onClick={e => {
              this.showModal(e);
            }}>Donate</a></li>
                <li className="ph2"><a href="#contact" className="a-nav-link link white dim">Contact Us</a></li>
                <li className="ph2"><a href="https://www.facebook.com/hrab.singletaryscholarship" className="a-nav-link link f3 white dim fab fa-facebook">&nbsp;</a></li>
                <li className="ph2"><a href="https://www.instagram.com/hrab.singletary.scholarship/" className="a-nav-link link f3 white dim fab fa-instagram">&nbsp;</a></li>
              </ul>
            </nav>
          </div>

          <div className="o-header-intro tc tl-l w-50-l mt5-ns ml6-l pl4-l bl-l">
          <p className="white f3 lh-copy">The Harrison R. & Azzie Bell Singletary Family Scholarship is an endowment scholarship established in honor of the matriarch and patriarch of this family. The scholarship supports scholars who believe in the family values of Faith, Family, Ethics, Education and Community Service.
        </p>
          <div className="tc">
            <a href="#" className="a-donate link brand-gold-bg black ttu pv3 ph4 br3 f5 b dib" 
            onClick={e => {
              this.showModal(e);
            }}
          >Donate</a>
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
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
          {header}
          <main>{children}</main>
          <footer className="o-footer bg-brand-dark-blue flex flex-column">
            <div className="o-footer-content ma5 pv5 bt white">
              <h2 id="contact" className="o-footer-heading ttu normal f2">Contact Us</h2>
              <h3 className="ttu f5 normal mb3">General Inquiries</h3>
              <p className="lh-solid f5"><span className="b">email:</span> contact@singletaryscholarship.fund</p>
              <a className="typeform-share link brand-blue-bg white ttu pv3 ph4 br3 f5 dib mb3 dim" href="https://tnsingle.typeform.com/to/B4ZZDK44" target="_blank">Contact Form</a>
              <h3 className="ttu f5 normal mt4 mb3">Follow Us for Updates!</h3>
              <div class="flex">
              <a href="https://www.facebook.com/hrab.singletaryscholarship" class="dib pr2"><span className="link f3 white dim fab fa-facebook">&nbsp;</span></a>
              <a href="https://www.instagram.com/hrab.singletary.scholarship/" class="dib pr2"><span className="link f3 white dim fab fa-instagram">&nbsp;</span></a>
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
                    <p className="ph3 ph5-ns gray f5">If our scholarship does not yet appear as a selection in the dropdown,<br/>you will have the option to type in <strong>"Harrison R. and Azzie Bell Singletary Family Scholarship"</strong>.</p>
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
