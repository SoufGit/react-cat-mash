import React from 'react';
import { Card } from 'semantic-ui-react';

import CatItemComponent from './CatItemComponent';

const CatListComponent = ({catList}) => {
  return (
    <Card.Group doublincatListg centered itemsPerRow={2} className="radius arena">
       {catList.map((cat, index) => (
        <CatItemComponent
          key={cat.id}
          {...{ cat, index }}
        />
      ))} 
    </Card.Group>
  );
};

export default CatListComponent;
