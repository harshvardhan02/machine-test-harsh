import React, { Component } from 'react';
import moment from 'moment';
// import { Link } from 'react-router-dom';

// import { Tabs } from 'antd';
// import 'antd/dist/antd.css';

// const { TabPane } = Tabs;

export default class MeetingSent extends Component {
	constructor(props){
		super(props);

		this.state = {
			week: [],
			timeSlot: [ '07:00 AM', '07:15 AM', '07:30 AM', '07:45 AM', '08:00 AM', 
						'08:15 AM', '08:30 AM', '08:45 AM', '09:00 AM', '09:15 AM',
						'09:30 AM', '09:45 AM', '10:00 AM', '10:15 AM', '10:30 AM',
						'10:45 AM', '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM',],
			currentTime: '',
			currentDate: '',
			userName: this.props.match.params.name,
			designation: this.props.match.params.designation,
		}
		this.getDate = this.getDate.bind(this);
		this.getTime = this.getTime.bind(this);
		this.handleSchedule = this.handleSchedule.bind(this);
	}

	componentDidMount(){
		this.getCurrentWeek();
		const username = this.props.match.params.name;
		console.log(username)
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

	getDate = (e) => {
		console.log(e.target.value)
		this.setState({
			currentDate: e.target.value
		})
	}

	getTime = (e) => {
		console.log(e.target.value)
		this.setState({
			currentTime: e.target.value
		})
	}

	// callback = key => {
	// 	console.log(key)
	// }

	// tab = e => {
	// 	console.log(e)
	// }

	handleSchedule = () => {
		const { currentDate, currentTime, userName, designation } = this.state;
		const data = { currentDate, currentTime, userName, designation };
		this.props.meetingList(data) 
		this.props.history.push('/meeting-description')
	}	

	render(){
		return(
			<div className="container">
				<div className="bg-info mt-4 p-3 rounded">
					<h4 className="text-white">Meeting Sent</h4>
				</div>
				{/*<div className="mt-4">	
					<Tabs defaultActiveKey="1" centered onChange={this.callback}>
						{this.state.week.map((week, key) => (
							<TabPane tab={week} key={key+1}>
						      	<div className="row justify-content-center">
									<div className="col-lg-7 offset-lg-1 mt-3">
										{this.state.timeSlot.map(time => (
											<button onClick={this.getTime} key={time} value={time} className="btn btn-outline-warning text-dark mr-3 mt-3">{time}</button>
										))}
									</div>
								</div>
						    </TabPane>
						))}				    				    
					</Tabs>	
				</div>*/}
				
				<div className="row justify-content-center mt-4">
					{this.state.week.map((week, key) => (
						<button onClick={this.getDate} value={week} className="btn btn-outline-warning mr-3" key={key}>{week}</button>
					))}						
				</div>

				<div className="row justify-content-center mt-4">
					<div className="col-lg-7 offset-lg-1 mt-3">
						{this.state.timeSlot.map(time => (
							<button 
								onClick={this.getTime} 
								key={time} 
								value={time} 
								className="btn btn-outline-warning text-dark mr-3 mt-3">
								{time}
							</button>
						))}						
					</div>
				</div>

				<div className="row justify-content-center mt-5">
					<button onClick={this.handleSchedule} className="btn btn-outline-primary btn-sm">Next</button>
				</div>			
			</div>
		)
	}
}