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
		
		axios.post('/createCustomer', this.state)
			.then((data) => this.setState({...this.state, id: data.data.id}));
	}

	render() {
		return (
			<Tile>
				<H1> Step 3 - Create Customer </H1>
				<p><i>Create a customer on behalf of James (Within James' account)</i></p>

				<form onSubmit={this.submitForm}>

					<label> Description </label>
					<Input onChange={(event) => this.setState({...this.state, description: event.target.value})} />

					<label> Account </label>
					<Input onChange={(event) => this.setState({...this.state, account: event.target.value})} />

					<Button type="submit"> Submit </Button>

					<p> {this.state.id} </p>

				</form>
			</Tile>
		)
	}
}