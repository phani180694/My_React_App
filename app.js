import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SignUpContainer from './src/signUp/container';
import store from './store';

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignUpContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default AppRoutes;