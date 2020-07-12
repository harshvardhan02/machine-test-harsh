import { connect } from 'react-redux';
import MeetingSent from './component';
import { meetingList } from '../../store/app/duck';

const MeetingSentContainer = connect(
	// map state to props
	state => ({
		
	}),
	// map dispatch to props
	{
		meetingList
	}
	)(MeetingSent)

export default MeetingSentContainer;	