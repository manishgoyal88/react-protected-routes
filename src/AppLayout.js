import React from 'react';
import auth from './Auth';

const AppLayout = (props) => {
  return (
    <div>
      <p>App Layout</p>
      <button onClick={() => {
        auth.logout(() => {
          props.history.push("/");
        });
      }}>Logout</button>
    </div>
  )
}

export default AppLayout;

