import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { increment } from '../../actions/vote';

const CatItemComponent = ({
    cat,
    index,
    onClickItem,
}) => {
  const colorCard = cat.isWinner ? 'green' : 'red';
  const nameCard = cat.isWinner ? 'check circle' : 'remove circle';
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
        onClick={e =>  onClickItem(cat) } // add vote for a cat
      />
    <Card.Content>
        <Card.Description style={{ textAlign: 'center' }}>
          <Icon color={colorCard} size="massive" name={nameCard} />
        </Card.Description>
      </Card.Content>      
    </Card>
  );
};
  
//     const mapDispatchToProps = dispatch => ({
//         incrementAction: data => dispatch(increment(data)),
//       });

      export default(compose(
        withState('isWinner', 'setIswinner', false),        
        connect(
          null,
          dispatch => ({
            incrementAction: data => dispatch(increment(data)),
          })
        ),
        withHandlers({
            onClickItem: ({ setIswinner, incrementAction }) => (cat) => {
                incrementAction(cat);
                setIswinner(cat.isWinner); // render the card
            },
          }),
      )(CatItemComponent));
      
     // export default connect(null,mapDispatchToProps)(CatItemComponent);
