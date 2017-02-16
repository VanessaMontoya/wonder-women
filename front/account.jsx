import React from 'react';
import $ from 'jquery';
import CreateEvent from './createEvent';
import {browserHistory} from 'react-router';

const Account = React.createClass({
  getInitialState: function () {
    return { createdEvents: null, firstName: '', lastName: '', email: '', bookmarks: null };
  },
  componentDidMount: function () {
    $.ajax({
      url: '/api/user/id',
      type: 'GET',
      data: this.state,
    })
    .then((user) => {
      this.setState({ firstName: user.firstName, lastName: user.lastName, email: user.email })

      $.ajax({
        url: '/api/event',
        type: 'GET',
        data: this.state,
      })
      .then((events) => {
        console.log(events);
        this.setState({ createdEvents: events });
      })
      .then((bookmarks) => {
        console.log(bookmarks);
        this.setState({ bookmarks: bookmarks });
      })
    })
  },
  userLogout: function(event){
    event.preventDefault()
    $.ajax({
        url: '/logout',
        type: 'GET'
    })
    .done(() => {
      console.log("You have logged out.");
      browserHistory.push('/')
    })
  },
  render: function () {
    return (
      <div>
        <h2 className="title">Welcome back, {this.state.firstName ? this.state.firstName : null}</h2>


        <h3>Your Account Info:</h3>
        <br /><br />

        <p>Name: {this.state.firstName}{this.state.lastName}</p>
        <p>Email: {this.state.email}</p>

        <button onClick={this.userLogout}>Logout</button>

        <br /><br />

        <h3>Your Bookmarks:</h3>
        <ul>
          {!this.state.bookmarks ? null : this.state.bookmarks.map((val, idx) => {

            let eventTitle = val.title

            return (
              <li key={idx}>{eventTitle}</li>
            )
          })}
        </ul>

        <h3>Your Created Events:</h3>
        <br /><br />

        <a href="createevent"><button className="button">
         Create An Event</button>
        </a>

      </div>
    );
  }
});

 export default Account;
