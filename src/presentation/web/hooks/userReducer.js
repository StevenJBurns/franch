import React from 'react';

export const userReducer = (state, action) => {
  const [user, setUser] = React.useState({});

  switch (action.type) {
    case 'login':
      return state;
    case 'logout':
      return state;
    default:
      return state;
  }
}
