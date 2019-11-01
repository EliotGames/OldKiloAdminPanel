import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import Nav from './Nav';
import logoImage from 'assets/images/logo.png';

class SideBar extends Component {
  state = {};

  render() {
    let { backgroundColor, enableBackgroundImage, backgroundImage } = this.props;

    return (
      <div className="sidebar" data-color={backgroundColor} data-image={backgroundImage}>
        <div className="brand">
          <a href="/" className="brand-name">
            <img src={logoImage} alt="logo" className="logo" />
          </a>
        </div>

        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
        <div
          className="sidebar-background"
          style={{
            backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
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
