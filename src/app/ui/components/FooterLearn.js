import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { COLORS } from "../../utills/Tools";
import { SIZES } from "../../utills/Tools";

const FooterLearn = () => {
  return (
    <div className="footer">
      <div className="learnDiv">
        <h3 className="learnParagraph">
          Learn anything, from anywhere, at anytime.
        </h3>
      </div>

      <div className="columnsContainer">
        <div className="firstColumn">
          <h4 className="footerHeadings">TOP COURSES</h4>
          <div className="columnParagraph">
            Business Computer Science Language Arts / Humanity Communication
          </div>
        </div>

        <div className="secondColumn">
          <h4 className="footerHeadings">ABOUT KNOWLEDGE CITY</h4>
          <div className="columnParagraph">
            About Us Knowledge City For Student Knowledge City For Facilitators
            Terms And Conditions Contacts FAQ's
          </div>
        </div>

        <div className="thirdColumn">
          <h4 className="footerHeadings">BECOME A PART OF OUR COMMUNITY</h4>
          <div className="columnParagraph">
            About Us Knowledge City For Student Knowledge City For Facilitators
            Terms And Conditions Contacts FAQ's
          </div>
        </div>

        <div className="fourthColumn">
          <h4 className="footerHeadings">SIGN UP TO OUR NEWSLETTER</h4>
          <p className="lastParagraph">
            Get the first looks at new drops, like courses, books, sales and
            offers
          </p>
          <div>
            <Form>
              <Form.Control
                className="formControl"
                type="text"
                placeholder=""
              />
            </Form>
          </div>

          <Button className="subscribeBtn" variant="primary" type="link">
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterLearn;
