import React, { Component, useContext } from 'react';
import { Trans } from 'react-i18next';
import {globalContext} from '../../Context/GlobalState'
const Footer =() =>  {
  const {isDark} = useContext(globalContext)
    return (
      <footer className={isDark ? `footer bg-light color-light`: `footer bg-dark color-dark`}>
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block"><Trans>Copyright</Trans> © 2021 <a href="" target="_blank" rel="noopener noreferrer"> All Tech No Talk</a>. <Trans>All rights reserved</Trans>.</span>
          <span className="text-muted float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><Trans>Hand-crafted</Trans> & <Trans>made with</Trans> <i className="mdi mdi-heart text-danger"></i></span>
        </div>
      </footer>
    );
}

export default Footer;