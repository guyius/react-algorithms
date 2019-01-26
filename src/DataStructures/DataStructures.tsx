import React, { SFC } from "react";
import { Route } from "react-router-dom";

import DataStructure from "./DataStructure/DataStructure";
import "./DataStructures.css";

const DataStructures: SFC = () => (
  <section className="Data-structures">
    Data-Structure
    <Route path="/data-structures/:name" component={DataStructure} />
  </section>
);

export default DataStructures;
