import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react';
import CatListScreen from './screen/CatListScreen';

const Router = () => {
    return (
        <BrowserRouter>
        <Container>
                    <Switch>
                    {/*   <Route exact
            path="/"
            render={props => <Home {...props} apiURL={API_URL} />}
          />
        <Route path="/details/:id" component={HeroDetailsPage} /> */}
          <Route 
            exact
            path="/"
            component={ (props) => (<CatListScreen {...props}/>)}          
          />
          <Route 
            path="/results"          
            component={ (props) => (<CatListScreen isResultList {...props}/>)}          
          />
        </Switch>
        </Container>
      </BrowserRouter>
    );
  };
  

export default Router;

