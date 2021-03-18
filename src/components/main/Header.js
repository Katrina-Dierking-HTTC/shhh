import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// import GeoChallenge from '../challenges/GeoChallenge'
// import Rewards from '../Rewards'
// import Store from '../Store'
// import Chat from '../chatComps/Chat'
// import Profile from '../Profile'
// import TriviaHome from '../trivia/TriviaHome'

function Header() {
    return (
        <>
        <div>
            <nav className = "dashboard-links">
                <ul>
                    <Link to= "/logout">Log Out</Link>
                    <br />
                    <Link to= "/geo-challenge">Challenges</Link>
                    <br />
                    <Link to= "/rewards">Rewards</Link>
                    <br />
                    <Link to= "/shop">Shop</Link>
                    <br />
                    <Link to= "/chat">Groups</Link>
                    <br />
                    <Link to= "/profile">Profile</Link>
                    <br />
                    <Link to= "/trivia">Trivia</Link>
                </ul>
            </nav>
        </div>

        {/* <Router> */}
            {/* <Switch> */}
                {/* <Route path="/geo-challenge" component = {GeoChallenge} /> */}
                {/* <Route path="/rewards" component = {Rewards} /> */}
                {/* <Route path="/store" component = {Store} /> */}
                {/* <Route path="/chat" component = {Chat} /> */}
                {/* <Route path="/profile" component = {Profile} /> */}
                {/* <Route path="/trivia" component = {TriviaHome} /> */}
            {/* </Switch> */}
        {/* </Router> */}
        </>
    )
}

export default Header
