import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const CatContentResultComponent = ({index, nbVote}) => {
    let position;
  let trophyColor;
  switch (index) {
    case 0:
      position = 'N° 1';
      trophyColor = 'yellow';
      break;
    case 1:
      position = 'N° 2';
      trophyColor = 'grey';
      break;
    case 2:
      position = 'N° 3';
      trophyColor = 'brown';
      break;
    default:
      position = '';
  }
return(
    <React.Fragment>
    <p>
        <span className="righteous font-185rem">
          {nbVote > 0 && index >= 0 && index <= 2 ? (
            <Icon color={trophyColor} name="trophy" />
          ) : (
            <strong>#{index +1}</strong>
          )}{' '}
          {nbVote > 0 && position}
        </span>
      </p>
    <p>
      Vote: <strong>{nbVote || 0}</strong> <Icon name="paw" />
    </p>
    </React.Fragment>
)};

export default CatContentResultComponent;