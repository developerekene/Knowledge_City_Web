import React from "react";

// importing from bootstrap
import { Button, Image } from "react-bootstrap";


const GetStarted = () => {
  return (
    <div className="getStartedPage">
      <div className="getstartedFirstDiv">
        <div className="getLatestDiv">
          <h1>Get Started With Knowledge City</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia
            error facilis, numquam, neque dicta pariatur quos vero in, modi
            commodi praesentium dolore corrupti? Quisquam, itaque.
          </p>
          <Button className="registerBtn" variant="primary" type="link">
            GET STARTED
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

      <h1 className="getStartedHeading">HOW TO START WITH KNOWLEDGE CITY?</h1>

      <div className="getStartedBodyDiv">
        <div className="bodyDivOne">
          <div className="loginImageDiv">
            <Image
              className="loginImage"
              src={require("../../images/jpeg/login.jpg")}
            />
          </div>
          <div>
            <h2>CREATE AN ACCOUNT OR LOG IN WITH OLD ACCOUNT</h2>
            <p className="createAccountParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate dolore rerum corrupti velit alias. Voluptatum
              dignissimos facilis laborum recusandae ut veniam, ratione optio
              distinctio beatae repellat obcaecati iure eligendi quasi rerum
              quisquam ipsa, voluptatem numquam sequi hic assumenda, officia
              sunt. Similique reprehenderit ducimus ab harum excepturi, quia
              debitis sint tempora illo neque. Quisquam enim facere explicabo
              architecto neque maxime?
            </p>
            <Button className="createAccountBtn" variant="primary" type="link">
              CREATE ACCOUNT
            </Button>
          </div>
        </div>

        <div className="bodyDivTwo">
          <div className="chooseCoursesDiv">
            <h2>CHOOSE COURSE AND START LEARNING</h2>
            <p className="createAccountParagraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              explicabo quisquam provident consectetur maxime beatae est quasi
              voluptatum consequuntur natus et rem hic soluta nam doloremque quo
              veniam eos, reiciendis ipsa at rerum dolorem nesciunt sunt qui!
              Perferendis, ducimus? Perferendis enim recusandae officia
              nesciunt, unde voluptatem fuga. Odit, voluptate! In nihil quasi
              esse labore excepturi?
            </p>
            <Button className="createAccountBtn" variant="primary" type="link">
              COURSES PAGE
            </Button>
          </div>

          <div className="chooseCoursesImageDiv">
            <Image
              className="chooseCoursesImage"
              src={require("../../images/jpeg/start-learning.jpg")}
            />
          </div>
        </div>

        <div className="bodyDivThree">
          <div className="certificateImageDiv">
            <Image
              className="certificateImage"
              src={require("../../images/jpeg/certificate.jpg")}
            />
          </div>
          <div>
            <h2>WRITE EXAM AND GET CERTIFIED</h2>
            <p className="createAccountParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate dolore rerum corrupti velit alias. Voluptatum
              dignissimos facilis laborum recusandae ut veniam, ratione optio
              distinctio beatae repellat obcaecati iure eligendi quasi rerum
              quisquam ipsa, voluptatem numquam sequi hic assumenda, officia
              sunt. Similique reprehenderit ducimus ab harum excepturi, quia
              debitis sint tempora illo neque. Quisquam enim facere explicabo
              architecto neque maxime?
            </p>
            <Button className="getCertifiedBtn" variant="primary" type="link">
              GET CERTIFIED
            </Button>
          </div>
        </div>
        <h1 className="knowledgeCityAfricans">Knowledge City - Africans largest e - learning platform</h1>
      </div>
    </div>
  );
};

export default GetStarted;
