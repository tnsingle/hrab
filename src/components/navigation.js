import React from "react"

export default class Navigation extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          isNavOpen: false
        };
    
        this.toggleNav = this.toggleNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
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

      scrollToRef(e, ref){
        e.preventDefault();
        if(ref && ref.current){
          ref.current.scrollIntoView({ 
            behavior: "smooth"
         });
        }
      }

    render() {
        const { items, location } = this.props
        const rootPath = `${__PATH_PREFIX__}/`;
        return (
            <nav className={`o-nav all-css-transition absolute${this.state.isNavOpen ? " -open" : ""}${location.pathname !== rootPath ? " -small" : ""}`}>
            <button aria-label="Menu" class={`o-nav__burger f1 white fas fa-bars${location.pathname !== rootPath ? " pa3" : " pa5"}`} onClick={e => {this.toggleNav(e);}}></button>
            <div className="o-nav__menu absolute top-0">
            <button aria-label="Close Menu" class={`o-nav__close f1 white${location.pathname !== rootPath ? " pa3" : " pa5"}`} onClick={e => {this.toggleNav(e);}}></button>
            <ul className="o-nav__list list f4 ma0 ph3 pb5 pv3">
                {
                    items.map(item => (
                        <li className="o-nav__list-item mb3 pb3 ph2">
                            <a href={item.href} title={item.title} className="a-nav-link link white dim"
                                onClick={item.onClick}
                            >
                            { item.iconCssClass ? (<i className={`a-nav-link__icon f3 fab dib pr2 ${item.iconCssClass}`}></i>) : ""}{item.label}
                            </a>
                        </li>
                    ))
                }
              </ul>
            </div>
            </nav>
        );
    }

}