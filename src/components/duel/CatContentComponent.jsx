import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import {compose, lifecycle} from 'recompose';

const CatContentComponent = ({cat, isWinner}) => {
    console.log('CatContentComponentCatContentComponent', cat);
    const colorCard = isWinner ? 'green' : 'red';
    const nameCard = isWinner ? 'check circle' : 'remove circle';
return(
    <React.Fragment>
        <Card.Description style={{ textAlign: 'center' }}>
            <Icon color={colorCard} size="massive" name={nameCard} />
        </Card.Description>
    </React.Fragment>
)};

export default(compose(
   
      lifecycle({
        componentWillReceiveProps(nextProps) {
            console.log('nexteproroororooror', nextProps)
          },
      }),
//export default CatContentComponent;
  )(CatContentComponent));
//export default CatContentComponent;