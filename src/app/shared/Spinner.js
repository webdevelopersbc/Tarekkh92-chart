import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div>
        {/* <div className="loader-demo-box"> */}
          <div className="square-box-loader">
            <div className="square-box-loader-container">
              <div className="square-box-loader-corner-top"></div>
              <div className="square-box-loader-corner-bottom"></div>
            </div>
            <div className="square-box-loader-square"></div>
          </div>
        {/* </div> */}
        {/* <div className="spinner-wrapper">
          <div className="donut"></div>
        </div> */}
      </div>
    )
  }
}

export default Spinner
