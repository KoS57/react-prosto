import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'



const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        <Route path='/dialogs' render={() => <Dialogs messageData={props.state.profilePage.messages}
          dialogData={props.state.profilePage.dialogs}
          newMessageText={props.state.profilePage.newMessageText}
          dispatch={props.dispatch}
          dispatch={props.dispatch} />} />

        <Route path='/profile' render={() => <Profile store={props.store} />} />
        
          {/* artData={props.state.arts.posts}
          dispatch={props.dispatch}
          dispatch={props.dispatch}
          newPostText={props.state.arts.newPostText} */}
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />

      </div>
    </div>
  );
}
export default App;
