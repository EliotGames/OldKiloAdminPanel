import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "./Nav";

class SideBar extends Component {
  state = {};

  render() {
    let {
      backgroundColor,
      enableBackgroundImage,
      backgroundImage
    } = this.props;

    return (
      <div
        className="sidebar"
        data-color={backgroundColor}
        data-image={backgroundImage}
      >
        <div className="brand">
          <a href="/" className="brand-name">
            KiLo Admin panel
          </a>
        </div>

        <div className="sidebar-wrapper">
          <Nav />
        </div>
        <div
          className="sidebar-background"
          style={{
            backgroundImage: enableBackgroundImage
              ? "url(" + backgroundImage + ")"
              : null
          }}
        ></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage
});

export default withRouter(connect(mapStateToProps)(SideBar));
