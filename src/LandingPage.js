import React from 'react';
import auth from './Auth';

const LandingPage = (props) => {
  return (
    <div>
      <h3>Landing Page</h3>
      <button onClick={() => {
        auth.login(() => {
          props.history.push("/app");
        });
      }}>Login</button>
    </div>
  )
}

export default LandingPage;