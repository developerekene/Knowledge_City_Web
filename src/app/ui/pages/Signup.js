import React from 'react';
import { Button, Image } from "react-bootstrap";
import { Form } from "react-bootstrap";

const SignUp = () => {
  return (
    <div className="signupPage">
<div className="loginLeftDiv">
        <h1 className="loginLeftDivHeading">
          Welcome to our largest Community
        </h1>
        <h4 className="loginLeftDivParagraph">
          Let's learn something new today
        </h4>

        <Image
          className="loginSignupImage"
          src={require("../../images/jpeg/Digital-learners.jpg")}
        />

        <div className="images4KPlusStudents">
          <div className="joinedStudentsImagesDiv">
            <Image
              className="joinedStudents"
              src={require("../../images/jpeg/istockphoto6.jpeg")}
            />

            <Image
              className="joinedStudents"
              src={require("../../images/jpeg/istockphoto4.jpeg")}
            />

            <Image
              className="joinedStudents"
              src={require("../../images/jpeg/istockphoto1.jpeg")}
            />

            <Image
              className="joinedStudents"
              src={require("../../images/jpeg/istockphoto6.jpeg")}
            />
          </div>
          <h4>4k+ Students joined us, now it's your turn</h4>
        </div>
      </div>

      <div className='loginRightDiv'>
      <h1 className="loginRightDivHeading">Sign up for your Account!</h1>
        <h4 className="loginRightDivParagraph">
          Nice to see you! Please log in with your Account
        </h4>

        <h5 className="formLoginEmailAddressHeading">Email Address*</h5>
        <Form>
          <Form.Control
            className="loginEmailAddressFormControl"
            type="text"
            placeholder=" E-mail"
          />
        </Form>

        <h5 className="formLoginPasswordHeading">Password*</h5>
        <Form>
          <Form.Control
            className="loginPasswordFormControl"
            type="text"
            placeholder="********"
          />
        </Form>

        <h5 className="formSignupConfirmPasswordHeading">Confirm Password*</h5>
        <Form>
          <Form.Control
            className="signupConfirmPasswordFormControl"
            type="text"
            placeholder="********"
          />
        </Form>

        <div className='checkboxTermsOfSERvice'>
        <input type="checkbox" /> By signing up, you agree to the <a href="#">terms of service</a>
        </div>

        <Button className="loginLoginBtn">Sign Up</Button>
        <h5 className="textOr">Or</h5>

        <div className="loginWithBtnDiv">
          <Button className="loginWithGoogleBtn">Signup with Google</Button>
          <Button className="loginWithFacebookBtn">Signup with Facebook</Button>
        </div>
      </div>
    </div>
    )
}

export default SignUp
