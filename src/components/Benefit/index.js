/*
 ** Author: Anup Kumar Singh
 ** Author URL: https://ahnupsingh.github.com
 ** Github URL: https://github.com/ahnupsingh/new-fashion-tailors
 */

import React from "react";

function Benefit(params) {
  return (
    <div className="benefit" data-aos="fade-up">
      <div className="container">
        <div className="row benefit_row">
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-truck" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>Custom made</h6>
                <p>Walk in to get your measurements and order</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="far fa-money-bill-alt"></i>
              </div>
              <div className="benefit_content">
                <h6>Ready made</h6>
                <p>Wide variety of readily made clothes for you</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-undo" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>12 hours ready</h6>
                <p>Get your dress ready within 12 hours</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="far fa-clock"></i>
              </div>
              <div className="benefit_content">
                <h6>opening all week</h6>
                <p>8 AM - 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
