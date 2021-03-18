import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute'
import Splash from './components/Splash'
import Dashboard from './components/main/Dashboard'
import Login from './components/login/Login.js';
// import './App.scss';
// import Chat from './././components/chatComps/Chat';
// import {connect} from 'react-redux';
// import TriviaHome from './././components/trivia/TriviaHome';

import GeoChallenge from '././components/challenges/GeoChallenge'
import Rewards from '././components/Rewards'
import Shop from '././components/Shop'
import Chat from '././components/chatComps/Chat'
import Profile from '././components/Profile'
import TriviaHome from '././components/trivia/TriviaHome'

function App() {
  return (
    <>
    <Router>
      <div className = "App">
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path = "/login" component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />

          <Route path="/geo-challenge" component = {GeoChallenge} />
          <Route path="/rewards" component = {Rewards} />
          <Route path="/shop" component = {Shop} />
          <Route path="/chat" component = {Chat} />
          <Route path="/profile" component = {Profile} />
          <Route path="/trivia" component = {TriviaHome} />
        </Switch>
      </div>
    </Router>
    </>
  )
}
export default App;

