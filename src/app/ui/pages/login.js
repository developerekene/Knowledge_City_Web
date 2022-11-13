import React from "react";
import { Button, Image } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="loginPage">
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
      <div className="loginRightDiv">
        <h1 className="loginRightDivHeading">Login into Knowledge City!</h1>
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
            placeholder="Password"
          />
        </Form>

        <h5 className="yourPasswordMust">
          Your password must be 8 characters at least
        </h5>

        <div className="loginCheckboxAndForgotPassword">
          <div className="checkboxRememberMe">
            <input type="checkbox" /> Remember me
          </div>

          <div>
            <a href="#">
              <p>Forgot password?</p>
            </a>
          </div>
        </div>

        <Button className="loginLoginBtn">Login</Button>
        <h5 className="textOr">Or</h5>

        <div className="loginWithBtnDiv">
          <Button className="loginWithGoogleBtn">Log in with Google</Button>
          <Button className="loginWithFacebookBtn">Log in with Facebook</Button>
        </div>
        <p className="dontHaveAccount">
          Don't have an account? <a href="#">Signup here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
