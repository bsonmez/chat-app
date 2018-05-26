// Imports
// Libraries
import React from 'react';
import ReactHelmet from 'react-helmet';
import { Link } from 'react-router';

// User Login Component
class UserLogin extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			isLoading: false,
			error: ''
		};
	}

	onSubmit(event) {
		event.preventDefault();

		console.log('E - submit #form-login');

		this.setState({ isLoading: true });

		if (this.state.username != '' && this.state.password != '') {
			Meteor.loginWithPassword(this.state.username, this.state.password, (error) => {
				console.log('M - loginWithPassword / callback');

				this.setState({ isLoading: false });

				if (error) {
					this.setState({ error: error.reason });
				} else {
					this.context.router.push('/');
				}
			});
		} else {
			this.setState({ isLoading: false, error: 'Please provide username and password.' });
		}
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<div className="col s12 m4">
				<ReactHelmet
					title="Login - Simple Chat"
				/>

				<h2>Login</h2>

				{this.state.error ? <p className="alert alert-danger">{this.state.error}</p> : ''}

				<form id="form-login" onSubmit={this.onSubmit.bind(this)}>
					<label htmlFor="user-username">Username</label>

					<input
						type="text"
						className="form-control"
						id="user-username"
						name="username"
						placeholder="Eg: jonsnow"
						value={this.state.username}
						onChange={this.onChange.bind(this)}
					/>

					<label htmlFor="user-password" className="mt1">Password</label>

					<input
						type="password"
						className="form-control"
						id="user-password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.onChange.bind(this)}
					/>

					<div className="mt1">
						<button type="submit" className="btn btn-default mr1" disabled={this.state.isLoading}>Login</button>

						<Link to="/register">Register</Link>
					</div>
				</form>
			</div>
		)
	}
}

// Contexts
UserLogin.contextTypes = {
	router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default UserLogin;