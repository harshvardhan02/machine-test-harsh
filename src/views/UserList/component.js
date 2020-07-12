import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserList extends Component {
	constructor(props){
		super(props);

		this.state = {

		}
	}
	render(){
		return(
			<div className="container">
				<div className="bg-info mt-4 p-3 rounded">
					<h4 className="text-white">User List</h4>
				</div>
				<div className="col-lg-8 offset-lg-2">
				{this.props.userList.map((user, key) => 
					<div key={key} className="d-flex justify-content-between p-3 rounded align-items-center mt-3 border border-default">
						<span className="font-weight-bold">{user.name}</span>
						<Link className="btn btn-outline-info btn-sm" to={`/meeting-sent/${user.name}/${user.designation}`}>Meet</Link>
					</div>					
				)}					
				</div>
			</div>
		)
	}
}