import React, { useEffect } from 'react';
import logo from './images/logo.png';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginStatus } from './redux/actions/action';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage/homePage';
import EnterPrice from './components/enterprise/enterPrice';
const App = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state);
  console.log(loginState);
  useEffect(() => {
    dispatch(setLoginStatus(true));
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/enterprice" component={EnterPrice} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
