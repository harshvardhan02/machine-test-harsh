import { connect } from 'react-redux';
import UserList from './component';
import { getUserList } from '../../store/app/duck';

const UserListContainer = connect(
	// map state to props
	state => ({
		userList: state.user.userList
	}),
	// map dispatch to props
	{
		getUserList
	}
	)(UserList)

export default UserListContainer;	