import React, { SFC } from 'react';
import { Route } from 'react-router-dom';
import './Algorithms.css';

interface AlgorithmsProps {
  match: any;
}

const Algorithms: SFC<AlgorithmsProps> = ({match}) => (
      <section className="Algorithms">
        <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
      </section>
    );

export default Algorithms;