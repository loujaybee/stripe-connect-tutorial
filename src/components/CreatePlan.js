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
		
		axios.post('/createPlan', this.state)
			.then((data) => this.setState({...this.state, planid: data.data.id}));
	}

	render() {
		return (
			<Tile>
				<H1> Step 2 - Create Plan </H1>
				<p><i>Create a plan on behalf of James (Within James' account)</i></p>

				<form onSubmit={this.submitForm}>

					<label> Account </label>
					<Input onChange={(event) => this.setState({...this.state, account: event.target.value})} />

					<label> Amount </label>
					<Input onChange={(event) => this.setState({...this.state, amount: event.target.value})} />

					<label> Name </label>
					<Input onChange={(event) => this.setState({...this.state, name: event.target.value})} />

					<label> ID </label>
					<Input onChange={(event) => this.setState({...this.state, id: event.target.value})} />

					<Button type="submit"> Submit </Button>

					<p> {this.state.planid} </p>

				</form>
			</Tile>
		)
	}
}