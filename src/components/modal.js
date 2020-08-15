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
      className="fixed top-0 bottom-0 left-0 right-0 w-100 height-100 z-999">
        <div style={{
          position: `absolute`,
          left: `50%`,
          top: `50%`,
          transform: `translate(-50%, -50%)`
        }}
        className="modal bg-white w-50 pa4" id="modal">
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <a href="#" className="toggle-button" onClick={this.onClose}>
            close
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