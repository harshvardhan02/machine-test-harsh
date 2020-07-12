import { connect } from 'react-redux';
import MeetingSentList from './component';

const MeetingSentListContainer = connect(
	// map state to props
	state => ({
		meetings: state.user.meetingList,
		meetingDescription: state.user.meetingDescription
	}),
	// map dispatch to props
	{
		
	}
	)(MeetingSentList)

export default MeetingSentListContainer;	