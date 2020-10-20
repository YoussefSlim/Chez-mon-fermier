import React from 'react';

import './style.scss';

const ToLogIn = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div className="ui attached message">
        <div className="header">Welcome to our site!</div>
        <p>Fill out the form below to sign-up for a new account</p>
      </div>
      <form className="ui form attached fluid segment">
        <div className="two fields">
          <div className="field">
            <label>First Name</label>
            <input placeholder="First Name" type="text" />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input placeholder="Last Name" type="text" />
          </div>
        </div>
        <div className="field">
          <label>Username</label>
          <input placeholder="Username" type="text" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="inline field">
          <div className="ui checkbox">
            <input type="checkbox" id="terms" />
            <label for="terms">I agree to the terms and conditions</label>
          </div>
        </div>
        <div className="ui blue submit button">Submit</div>
      </form>
      <div className="ui bottom attached warning message">
        <i className="icon help"></i>
        Already signed up? <a href="#">Login here</a> instead.
      </div>
    </>
  );
};
export default ToLogIn;
