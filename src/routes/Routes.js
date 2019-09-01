import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Investments from '../Investments';
import UserInvestments from '../components/User/UserInvestments'
import Indication from '../components/Indication/Indication';
import Dashboard from '../components/Dashboard/Dashboard';

export default props =>
  <Switch>
    <Route path='/home' exact component={UserInvestments} />
    <Route path='/home/:id'  component={Dashboard} />
    <Route path='/investir' component={Investments} />
    <Route path='/indicacao' component={Indication} />
    <Redirect from='*' to='/home' />
  </Switch>