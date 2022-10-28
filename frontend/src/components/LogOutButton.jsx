import React from 'react';
import useAuth from '../hooks/useAuth';
import { Button } from 'react-bootstrap';

const LogOutButton = () => {
  const auth = useAuth();

  return auth.loggedIn ? <Button onClick={auth.logOut} className="logOut-btn" variant="secondary-outline">LogOut</Button> : null;
};

export default LogOutButton;