// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// About Component
export default class About extends React.Component {

	render() {
		return (
			<div className="col s12 m10">
				<ReactHelmet title="Chat-App" />
				<h2>About</h2>
				<p>Chat-App made by using Meteor and React</p>
				<p>Github Repository: <a href="https://github.com/bsonmez/chat-app.git" className="tx-underlined"></a></p>
			</div>
		)
	}

}
