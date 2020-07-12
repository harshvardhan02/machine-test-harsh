import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import UserListContainer from './views/UserList/container';
import MeetingSentContainer from './views/MeetingSent/container';
import MeetingDescriptionContainer from './views/MeetingDescription/container';
import MyBusySlotsContainer from './views/MyBusySlots/container';
import MeetingSentListContainer from './views/MeetingSentList/container';
import HeaderContainer from './views/Header/container';

class Root extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
        <HeaderContainer/>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={UserListContainer} />
                <Route exact path={`${process.env.PUBLIC_URL}/meeting-sent/:name/:designation`} component={MeetingSentContainer} />
                <Route exact path={`${process.env.PUBLIC_URL}/meeting-description`} component={MeetingDescriptionContainer} />
                <Route exact path={`${process.env.PUBLIC_URL}/mybusyslots`} component={MyBusySlotsContainer} />
                <Route exact path={`${process.env.PUBLIC_URL}/meetingsentlist`} component={MeetingSentListContainer} />
            </Switch>
        </BrowserRouter>  
      </Provider>
    )
  }
}

export default Root;
