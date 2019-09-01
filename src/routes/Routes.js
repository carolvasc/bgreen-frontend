import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Investments from '../Investments';
import UserInvestments from '../components/User/UserInvestments'

export default props =>
  <Switch>
    <Route path='/meus-investimentos' component={UserInvestments} />
    <Route path='/investir' component={Investments} />
    <Redirect from='*' to='/' />
  </Switch>