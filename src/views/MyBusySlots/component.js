import React, { Component } from 'react';
import moment from 'moment';

export default class MyBusySlots extends Component {
	constructor(props){
		super(props);

		this.state = {
			week: [],
			disabled: false,
			timeSlot: [ '07:00 AM', '07:15 AM', '07:30 AM', '07:45 AM', '08:00 AM', 
						'08:15 AM', '08:30 AM', '08:45 AM', '09:00 AM', '09:15 AM',
						'09:30 AM', '09:45 AM', '10:00 AM', '10:15 AM', '10:30 AM',
						'10:45 AM', '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM',],

			timeSlot1: [ '07:00 AM', '07:15 AM'],
		}
	}

	componentDidMount(){
		this.getCurrentWeek();
	}

	getCurrentWeek = () => {
  		let currentDate = moment();
  		// let weekStart = currentDate.clone().startOf('isoWeek');
  		let startWeek = moment(currentDate, "DD-MM-YYYY").add(0, 'days');
  		// let weekEnd = currentDate.clone().endOf('isoWeek');
  		let days = [];
  		for (var i = 0; i <= 6; i++) {
    		days.push(moment(startWeek).add(i, 'days').format("MMMM Do, ddd"));
  		}
  		this.setState({
  			week: days
  		})
	}

	render(){
		return(
			<div className="container">
				<div className="bg-info mt-4 p-3 rounded">
					<h4 className="text-white">Edit Meeting Slots</h4>
				</div>	

				<div className="row justify-content-center mt-4">
					{this.state.week.map((week, key) => (
						<button onClick={this.getDate} value={week} className="btn btn-warning mr-3" key={key}>{week}</button>
					))}						
				</div>	

				<div className="row justify-content-center mt-4">
					<div className="col-lg-7 offset-lg-1 mt-3">
						{this.state.timeSlot.map(time => (
							<button 
								onClick={this.getTime} 
								key={time} value={time} 
								className="btn btn-outline-warning text-dark mr-3 mt-3">
								{time}
							</button>
						))}						
					</div>
				</div>		
			</div>
		)
	}
}