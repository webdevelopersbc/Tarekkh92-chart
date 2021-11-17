import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse, Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import Switch from "react-switch";
import { ReactComponent as IMg } from './im.svg'
import { ReactComponent as Tele } from './tele.svg'
import { ReactComponent as Twitr } from './twitr.svg'
import { ReactComponent as LightSvg } from './sun.svg'
import { ReactComponent as DarkSvg } from './moon.svg'
import { ReactComponent as Worldicon } from './world.svg'
import { ReactComponent as SettingBTn } from './settingbtn.svg'
import Classes from './sidebar.module.css'
import './../dashboard/dasboardStyle.css'
// import { classNames } from 'react-select/src/utils';
class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: '/apps', state: 'appsMenuOpen' },
      { path: '/basic-ui', state: 'basicUiMenuOpen' },
      { path: '/advanced-ui', state: 'advancedUiMenuOpen' },
      { path: '/form-elements', state: 'formElementsMenuOpen' },
      { path: '/tables', state: 'tablesMenuOpen' },
      { path: '/maps', state: 'mapsMenuOpen' },
      { path: '/icons', state: 'iconsMenuOpen' },
      { path: '/charts', state: 'chartsMenuOpen' },
      { path: '/user-pages', state: 'userPagesMenuOpen' },
      { path: '/error-pages', state: 'errorPagesMenuOpen' },
      { path: '/general-pages', state: 'generalPagesMenuOpen' },
      { path: '/ecommerce', state: 'ecommercePagesMenuOpen' },
      { path: '/editors', state: 'editorsMenuOpen' },
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true })
      }
    }));

  }
  render() {
    console.log(this.props.isToggleShow,'this.props.isToggleShow');
    return (
      <nav className={this.props.isDark ? `sidebar sidebar-offcanvas bg-light border` : `sidebar sidebar-offcanvas`} id="sidebar">
        <div className={this.props.isDark ? `sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top bg-light` : `sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top`}>
          <h3 className={this.props.isDark ? 'text-dark' : 'text-white'}>Logo</h3>
        </div>
        <ul className="nav">
          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>Menu</Trans></span>
          </li>
          <li className={this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className={this.props.isDark ? 'nav-linkLM nav-link' : "nav-link"} to="/dashboard">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>

          <li className="nav-item menu-items">
            <a className={this.props.isDark ? 'nav-linkLM nav-link' : "nav-link"} href="http://bootstrapdash.com/demo/corona/react/documentation/documentation.html" rel="noopener noreferrer" target="_blank">
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title"><Trans>Documentation</Trans></span>
            </a>
          </li>
          <li className={this.isPathActive('/faq') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className={this.props.isDark ? 'nav-linkLM nav-link' : "nav-link"} to="/faq">
              <span className="menu-icon">
                <i className="mdi mdi-texture"></i>
              </span>
              <span className="menu-title"><Trans>FAQ</Trans></span>
            </Link>
          </li>
          <li className={this.isPathActive('/roadmap') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className={this.props.isDark ? 'nav-linkLM nav-link' : "nav-link"} to="/roadmap">
              <span className="menu-icon">
                <i className="mdi mdi-texture"></i>
              </span>
              <span className="menu-title"><Trans>Road Map</Trans></span>
            </Link>
          </li>
          <li className={this.isPathActive('/contact') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className={this.props.isDark ? 'nav-linkLM nav-link' : "nav-link"} to="/contact">
              <span className="menu-icon">
                <i className="mdi mdi-texture"></i>
              </span>
              <span className="menu-title"><Trans>Contact us</Trans></span>
            </Link>
          </li>
        </ul>
        <div className={this.props.isDark ? Classes.mainWrapperBtmLight : Classes.mainWrapperBtm}>
          <button className={this.props.isToggleShow ? Classes.settingBtn : 'd-none'}>
            <SettingBTn className={Classes.SetingBtnStyle} />
          </button>
          <div className={this.props.isToggleShow ? 'd-none' : Classes.VariableCol}>
            {/* <a href="#" className={Classes.hrflink}>
              <IMg className={Classes.IMGICON} />
              <div className={this.props.isDark ? Classes.priceVariableLight : Classes.priceVariable}>$24.392</div>
            </a> */}
            {/* <div className={Classes.socialLink}>
              <div className={this.props.isDark ? Classes.twtrLight : Classes.twtr}>
                <Tele />
              </div>
              <a href="#" className={this.props.isDark ? Classes.telegrmLight : Classes.telegrm}>
                <Twitr />
              </a>
            </div> */}
          </div>
          <div className={this.props.isToggleShow ? 'd-none' : Classes.DLCOL}>
            <button className={Classes.btnwrapper}>
              <div className={Classes.iconwrapper}>
                <LightSvg onClick={this.props.handleLight} className={this.props.isDark ? Classes.iconwrapperSunLight : Classes.iconwrapperSun} />
                <div className={Classes.line}>/</div>
                <DarkSvg onClick={this.props.handleDark} className={this.props.isDark ? Classes.iconwrapperMoonLight : Classes.iconwrapperMoon} />
              </div>
            </button>
            <div className={Classes.worldIcon}>
              {/* <button className={Classes.btnwrapper1}>
                <Worldicon className={this.props.isDark ? Classes.iconWorldLight  : Classes.iconWorld} />
                <div className={this.props.isDark ? Classes.ENTEXTLight : Classes.ENTEXT}>EN</div>
              </button> */}
              <div className={Classes.socialLink}>
                <div className={this.props.isDark ? Classes.twtrLight : Classes.twtr}>
                  <Tele />
                </div>
                <a href="#" className={this.props.isDark ? Classes.telegrmLight : Classes.telegrm}>
                  <Twitr />
                </a>
              </div>

            </div>
          </div>

        </div>
        {/* <div className={this.props.isToggleShow ? Classes.DN : Classes.iconStylee}><span className={this.props.isToggleShow ? 'd-none' : 'mb-2'}><i style={{ fontSize: '30px', position: 'relative', top: '-2px', color: this.props.isDark ? '#000' : '#fff' }} className="fa fa-moon-o"></i></span>  <Switch onChange={this.props.handleToggle} checked={this.props.isDark} /><span className={this.props.isToggleShow ? 'd-none' : 'ml-1'}><i style={{ fontSize: '28px', position: 'relative', top: '-3px', color: this.props.isDark ? '#000' : '#fff' }} className="fa fa-sun-o"></i></span></div> */}
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);