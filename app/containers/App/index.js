import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NewPage from 'containers/NewPage/Loadable';
import SandwichPage from 'containers/SandwichPage/Loadable';
import SandwichList from 'containers/SandwichList/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new" component={NewPage} />
        <Route exact path="/sandwiches" component={SandwichList} />
        <Route exact path="/sandwiches/:id" component={SandwichPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
