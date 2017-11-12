import React, { Component } from 'react';
import Tile from 'components/generic/Tile';
import {H1} from 'components/generic/Headers'
import Input from 'components/generic/Input'
import Button from 'components/generic/Button'
import axios from 'axios';

export default class extends Component {

	constructor(){
		super();

		this.state = {}

		this.submitForm = this.submitForm.bind(this);
	}

	submitForm(e) {
		e.preventDefault();
		
		axios.post('/subscribeToPlan', this.state)
			.then((data) => this.setState({...this.state, id: data.data.id}));
	}

	render() {
		return (
			<Tile>
				<H1> Step 4 - Subscribe to plan </H1>
				<p><i>Subscribe Rory, the customer of James to James' plan </i></p>

				<form onSubmit={this.submitForm}>

					<label> Customer </label>
					<Input onChange={(event) => this.setState({...this.state, customer: event.target.value})} />

					<label> plan </label>
					<Input onChange={(event) => this.setState({...this.state, plan: event.target.value})} />

					<label> Account </label>
					<Input onChange={(event) => this.setState({...this.state, account: event.target.value})} />

					<Button type="submit"> Submit </Button>

					<p> {this.state.id} </p>

				</form>
			</Tile>
		)
	}
}