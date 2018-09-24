import React from 'react';
import { Card } from 'semantic-ui-react';

import CatItemComponent from './duel/CatItemComponent';
import CatItemResultComponent from './results/CatItemResultComponent';

const CatListComponent = ({catList, isResultList}) => {
  return (
    <Card.Group doublincatListg centered itemsPerRow={2} className="radius arena">
       {catList.map((cat, index) => (
           isResultList ?
           <CatItemResultComponent
          key={cat.id}
          {...{ cat, index }}
        /> 
           :
        <CatItemComponent
          key={cat.id}
          {...{ cat, index }}
        />
      ))
      } 
    </Card.Group>
  );
};

export default CatListComponent;
