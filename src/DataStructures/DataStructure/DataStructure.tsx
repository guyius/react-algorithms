import React, { SFC } from 'react';

interface DataStructureProps {
    match: any;
}

const DataStructure: SFC<DataStructureProps> = ({match}) => (
      <section className="Data-structures">       
        {match.params.name}
      </section>
    );

export default DataStructure;