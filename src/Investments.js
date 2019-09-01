import React, {Component} from 'react';

// components
import Funds from './components/Funds/Funds';
import CreateInvestment from './components/CreateInvestment/CreateInvestment';

export default class Investments extends Component{
  state = {
    createInvestment: false,
    fundSelected: null
  }

  handleNextStep = params => {
    this.setState({createInvestment: !this.state.createInvestment, fundSelected: params});
  }


  render(){
    const { createInvestment, fundSelected } = this.state;


    return(
      <React.Fragment>
        {
          (!fundSelected) && <Funds createFunds={this.handleNextStep}/>
        }
        {
          (createInvestment) && <CreateInvestment fund={fundSelected}/>
        }
      </React.Fragment>
    );
  }
}