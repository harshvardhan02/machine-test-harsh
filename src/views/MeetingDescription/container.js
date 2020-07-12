import { connect } from 'react-redux';
import MeetingDescription from './component';
import { meetingDescription } from '../../store/app/duck';

const MeetingDescriptionContainer = connect(
	// map state to props
	state => ({
		meetings: state.user.meetingList
	}),
	// map dispatch to props
	{
		meetingDescription
	}
	)(MeetingDescription)

export default MeetingDescriptionContainer;	