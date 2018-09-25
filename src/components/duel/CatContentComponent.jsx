import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const CatContentComponent = ({isWinner}) => {
    const colorCard = isWinner ? 'green' : 'red';
    const nameCard = isWinner ? 'check circle' : 'remove circle';
return(
    <React.Fragment>
        <Card.Description style={{ textAlign: 'center' }}>
            <Icon color={colorCard} size="massive" name={nameCard} />
        </Card.Description>
    </React.Fragment>
)};

export default CatContentComponent;