import React from 'react'

// importing components from pages
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import ForgotPassword from './pages/ForgotPassword'
import GetStarted from './pages/GetStarted'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Companies from './pages/Companies'
import Documentation from './pages/Documentation'
import Instructors from './pages/Instructors'
import InterViews from './pages/InterViews'
import Membership from  './pages/Membership'
import OnlineTest from  './pages/OnlineTest'
import PrivacyPolicy from  './pages/PrivacyPolicy'
import Profile from  './pages/Profile'
import Schools from  './pages/Schools'
import Settings from  './pages/Settings'
import Support from  './pages/Support'
import Universities from  './pages/Universities'
import Organisations from './pages/Organisations'

// importing components
import NavBar from './components/NavBarMain'
import Footer from './components/FooterMain'


const MainComponent = () => {
  // creating component variable
  let component;
  // creating nav variable
  let nav

  // switch statement to call components
  switch(window.location.pathname) {
    case "/": component = <Home/>;
    break;

    case "/books": component = <Books/>
    break;

    case "/about": component = <About/>
    break;

    case "/articles": component = <Articles/>
    break;

    case "/contact": component = <Contact/>
    break;

    case "/courses": component = <Courses/>
    break;

    case "/forgotpassword": component = <ForgotPassword/>
    break;
    case "/getstarted": component = <GetStarted/>
    break;

    case "/login": component = <Login/>
    break;

    case "/signup": component = <SignUp/>
    break;

    case "/companies": component = <Companies />
    break;

    case "/docs": component = <Documentation />
    break;

    case "/instruct": component = <Instructors />
    break;

    case "/interviews": component = <InterViews />
    break;

    case "/membership": component = <Membership />
    break;

    case "/onlinetest": component = <OnlineTest />
    break;

    case "/privacy": component = <PrivacyPolicy />
    break;

    case "/profile": component = <Profile />
    break;

    case "/schools": component = <Schools />
    break;

    case "/settings": component = <Settings />
    break;

    case "/support": component = <Support />
    break;

    case "/uni": component = <Universities />
    break;

    case "/org": component = <Organisations />
    break;
    default:
      break;

    case "/settings": component = <Settings/>
    break;
    
    case "/membership": component = <Membership/>
    break;

    case "/profile": component = <Profile/>
    break;

    case "/instructors": component = <Instructors/>
    break;
  }
  return (
    <>
     <NavBar/>
     {component}
     <Footer/>
   
    </>
  )
}

export default MainComponent
