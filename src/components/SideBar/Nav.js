import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";

class Nav extends Component {
  state = {};

  render() {
    let { location } = this.props;
    // const isProduction = process.env.NODE_ENV === "production";
    const isProduction = true;

    return (
      <ul className="nav">
        <li className={location.pathname === "/" ? "active" : null}>
          <Link to="/">
            <i className="pe-7s-menu"></i>
            <p>My devices</p>
          </Link>
        </li>
        <li className={location.pathname === "/orders" ? "active" : null}>
          <Link to="/orders">
            <i className="pe-7s-news-paper"></i>
            <p>My orders</p>
          </Link>
        </li>
        <li className={location.pathname === "/statistics" ? "active" : null}>
          <Link to="/statistics">
            <i className="pe-7s-graph1"></i>
            <p>Statistics</p>
          </Link>
        </li>
        {isProduction || (
          <React.Fragment>
            <li
              className={
                this.isPathActive("/components") || this.state.componentMenuOpen ? "active" : null
              }
            >
              <a
                onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
                data-toggle="collapse"
              >
                <i className="pe-7s-plugin"></i>
                <p>
                  Components
                  <b className="caret"></b>
                </p>
              </a>

              <Collapse in={this.state.componentMenuOpen}>
                <div>
                  <ul className="nav">
                    <li className={this.isPathActive("/components/buttons") ? "active" : null}>
                      <Link to="/components/buttons">Buttons</Link>
                    </li>
                    <li className={this.isPathActive("/components/grid") ? "active" : null}>
                      <Link to="/components/grid">Grid System</Link>
                    </li>
                    <li className={this.isPathActive("/components/icons") ? "active" : null}>
                      <Link to="/components/icons">Icons</Link>
                    </li>
                    <li
                      className={this.isPathActive("/components/notifications") ? "active" : null}
                    >
                      <Link to="/components/notifications">Notifications</Link>
                    </li>
                    <li className={this.isPathActive("/components/panels") ? "active" : null}>
                      <Link to="/components/panels">Panels</Link>
                    </li>
                    <li className={this.isPathActive("/components/sweetalert") ? "active" : null}>
                      <Link to="/components/sweetalert">Sweet Alert</Link>
                    </li>
                    <li className={this.isPathActive("/components/typography") ? "active" : null}>
                      <Link to="/components/typography">Typography</Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
            <li
              className={this.isPathActive("/forms") || this.state.formMenuOpen ? "active" : null}
            >
              <a
                onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })}
                data-toggle="collapse"
              >
                <i className="pe-7s-note2"></i>
                <p>
                  Forms <b className="caret"></b>
                </p>
              </a>
              <Collapse in={this.state.formMenuOpen}>
                <div>
                  <ul className="nav">
                    <li className={this.isPathActive("/forms/regular-forms") ? "active" : null}>
                      <Link to="/forms/regular-forms">Regular Forms</Link>
                    </li>
                    <li className={this.isPathActive("/forms/extended-forms") ? "active" : null}>
                      <Link to="/forms/extended-forms">Extended Forms</Link>
                    </li>
                    <li className={this.isPathActive("/forms/validation-forms") ? "active" : null}>
                      <Link to="/forms/validation-forms">Validation Forms</Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
            <li
              className={this.isPathActive("/tables") || this.state.tableMenuOpen ? "active" : null}
            >
              <a
                onClick={() => this.setState({ tableMenuOpen: !this.state.tableMenuOpen })}
                data-toggle="collapse"
              >
                <i className="pe-7s-news-paper"></i>
                <p>
                  Tables <b className="caret"></b>
                </p>
              </a>
              <Collapse in={this.state.tableMenuOpen}>
                <div>
                  <ul className="nav">
                    <li className={this.isPathActive("/tables/regular-tables") ? "active" : null}>
                      <Link to="/tables/regular-tables">Regular Table</Link>
                    </li>
                    <li className={this.isPathActive("/tables/extended-tables") ? "active" : null}>
                      <Link to="/tables/extended-tables">Extended Tables</Link>
                    </li>
                    <li className={this.isPathActive("/tables/fixed-data-table") ? "active" : null}>
                      <Link to="/tables/react-bootstrap-table">React Bootstrap Table</Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
            <li className={this.isPathActive("/charts") ? "active" : null}>
              <Link to="/charts">
                <i className="pe-7s-graph"></i>
                <p>Charts</p>
              </Link>
            </li>
            <li className={this.isPathActive("/calendar") ? "active" : null}>
              <Link to="/calendar">
                <i className="pe-7s-date"></i>
                <p>Calendar</p>
              </Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);
