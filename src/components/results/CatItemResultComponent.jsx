import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const CatItemResultComponent = ({
    cat,
    index,
    isResultList
}) => {
  console.log('indexindexindex', index); 
  let position;
  let trophyColor;
  switch (index) {
    case 0:
      position = 'The Cuttiest';
      trophyColor = 'yellow';
      break;
    case 1:
      position = 'The Challenger';
      trophyColor = 'grey';
      break;
    case 2:
      position = 'Very Cute Too!';
      trophyColor = 'brown';
      break;
    default:
      position = '';
  }
  return (
    <Card
      link
      raised
      key={cat.id}
      style={{ width: '300px' }}
      className={
        (index === 0 ? 'swipe-left ' : 'swipe-right ') +
        ' radius'
      }
    >
      <Image
        className="thumbnail arena radius"
        centered
        circular
        bordered
        size="massive"
        as="img"
        src={cat.url}
      />
      <Card.Content>
      <p>
          <span className="righteous font-185rem">
            {index >= 0 && index <= 2 ? (
              <Icon color={trophyColor} name="trophy" />
            ) : (
              <strong>#{index+1}</strong>
            )}{' '}
            {position}
          </span>
        </p>
      <p>
        Vote: <strong>{cat.nbVote || 0}</strong> <Icon name="paw" />
      </p>
    </Card.Content>     
    </Card>

  );
};
      
      export default CatItemResultComponent;
