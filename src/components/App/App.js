import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// var monk = require('monk');
// var db = monk('192.168.4.162:27017/pi1');

// app.use(function(req,res,next){
//   req.db = db;
//   next();
// });

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import ScanningPage from '../ScanningPage/ScanningPage';
import SuggestedPage from '../SuggestedPage/SuggestedPage';
import AdminPage from '../AdminPage/AdminPage';
import StatsPage from '../StatsPage/StatsPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import UserPage from '../UserPage/UserPage';
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/scan" component={ScanningPage} />
            <Route exact path="/suggested" component={SuggestedPage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/stats" component={StatsPage} />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/home" component={UserPage} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            {/* <ProtectedRoute exact path="/info" component={InfoPage} /> */}
            {/* If none of the other routes matched, we will show a 404. */}
            {/* <ProtectedRoute exact path="/start" component={StartBrewingPage} /> */}
            {/* <ProtectedRoute exact path="/start" component={StartBrewingPage} />
            This route is for the start page of the application */}
            {/* <ProtectedRoute exact path="/create" component={CreateBatchPage} /> */}
            {/* This route is for the create page of the application*/}
            {/* <ProtectedRoute exact path="/edit/:id" component={EditBatchPage} /> */}
            {/* This route is for the edit page of the application*/}
            {/* <ProtectedRoute exact path="/logbook" component={LogBookPage} /> */}
            {/* This route is for the view all logs page of the application*/}
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );}
}



export default connect()(App);
