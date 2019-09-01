import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Investments from '../Investments';

export default props =>
  <Switch>
    <Route path='/investir' component={Investments} />
    <Redirect from='*' to='/' />
  </Switch>