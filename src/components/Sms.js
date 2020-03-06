import React from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import '../styles/Sms.css';
import axios from 'axios';

const Sms = () => {
	const handleSend = (e) => {
		e.preventDefault();
		console.log(e.target.content.value);

		axios
			.post('http://localhost:3000/sms', {
				message: e.target.content.value
			})
			.then((response) => {
				console.log(response);
				// 	if (response && response.message_ === 200) {
				// 		console.log('Success');
				// 	} else {
				// 		console.log('Error sending sms');
				// 	}
			})
			.catch((error) => console.log(error.message));
	};

	return (
		<div>
			<Form className="sms" onSubmit={handleSend}>
				<Form.Field
					id="form-textarea-control-opinion"
					control={TextArea}
					label="SMS Text"
					placeholder="Key in your content here"
					name="content"
				/>
				<Form.Field
					id="form-button-control-public"
					control={Button}
					content="Send"
					type="submit"
				/>
			</Form>
		</div>
	);
};

export default Sms;
