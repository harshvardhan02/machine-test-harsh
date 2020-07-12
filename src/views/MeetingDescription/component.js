import React, { Component } from 'react';

export default class MeetingDescription extends Component {
	constructor(props){
		super(props);

		this.state = {
			description: ''
		}
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit =  this.handleSubmit.bind(this);
	}

	handleInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const { description } = this.state;
		const data = { description }
		console.log(data);
		this.props.meetingDescription(data)
		this.props.history.push('/meetingsentlist')
	}

	render(){
		return(
			<div className="container">
					<div className="col-lg-8 offset-lg-2">
						<div className="text-center mt-5 p-4 border rounded">
							<h1 className="text-muted">Meet {this.props.meetings.userName} at</h1>
							<h4 className="text-muted">{this.props.meetings.currentTime} am on {this.props.meetings.currentDate}</h4>
							<form>
								<div className="form-group mt-5">
								    <textarea onChange={this.handleInput} name="description" className="form-control" rows="3" placeholder="Meeting Description"></textarea>
								</div>
								<div className="d-flex justify-content-end">
									<button onClick={this.handleSubmit} type="button" className="btn btn-primary btn-sm">Send Request</button>
								</div>
							</form>
						</div>										
					</div>
			</div>
		)
	}
}