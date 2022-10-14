import React from "react";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Books = () => {
  return (
    <div className="booksPage">
      <div className="booksFirstDiv">
        <div className="getLatestDiv">
          <h1>Get latest books on knowledge city for free and paid</h1>
          <p>
            Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Eveniet
            obcaecati ea ipsam, ad? Laboriosam, necessitatibus. Ab, consequatur!
          </p>
          <Button className="registerBtn" variant="primary" type="link">
            REGISTER
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
          <h5 className="h5">Learn more</h5>
        </div>

        <div className="getSartedContainer">
          <h2 className="h2">PICK COURSE</h2>
          <p className="p1">
            Begin your journey to becoming a professional in your field.
            Register a course today.
          </p>
          <h5 className="h5">Pick a course</h5>
        </div>

        <div className="getSartedContainer">
          <h2 className="h2">CERTIFICATION</h2>
          <p className="p1">
            With over 280+ certification to choose from, knowledge city gives
            you the platform to achieve your dreams.
          </p>
          <h5 className="h5">Get Certified today</h5>
        </div>
      </div>

      <div className="recentBooksDiv">
        <h2 className="recentBooks">Recent Books</h2>
        <p className="recentParagraph">
          LOREM IPSUM DOLOR, SIT AMET CONSECTETUR.
        </p>
      </div>

      <div className="imagesDiv">
        <a href="#">
          <div className="imageDivOne">
            <Image
              className="businessBookLeft"
              src={require("../../images/jpeg/Business-proposal.jpg")}
            />
            <p className="makeAwesomeLeft">
              Make an awesome art portfolio for College or University
            </p>
          </div>
        </a>

        <a href="#">
          <div>
            <Image
              className="babyStepsMid"
              src={require("../../images/jpeg/the_baby_step_f_content_writing.jpg")}
            />
            <p className="makeAwesomeMid">
              Make an awesome art portfolio for College or University
            </p>
          </div>
        </a>

        <a href="#">
          <div>
            <Image
              className="businessBookRight"
              src={require("../../images/jpeg/Business-proposal.jpg")}
            />
            <p className="makeAwesomeRight">
              Make an awesome art portfolio for College or University
            </p>
          </div>
        </a>
      </div>

      <div className="imagesDiv">
        <a href="#">
          <div className="imageDivOne">
            <Image
              src={require("../../images/jpeg/the_baby_step_f_content_writing.jpg")}
            />
            <p className="makeAwesomeLeft">
              Make an awesome art portfolio for College or University
            </p>
          </div>
        </a>

        <a href="#">
          <div>
            <Image
              className="businessBookMid"
              src={require("../../images/jpeg/Business-proposal.jpg")}
            />
            <p className="makeAwesomeMid">
              Make an awesome art portfolio for College or University
            </p>
          </div>
        </a>

        <a href="#">
          <div>
            <Image
              src={require("../../images/jpeg/the_baby_step_f_content_writing.jpg")}
            />
            <p className="makeAwesomeRight">
              Make an awesome art portfolio for College or University
            </p>
          </div>
        </a>
      </div>

      <div className="newBooksDiv">
        <h2 className="newBooks">New Books</h2>
        <p className="newParagraph">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING.
        </p>
      </div>

      <div className="imagesDivThree">
        <a href="#">
          <div className="imageDivOne">
            <Image
              className="businessBookLeft"
              src={require("../../images/jpeg/Business-proposal.jpg")}
            />
          </div>
        </a>

        <a href="#">
          <div>
            <Image
              className="babyStepsMid"
              src={require("../../images/jpeg/the_baby_step_f_content_writing.jpg")}
            />
          </div>
        </a>

        <a href="#">
          <div>
            <Image
              className="businessBookRight"
              src={require("../../images/jpeg/Business-proposal.jpg")}
            />
          </div>
        </a>
      </div>

      {/* NEW BOOKS DETAILS */}

      <div className="newBooksDetails">
        <div>
          <p className="newbooksDate">20 January, 2020</p>
          <p className="newbooksFirstParagraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <p className="newbooksSecondParagraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            libero quas ipsum laudantium nihil! Quaerat.
          </p>

          <Button className="readMoreBtn" variant="primary" type="link">
            Read More
          </Button>
        </div>

        <div>
          <p className="newbooksDate">20 January, 2020</p>
          <p className="newbooksFirstParagraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <p className="newbooksSecondParagraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            libero quas ipsum laudantium nihil! Quaerat.
          </p>

          <Button className="readMoreBtn" variant="primary" type="link">
            Read More
          </Button>
        </div>

        <div>
          <p className="newbooksDate">20 January, 2020</p>
          <p className="newbooksFirstParagraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <p className="newbooksSecondParagraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            libero quas ipsum laudantium nihil! Quaerat.
          </p>

          <Button className="readMoreBtn" variant="primary" type="link">
            Read More
          </Button>
        </div>
      </div>

      <div className="imagesDivFour">
        <a href="#">
          <div>
            <Image
              src={require("../../images/jpeg/the_baby_step_f_content_writing.jpg")}
            />
          </div>
        </a>

        <a href="#">
          <div>
            <Image
              className="businessBookMid"
              src={require("../../images/jpeg/Business-proposal.jpg")}
            />
          </div>
        </a>

        <a href="#">
          <div>
            <Image
              src={require("../../images/jpeg/the_baby_step_f_content_writing.jpg")}
            />
          </div>
        </a>
      </div>

      <div className="newBooksDetailsTwo">
        <div>
          <p className="newbooksDate">20 January, 2020</p>
          <p className="newbooksFirstParagraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <p className="newbooksSecondParagraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            libero quas ipsum laudantium nihil! Quaerat.
          </p>

          <Button className="readMoreBtn" variant="primary" type="link">
            Read More
          </Button>
        </div>

        <div>
          <p className="newbooksDate">20 January, 2020</p>
          <p className="newbooksFirstParagraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <p className="newbooksSecondParagraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            libero quas ipsum laudantium nihil! Quaerat.
          </p>

          <Button className="readMoreBtn" variant="primary" type="link">
            Read More
          </Button>
        </div>

        <div>
          <p className="newbooksDate">20 January, 2020</p>
          <p className="newbooksFirstParagraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <p className="newbooksSecondParagraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            libero quas ipsum laudantium nihil! Quaerat.
          </p>

          <Button className="readMoreBtn" variant="primary" type="link">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Books;
