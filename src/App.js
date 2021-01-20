import React, {Component} from 'react'
import './App.scss'
import Header from './my_components/Header/Header.js'
import Nav from './my_components/Nav/Nav.js'
import Footer from './my_components/Footer/Footer.js'
import Profile from './my_components/Profile/Profile.js'
import Dialogs from "./my_components/Dialogs/Dialogs";
import News from "./my_components/News/News";
import Music from "./my_components/Music/Music";
import Settings from './my_components/Settings/Settings'

import {BrowserRouter, Route} from "react-router-dom";
import store from "./Redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Nav/>
                <div className='app_wrapper_content'>
                    <Route exact path='/profile' render={() => {
                        return <Profile
                                    postsData={props.state.profilePage.postsData}
                                    newPostText={props.state.profilePage.newPostText}
                                    dispatch={props.dispatch}
                                />
                    }}/>
                    <Route exact path='/dialogs' render={() => {
                        return <Dialogs
                            dialogsData={props.state.messagesPage.dialogsData}
                            messagesData={props.state.messagesPage.messagesData}
                        />
                    }}/>
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/music' component={Music}/>
                    <Route exact path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;