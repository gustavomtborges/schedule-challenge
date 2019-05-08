import React, { Component } from 'react';
import { Box } from 'grommet';
import LeftSide from '../../components/LeftSide';
import RightSide from '../../components/RightSide';
import FormLogin from './components/FormLogin';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = event => {
		console.log(event.value);
		event.value = {};
	};

	render() {
		return (
			<Box direction="row" height="100vh">
				<LeftSide />
				<RightSide>
					<Box width="498px">
						<FormLogin handleSubmit={this.handleSubmit} />
					</Box>
				</RightSide>
			</Box>
		);
	}
}
