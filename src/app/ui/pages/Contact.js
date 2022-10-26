import React from "react";
import { Button } from "react-bootstrap";
import { IoCallOutline, IoMailOutline, IoLocationOutline} from "react-icons/io5";


const Contact = () => {
  return (
    <div className="contactUsPage">
      <div className="contactUsFirstDiv">
      <div className="getLatestDiv">
          <h1>Grow your audience right here on Knowledge City</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia
            error facilis, numquam, neque dicta pariatur quos vero in, modi
            commodi praesentium dolore corrupti? Quisquam, itaque.
          </p>
          <Button className="registerBtn" variant="primary" type="link">
            POST ARTICLE
          </Button>
        </div>
      </div>

      <div className="coursesSecondDiv">
        <div className="getSartedContainer">
          <h2 className="h2">GET STARTED</h2>
          <p className="p1">
            Join over 10,000 students online making use of our platform to
            increase their knowledge in different variety of subjects.
          </p>
          <a href="#">
            <h5 className="h5">Learn more</h5>
          </a>
        </div>

        <div className="getSartedContainer">
          <h2 className="h2">PICK COURSE</h2>
          <p className="p1">
            Begin your journey to becoming a professional in your field.
            Register a course today.
          </p>
          <a href="#">
            <h5 className="h5">Pick a course</h5>
          </a>
        </div>

        <div className="getSartedContainer">
          <h2 className="h2">CERTIFICATION</h2>
          <p className="p1">
            With over 280+ certification to choose from, knowledge city gives
            you the platform to achieve your dreams.
          </p>
          <a href="#">
            <h5 className="h5">Get Certified today</h5>
          </a>
        </div>
      </div>
      
      <h1 className="contactUsHeading">We're here to help!</h1>

      <div className="contactUsBodyDiv">
        <div className="contactsDiv">
          <div className="customerSupport">
            <h3 className="customerSupportHeading">Customer Support</h3>
            <div className="customerSupportLocation"> <IoLocationOutline/> <p>Chicago HQ Estica Cop. Macomb, MI 48042</p> </div>
            <div className="customerSupportPhoneNumber"> <IoCallOutline/> <p>(423)733-8222</p></div>
            <div className="customerSupportEmailAddress"> <IoMailOutline/> <p>example@email.com</p></div>
          </div>
        </div>
      </div>

      

      </div>
  );
};


export default Contact;
