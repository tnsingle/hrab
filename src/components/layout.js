import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Modal from '../components/modal'
import Navigation from '../components/navigation'
import { AnchorLink } from "gatsby-plugin-anchor-links";

class Layout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false,
      isNavOpen: false
    };
    
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.toggleNav = this.toggleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);

    this.contactRef = React.createRef();
  }

  toggleNav (e) {
    e.preventDefault();
    this.setState({ isNavOpen: !this.state.isNavOpen });
    return false;
  }

  closeNav (e) {
    e.preventDefault();
    this.setState({ isNavOpen: false });
    return false;
  }
  
  showModal (e) {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    });
    return false;
  }
  
  closeModal (e) {
    e.preventDefault();
    this.setState({ show: false });
    return false;
  }

  scrollToRef(e, ref){
    e.preventDefault();
    if(ref && ref.current){
      ref.current.scrollIntoView({ 
        behavior: "smooth"
     });
    }
  }

  componentWillUpdate(prevProps, prevState, snapshot) {
    // Typical usage (don't forget to compare props):
    if (prevProps.showModal !== this.props.showModal) {
      this.setState({show: !this.props.showModal});
    }
  }

  render() {
    const { location, title, children, donateRef, showModal, closeModal} = this.props
    const rootPath = `${__PATH_PREFIX__}/`;
    const blogPath = `${__PATH_PREFIX__}/blog/`;
    const closeModalFunc = showModal ? closeModal : this.closeModal;
    const isShowModal = this.state.show;
    const that = this;


    let navItems = [
      {
        href: "/#donate",
        onClick: that.showModal,
        title: "Donate",
        label: "Donate"
      },
      {
        href: "https://hrabsingletary.medium.com/",
        title: "Blog",
        label: "Blog"
      },
      {
        href: "https://www.redbubble.com/people/HBCUishStickers/shop?asc=u",
        title: "Stickers",
        label: "Stickers"
      },
      {
        href: "/#contact",
        onClick: function(e) {
          that.scrollToRef(e, that.contactRef)
        },
        title: "Contact Us",
        label: "Contact Us"
      },
      {
        href: "/aggiepride",
        title: "Aggie Pride Shout Board",
        label: "Aggie Pride!"
      },
      {
        href: "https://www.facebook.com/hrab.singletaryscholarship",
        title: "Like us on Facebook!",
        label: "Like us on Facebook!",
        iconCssClass: "fab fa-facebook"
      },
      {
        href: "https://www.instagram.com/hrab.singletary.scholarship/",
        title: "Follow us on IG!",
        label: "Follow us on IG!",
        iconCssClass: "fab fa-instagram"
      }
    ];

    let header


    if (location.pathname === rootPath) {
      // big header
      header = ( 
        <header className="o-header -large-header relative -screen-bg -max-height-fill w-100 vh-100 overflow-hidden">
        <div className="o-header-content pa5 z-1 relative o-90">
          <div className="o-header-content__top flex flex-wrap flex-column flex-row-l">
            <a href="/" className="link w-100 w-30-l dib"><img src="./logo-dark-bg.png" /></a>
          </div>

          <div className="o-header-intro tc tl-l w-50-l mt5-l ml6-l pl4-l bl-l">
          <p className="white f3 lh-copy">The Harrison R. & Azzie Bell Singletary Family Scholarship is an endowment scholarship established in honor of the matriarch and patriarch of this family. The scholarship supports scholars who believe in the family values of Faith, Family, Ethics, Education and Community Service.
        </p>
          <div className="tc flex flex-column flex-row-l items-center justify-center">
            <button title="Donate Now" className="a-donate gtm-donate-online link brand-gold-bg black ttu pv3 ph4 br3 f5 b dib" 
            onClick={e => {
              this.showModal(e);
            }}
          >Donate Now</button><a href="#donate" title="Ways to Donate" onClick={e => {
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
        <div className="o-header-content z-1 relative pa3 flex justify-between">
          <a href="/" className="link w-100 w-auto-l dib ml4 pl4 pt1"><img className="ma0 h3" src="./logo-dark-bg.png" /></a>
          <button title="Donate Now" className="a-donate gtm-donate-online link pa3 brand-gold ba br3 f5 dn dib-l bg-transparent" 
            onClick={e => {
              this.showModal(e);
            }}
          >Donate Now</button>
          </div>
          
          </header>
      )
    }
    return (
      <Wrapper>
          <Navigation location={this.props.location} items={navItems} />
          <div className="o-layout left-css-transition">
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
          </div>
          <Modal onClose={e => {closeModalFunc(e)}} show={isShowModal}>
            <div className="o-module__top">
                    <h2 className="o-module__title f3 f2-ns brand-dark-blue-bg white pa4 pa5-ns">We appreciate your donation</h2>
            </div>
                    
                    <p className="ph3 ph5-ns dark-gray f4-ns">You will be taken to North Carolina A&T's donation page:<br/> <a className="brand-blue"
                    href="https://app.mobilecause.com/form/Rrgoyw?vid=lf43q"
                    target="_blank">https://app.mobilecause.com/form/Rrgoyw?vid=lf43q</a>.</p>
                    <p className="ph3 ph5-ns dark-gray f4-ns">Please Make Your Campaign Designation to:<br/><strong>Harrison R & Azzie Bell Singletary Endowed Scholarship</strong></p>
                    <a 
                    className="link gtm-donate-external brand-gold-bg black ttu pv3 ph4 br3 f5 b dib mb3"
                    href="https://app.mobilecause.com/form/Rrgoyw?vid=lf43q"
                    href="https://app.mobilecause.com/form/Rrgoyw?vid=lf43q"
                    target="_blank">Continue</a>
                    <p className="ph3 ph5-ns gray f5">Report any questions or issues to <a className="link brand-blue" href="mailto:contact@singletaryscholarship.fund">contact@singletaryscholarship.fund</a>.</p>
          
          </Modal>
        </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
