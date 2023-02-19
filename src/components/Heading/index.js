/*
 ** Author: Anup Kumar Singh
 ** Author URL: https://ahnupsingh.github.com
 ** Github URL: https://github.com/ahnupsingh/new-fashion-tailors
 */

import React from "react";

function Heading(props) {
  return (
    <div className="col text-center">
      <div className="section_title new_arrivals_title">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default Heading;
