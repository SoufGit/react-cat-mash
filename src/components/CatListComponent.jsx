import React from 'react';
import { Card } from 'semantic-ui-react';
import CatItemComponent from './CatItemComponent';

const CatListComponent = ({
    catList, 
    isResultList, 
    onClickItem,
}) => {
    
  return (   
    
    <Card.Group doubling centered itemsPerRow={2} className="radius arena">
       {catList.map((cat, index) => (
        <CatItemComponent
          key={cat.id}
          {...{ cat, index }}
          onClickItem={ onClickItem }
          isResultList={ isResultList }
        />
        //    isResultList ?
        //    <CatItemResultComponent
        //   key={cat.id}
        //   {...{ cat, index }}
        // /> 
        //    :
        // <CatItemComponent
        //   key={cat.id}
        //   {...{ cat, index }}
        //   onClickItem={onClickItem}
        // />
      ))
      } 
    </Card.Group>
  );
};

export default CatListComponent;
