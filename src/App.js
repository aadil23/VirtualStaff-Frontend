import React, { useEffect } from 'react';
import logo from './images/logo.png';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginStatus } from './redux/actions/action';

const App = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state);
  console.log(loginState);
  useEffect(() => {
    dispatch(setLoginStatus(true));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};
export default App;
