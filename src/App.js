import React, { useEffect } from 'react';
import logo from './images/logo.png';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginStatus } from './redux/actions/action';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage/homePage';
import EnterPrice from './components/enterprise/enterPrice';
import AboutUs from './components/aboutus';
import ContactUs from './components/contactus';
import TermsAndUse from './components/termsanduse';
import PrivacyPolicy from './components/privacypolicy';
import Login from './components/authenticaton/login';
import SignUp from './components/authenticaton/signup';
import EmployerSignUp from './components/employer/signup';
import JobSeekerSignUp from './components/jobseeker/signup';
import HowitWorksEmp from './components/employer/howitworks';
import HowitWorksSeeker from './components/jobseeker/howitworks';
const App = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state);
  console.log(loginState);
  useEffect(() => {
    dispatch(setLoginStatus(true));
  }, []);
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/enterprice" component={EnterPrice} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/termsanduse" component={TermsAndUse} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signupemployer" component={EmployerSignUp} />
          <Route path="/signupjobseeker" component={JobSeekerSignUp} />
          <Route path="/howitworksemployer" component={HowitWorksEmp} />
          <Route path="/howitworksjobseeker" component={HowitWorksSeeker} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
