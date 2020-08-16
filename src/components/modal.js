import React from "react";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div style={{
        backgroundColor: `rgba(255, 255, 255, 0.75)`
      }}
      className="o-modal__overlay fixed top-0 bottom-0 left-0 right-0 w-100 height-100 z-999">

        <div style={{
          position: `absolute`,
          left: `50%`,
          top: `50%`,
          transform: `translate(-50%, -50%)`
        }}
        className="o-modal bg-white mw7 w-80 pb5 tc br3 shadow-4 overflow-hidden" id="modal">
        <div className="o-modal__content">{this.props.children}</div>
        <div className="o-modal__actions">
          <a href="#" className="a-link o-modal__toggle-button ttu f6" onClick={this.onClose}>
            x close
          </a>
        </div>
      </div>
      </div>
      
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};