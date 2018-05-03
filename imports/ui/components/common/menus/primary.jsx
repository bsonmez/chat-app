// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

// Menu Primary Component
class MenuPrimary extends React.Component {

	constructor(props) {
		super(props);
	}

	renderLinks() {
		let links;

		if (this.props.user && typeof this.props.user._id != 'undefined') {
			links = (
				<li><Link to="/direct-messages"><i className="material-icons">mail</i> Direct Messages</Link></li>
			)
		} else {
			links = (
				<li><Link to="/login"><i className="material-icons">mail</i> Direct Messages</Link></li>
			)
		}

		return links;
	}

	render() {
		return (
			<ul className="menu-primary">
				{this.renderLinks()}
			</ul>
		)
	}
}
export default MenuPrimary;