// Imports
import React from 'react';

// App Imports
import DirectMessageItem from './item';

// Direct Message Items Component
class DirectMessageItems extends React.Component {

	renderUsersList() {
		let chatRoomsList;

		if (this.props.usersAllLoaded) {
			chatRoomsList = (
				this.props.usersAll.map((user) => (
					<DirectMessageItem user={user} key={user._id} />
				))
			)
		} else {
			chatRoomsList = (
				<p className="tx-grey">Please wait...</p>
			)
		}

		return chatRoomsList;
	}

	render() {
		return (
			<div>
				{this.renderUsersList()}
			</div>
		)
	}

}

// Properties
DirectMessageItems.propTypes = {
	usersAllLoaded: React.PropTypes.bool,
	usersAll: React.PropTypes.array,
	user: React.PropTypes.object
};

// Contexts
DirectMessageItems.contextTypes = {
	router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default DirectMessageItems;
