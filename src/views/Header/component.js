import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
	render(){
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
					  <Link className="navbar-brand" to="/">Meeting System</Link>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>

					  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul className="navbar-nav ml-auto">
					      	<li className="nav-item">
	                            <NavLink exact={true} className="nav-link font-weight-bold mx-3" activeClassName="text-info" to="">User List</NavLink>
	                        </li>
	                        <li className="nav-item">
	                            <NavLink className="nav-link font-weight-bold mx-3" activeClassName="text-info" to="/mybusyslots">My Busy Slots</NavLink>
	                        </li>
	                        <li className="nav-item">
	                            <NavLink className="nav-link font-weight-bold mx-3" activeClassName="text-info" to="/meetingsentlist">Meetings sent list</NavLink>
	                        </li>
					    </ul>				    
					  </div>
				  	</div>
				</nav>
			</div>
		)
	}
}