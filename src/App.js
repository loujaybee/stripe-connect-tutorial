import React, { Component } from 'react';
import CreateAccount from 'components/CreateAccount';
import CreateCustomer from 'components/CreateCustomer';
import CreatePlan from 'components/CreatePlan';
import SubscribeToPlan from 'components/SubscribeToPlan';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateAccount/>
        <CreatePlan/>
        <CreateCustomer/>        
        <SubscribeToPlan/>
      </div>
    );
  }
}

export default App;
