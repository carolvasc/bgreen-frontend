import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Funds from '../components/Funds/Funds';

export default props =>
  <Switch>
    <Route path='/investir' component={Funds} />
    <Redirect from='*' to='/' />
  </Switch>