import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react';
import CatListScreen from './screen/CatListScreen';
//import HeroDetailsPage from '../pages/HeroDetailsPage';

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
          <Route component={CatListScreen} />
        </Switch>
        </Container>
      </BrowserRouter>
    );
  };
  

export default Router;

