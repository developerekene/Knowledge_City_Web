import React from "react";
import { Button, Image } from "react-bootstrap";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <div className="contactUsPage">
      <h1 className="contactUsHeading">We're here to help!</h1>

      <div className="contactUsBodyDiv">
        <div className="contactsDiv">
          <div className="customerSupport">
            <h3 className="customerSupportHeading">Customer Support</h3>
            <div className="customerSupportLocation">
              {" "}
              <IoLocationOutline />{" "}
              <p className="customerSupportParagraph">
                Chicago HQ Estica Cop. Macomb, MI 48042
              </p>{" "}
            </div>
            <div className="customerSupportPhoneNumber">
              {" "}
              <IoCallOutline />{" "}
              <p className="customerSupportParagraph">(423)733-8222</p>
            </div>
            <div className="customerSupportEmailAddress">
              {" "}
              <IoMailOutline />{" "}
              <p className="customerSupportParagraph">example@email.com</p>
            </div>
          </div>

          <div className="contactAddress">
            <h3 className="contactAddressHeading">Contact Address</h3>
            <div className="contactAddressLocation">
              {" "}
              <IoLocationOutline />{" "}
              <p className="contactAddressParagraph">
                Chicago HQ Estica Cop. Macomb, MI 48042
              </p>{" "}
            </div>
            <div className="contactAddressPhoneNumber">
              {" "}
              <IoCallOutline />{" "}
              <p className="contactAddressParagraph">+896-789-546</p>
            </div>
            <div className="contactAddressEmailAddress">
              {" "}
              <IoMailOutline />{" "}
              <p className="contactAddressParagraph">example@email.com</p>
            </div>
          </div>

          <div className="mainOffice">
            <h3 className="mainOfficeHeading">Main Office Address</h3>
            <div className="mainOfficeLocation">
              {" "}
              <IoLocationOutline />{" "}
              <p className="mainOfficeParagraph">
                2002 Horton Ford Rd, TN, 37731
              </p>{" "}
            </div>
            <div className="mainOfficePhoneNumber">
              {" "}
              <IoCallOutline />{" "}
              <p className="mainOfficeParagraph">(678)324-1251</p>
            </div>
            <div className="mainOfficeEmailAddress">
              {" "}
              <IoMailOutline />{" "}
              <p className="mainOfficeParagraph">example@email.com</p>
            </div>
          </div>
        </div>

        <div className="contactsLastDiv">
          <div className="contactsLastDivLeft">
            <Image
              className="letsTalkImage"
              src={require("../../images/jpeg/Message.jpg")}
            />
            <div className="followAndMediaHandles">
              <h3>Follow us on:</h3>
              <Image
                className="facebookLogo"
                src={require("../../images/png/f-logo.png")}
              />

              <Image
                className="instagramLogo"
                src={require("../../images/png/i-logo.png")}
              />

              <Image
                className="TwitterLogo"
                src={require("../../images/png/t-logo.png")}
              />

              <Image
                className="linkedinLogo"
                src={require("../../images/jpeg/L-Logo.jpg")}
              />

              <Image
                className="pinterestLogo"
                src={require("../../images/png/P-Logo.png")}
              />
            </div>
          </div>

          <div className="letsTalk">
            <h2 className="letsTalkHeading">Let's talk</h2>
            <h5 className="letsTalkParagraph">
              To request a quote or want to meet up for coffee, contact us
              directly or fill out the form and we will get back to you promptly
            </h5>
            <h5>Your name*</h5>
            <Form>
              <Form.Control
                className="letsTalkFormControl"
                type="text"
                placeholder=""
              />
            </Form>

            <h5>Email address*</h5>
            <Form>
              <Form.Control
                className="letsTalkFormControl"
                type="text"
                placeholder=""
              />
            </Form>

            <h5>Message*</h5>
            <Form>
              <Form.Control
                className="letsTalkMessageFormControl"
                type="text"
                placeholder=""
              />
            </Form>

            <Button className="sendMessage">Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
