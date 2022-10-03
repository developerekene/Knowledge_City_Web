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

// importing components
import NavBar from './components/NavBarMain'
import Footer from './components/FooterMain'


const MainComponent = () => {
  // creating component variable
  let component;

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
    default:
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
