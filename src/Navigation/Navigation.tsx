import React, { SFC } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { NavigationTreeCategory } from "./Types";
import { APPLICATION_NAVIGATION_TREE } from "./Constants";
import CategoryItem from "./components/CategoryItem";
import { ReactComponent as ArrowIcon } from "../arrow.svg";
import "./Navigation.css";

const Navigation: SFC = () => (
  <nav className="App-nav">
    {APPLICATION_NAVIGATION_TREE.map((category: NavigationTreeCategory) => (
      <div
        key={category.rootUrl}
        className={classNames("Nav-wrapper", {
          active: location.pathname.includes(category.rootUrl)
        })}
      >
        <NavLink to={`${category.rootUrl}${category.items[0].url}`}>
          {category.displayName}
        </NavLink>
        <ArrowIcon />
        <ul>
          {category.items.map(item => (
            <CategoryItem
              key={item.url}
              item={item}
              rootUrl={category.rootUrl}
            />
          ))}
        </ul>
      </div>
    ))}
  </nav>
);

export default Navigation;
