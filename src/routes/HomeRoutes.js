/*
 ** Author: Anup Kumar Singh
 ** Author URL: https://ahnupsingh.github.com
 ** Github URL: https://github.com/ahnupsingh/new-fashion-tailors
 */

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

// Route Views
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";

var routes = [
  {
    path: "/new-fashion-tailors",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },

  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Redirect to="/new-fashion-tailors" />,
  },
  {
    path: "/new-fashion-tailors/single-product/:id",
    layout: BaseLayout,
    component: SingleProductContainer,
  },
  {
    path: "/new-fashion-tailors/shops/:category",
    layout: BaseLayout,
    component: CategoryContainer,
  },
];

export default routes;
