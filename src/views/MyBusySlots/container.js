import { connect } from 'react-redux';
import MyBusySlots from './component';
import { getUserList } from '../../store/app/duck';

const MyBusySlotsContainer = connect(
	// map state to props
	state => ({
		userList: state.user.userList
	}),
	// map dispatch to props
	{
		getUserList
	}
	)(MyBusySlots)

export default MyBusySlotsContainer;	