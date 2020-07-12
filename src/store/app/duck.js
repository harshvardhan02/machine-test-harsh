// import { fromPromise } from 'rxjs/observable/fromPromise'
// import { of } from 'rxjs'
// import { mergeMap, flatMap, catchError } from 'rxjs/operators'
import { Record } from 'immutable'
import { assign } from 'lodash'

// import { ofType, combineEpics } from 'redux-observable'

import { INIT, LOADING, SUCCESS, ERROR } from '../../constants/phase'

// import * as api from './api'

import data from '../../data/data.json';

/***********************************
 * Action Types
 **********************************/

export const GET_USERLIST = 'machineTest/user/GET_POST'
export const GET_USERLIST_SUCCESS = 'machineTest/user/GET_POST_SUCCESS'
export const GET_USERLIST_ERROR = 'machineTest/user/GET_POST_ERROR'

export const MEETINGLIST = 'machineTest/user/MEETINGLIST'

export const MEETING_DESCRIPTION = 'machineTest/user/MEETING_DESCRIPTION'


/***********************************
 * Initial State
 ***********/

 const InitialStateInterface = {
 	phase: INIT,
 	error: null,
 	isSubmitting: false,
 	message: null,
  userPhase: INIT,
  userList: data,
  meetingList: [],
  meetingPhase: INIT,
  meetingDescription: [] 
 }

class InitialState extends Record(InitialStateInterface) {
  constructor(desiredValues) {   
    super(assign(desiredValues))
  }
}

/***********************************
 * Reducer
 ***********/

 export default function (state = new InitialState(), action = {}) {
 	switch (action.type) {    

    case GET_USERLIST: {
      return state
        .set('userPhase', LOADING)
        .set('error', null)
        .set('isSubmitting', true)
    }

    case GET_USERLIST_SUCCESS: {
      const { payload } = action
      console.log(payload)
      if(payload){
        return state
          .set('userPhase', SUCCESS)
          .set('userList', data)
          .set('message', payload.message)
      }
      break;
    }

    case GET_USERLIST_ERROR: {
      const { payload } = action
      return state
        .set('userPhase', ERROR)
        .set('error', payload.message) 
    }

    case MEETINGLIST: {
      const { payload } = action
      return state
        .set('meetingPhase', SUCCESS)
        .set('error', null)
        .set('isSubmitting', true)
        .set('meetingList', payload)
    }

    case MEETING_DESCRIPTION: {
      const { payload } = action
      return state
        .set('meetingPhase', SUCCESS)
        .set('error', null)
        .set('isSubmitting', true)
        .set('meetingDescription', payload)
    }
    
 		default: {
      		return state
    	}
 	}
 }

 /***********************************
 * Action Creators
 ***********/ 
export const getUserList = credentials => {
  return {
    type: GET_USERLIST,
    payload: credentials
  }
}

export const meetingList = credentials => {
  console.log(credentials)
  return {
    type: MEETINGLIST,
    payload: credentials
  }
}

export const meetingDescription = credentials => {
  return {
    type: MEETING_DESCRIPTION,
    payload: credentials
  }
}

/***********************************
 * Epics
 ***********************************/
// const getUserListEpic = action$ => 
//   action$.pipe(
//   ofType(GET_USERLIST),
//   mergeMap(action => {
//     return fromPromise(api.getUserList(action.payload)).pipe(
//       flatMap(payload => [{
//         type: GET_USERLIST_SUCCESS,
//         payload
//       }
//     ]),
//     catchError(error =>
//         of({
//           type: GET_USERLIST_ERROR,
//           payload: { error }
//         })
//       )
//     )
//   })
// )

// const meetingListEpic = action$ =>
//   action$.pipe(
//   ofType(MEETINGLIST),
//   mergeMap(action => {
//     return fromPromise(api.meetingList(action.payload)).pipe(
//       flatMap(payload => [{
//         type: MEETINGLIST_SUCCESS,
//         payload
//       }
//     ]),
//     catchError(error =>
//         of({
//           type: MEETINGLIST_ERROR,
//           payload: { error }
//         })
//       )
//     )
//   })
// )
  

// export const userEpic = combineEpics(
//   getUserListEpic,
//   meetingListEpic
// )