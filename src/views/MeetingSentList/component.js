import React, { Component } from 'react';

export default class MeetingSentList extends Component {
	render(){
		if (this.props.meetings.length === 0){
			return(
				<div className="container">
					<div className="row justify-content-center">
						<p className="mt-5">No Meetings Found</p>
					</div>
				</div>
			)
		}
		return(
			<div className="container">
				<div className="bg-info mt-4 p-3 rounded">
					<h4 className="text-white">Meeting Sent List</h4>					
				</div>
				<div className="bg-default mt-4 p-3 rounded border">
					<h4>{this.props.meetings.currentDate}</h4>
					<div className="d-flex justify-content-between">
						<span className="font-weight-bold">{this.props.meetings.currentTime}</span>
						<div className="bg-white p-3 rounded w-75 border-top border-left border-warning">
							<h5 className="font-weight-bold m-0">{this.props.meetings.userName}</h5>
							<span>{this.props.meetings.designation}</span>
							<p className="mt-2">{this.props.meetingDescription.description}</p>
						</div>
					</div>
				</div>				
			</div>
		)
	}
}