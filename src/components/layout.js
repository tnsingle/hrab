import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ReactTypeformEmbed } from 'react-typeform-embed';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`

    let header


    if (location.pathname === rootPath) {
      // big header
      header = ( 
        <header className="o-header -large-header -screen-bg relative w-100 vh-100 overflow-hidden">
        <div className="o-header-content pa5 z-1 relative o-90">
          <div className="o-header-content__top flex">
            <a href="/" className="link w-30 dib"><img src="./logo-dark-bg.png" /></a>
            <nav className="o-header__nav flex-grow-1">
              <ul className="list flex f5 ttu justify-end items-center">
                <li className="ph2"><a href="#contact" className="a-nav-link link white dim">Contact Us</a></li>
                <li className="ph2"><a href="https://www.facebook.com/hrab.singletaryscholarship" className="a-nav-link link f3 white dim fab fa-facebook">&nbsp;</a></li>
                <li className="ph2"><a href="https://www.instagram.com/hrab.singletary.scholarship/" className="a-nav-link link f3 white dim fab fa-instagram">&nbsp;</a></li>
              </ul>
            </nav>
          </div>

          <div className="o-header-intro tc tl-l w-50-l mt5 ml6-l pl4-l bl-l">
          <p className="white f3 lh-copy">The Harrison R. & Azzie Bell Singletary Family Scholarship is an endowment scholarship established in honor of the matriarch and patriarch of this family. The scholarship supports scholars who believe in the family values of Faith, Family, Ethics, Education and Community Service.
        </p>
          <div className="tc">
            <a href="#" class="link brand-gold-bg black ttu pv3 ph4 br3 f5 b dib">Donate</a>
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
          <footer className="o-footer">
            <div className="o-footer-content bg-brand-dark-blue pa5 white">
              <h2 id="contact" className="o-footer-heading ttu normal f2 pl3 bl">Contact Us</h2>
              <p className="lh-copy f4">We're still working out the details of the scholarship.<br />If you have any questions, feel free to reach out to us using the form below.</p>
              
              <div className="m-typeform relative"><ReactTypeformEmbed url="http://tnsingle.typeform.com/to/B4ZZDK44" /></div>
            </div>
          </footer>
        </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
