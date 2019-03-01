import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import CatContentResult from './results/CatContentResultComponent';
//import CatContent from './duel/CatContentComponent';

const CatItemComponent = ({ cat, index, onClickItem, isResultList }) => (
  <Card
    link
    raised
    key={cat.id}
    style={{ width: '300px' }}
    className={(index === 0 ? 'swipe-left ' : 'swipe-right ') + ' radius'}
  >
    <Image
      className="thumbnail arena radius"
      centered
      circular
      bordered
      size="massive"
      as="img"
      src={cat.url}
      onClick={e => (!isResultList ? onClickItem(cat) : null)} // add vote for a cat
    />
    <Card.Content>
      {isResultList && <CatContentResult index={index} nbVote={cat.nbVote} />
      /*:
          cat.isWinner &&
          <CatContent
          cat={cat}
          isWinner= {cat.isWinner}
        />*/
      }
    </Card.Content>
  </Card>
);

export default CatItemComponent;
