import React from "react";
import { Button, Image } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Instructors = () => {
  return (
    <div className="instructorsPage">
      <div className="instructorsFirstDiv">
        <div className="getLatestDiv">
          <h1>Apply as Instructor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia
            error facilis, numquam, neque dicta pariatur quos vero in, modi
            commodi praesentium dolore corrupti? Quisquam, itaque.
          </p>
          <Button className="registerBtn" variant="primary" type="link">
            Start Teaching Today
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

      <div className="instructorsBodyDiv">
        <h1 className="instructorsBodyHeading">
          You can be your guiding star with our help
        </h1>
        <p className="instructorsBodyHeadingParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia
          error facilis, numquam, neque dicta pariatur quos vero in, modi
          commodi praesentium dolore corrupti? Quisquam, itaque.
        </p>

        <div className="instructorsBodyDivOne">
          <div className="createAccountColumnDiv">
            <Image
              className="createAccountImage"
              src={require("../../images/jpeg/potential.jpeg")}
            />
            <h3 className="createAccountHeading">Create Account</h3>
            <p>
              Satisfied conveying a dependent contented he gentleman agreeable
              do be. Delivered dejection necessary objection
            </p>
          </div>

          <div className="addYourCourseColumnDiv">
            <Image
              className="addYourCourseImage"
              src={require("../../images/jpeg/Man-on-computer.jpg")}
            />
            <h3 className="addYourCourseHeading">Add Your Course</h3>
            <p>
              Satisfied conveying a dependent contented he gentleman agreeable
              do be. Delivered dejection necessary objection
            </p>
          </div>

          <div className="startEarningMoneyColumnDiv">
            <Image
              className="startEarningMoneyImage"
              src={require("../../images/jpeg/Start-earning-tutor.jpg")}
            />
            <h3 className="startEarningMoneyHeading">Start Earning Money</h3>
            <p>
              Satisfied conveying a dependent contented he gentleman agreeable
              do be. Delivered dejection necessary objection
            </p>
          </div>
        </div>

        <div className="instructorsBodyDivTwo">
          <div className="theFourColumns">
            <h1 className="theFourColumnsNumbers">89K</h1>
            <p className="theFourColumnsParagraphs">Total Students</p>
          </div>

          <div className="theFourColumns">
            <h1 className="theFourColumnsNumbers">25K</h1>
            <p className="theFourColumnsParagraphs">Total Instructorss</p>
          </div>

          <div className="theFourColumns">
            <h1 className="theFourColumnsNumbers">180K</h1>
            <p className="theFourColumnsParagraphs">Total Courses</p>
          </div>

          <div className="theFourColumns">
            <h1 className="theFourColumnsNumbers">20+</h1>
            <p className="theFourColumnsParagraphs">Languages</p>
          </div>
        </div>

        <div className="instructorsBodyDivThree">
          <div className="fillForm">
            <h2 className="pleaseFillFormHeading">Please fill this Form</h2>

            <div className="nameEmailHeading">
              <h5 className="formNameHeading">Name*</h5>
              <h5>Email*</h5>
            </div>

            <div className="nameEmailFormControlDiv">
              <Form>
                <Form.Control
                  className="instructorsNameFormControl"
                  type="text"
                  placeholder=""
                />
              </Form>

              <Form>
                <Form.Control
                  className="instructorsEmailFormControl"
                  type="text"
                  placeholder=""
                />
              </Form>
            </div>

            <h5 className="formPhoneNumberHeading">Phone Number*</h5>
            <Form>
              <Form.Control
                className="instructorsPhoneNumberFormControl"
                type="text"
                placeholder=""
              />
            </Form>

            <h5 className="formAddSummaryHeading">Add Summary*</h5>
            <Form>
              <Form.Control
                className="instructorsAddSummaryFormControl"
                type="text"
                placeholder=""
              />
            </Form>

            <Button className="submitFormBtn" variant="primary" type="link">
              Submit form
            </Button>
          </div>

          <div className="howToBecomeAnInstructor">
            <h2 className="howToBecomeAnInstructorHeading">
              How to Become an Instructor?
            </h2>
            <div className="becomeInstructorButtonsDiv">
              <Button
                className="becomeAnInstructorBtn"
                variant="primary"
                type="link"
              >
                Become an Instructor
              </Button>

              <Button
                className="instructorRoleBtn"
                variant="primary"
                type="link"
              >
                Instructor Role
              </Button>

              <Button
                className="startWithCourseBtn"
                variant="primary"
                type="link"
              >
                Start with Course
              </Button>
            </div>

            <h3 className="becomeAnInstructorHeading">Become an Instructor</h3>

            <p className="becomeAnInstructorFirstParagraph">
              As it so contrasted oh estimating instrument. Size like body
              someone had. Are conduct viewing boy minutes warrant the expense?
              Tolerably behaviour may admit daughters offending her ask own.
              Praise effect wishes change way and any wanted. Lively use looked
              latter regard had. Do he it part more last in. Merits ye if Mr
              narrow points. Melancholy particular Devonshire alteration it
              favorable appearance up.
            </p>

            <p className="becomeAnInstructorSecondParagraph">
              As it so contrasted oh estimating instrument. Size like body
              someone had. Are conduct viewing boy minutes warrant the expense?
              Tolerably behaviour may admit daughters offending her ask own.
              Praise effect wishes change way and any wanted. Lively use looked
              latter regard had. Do he it part more last in. Merits ye if Mr
              narrow points. Melancholy particular Devonshire alteration it
              favorable appearance up.
            </p>

            <p className="becomeAnInstructorThirdParagraph">
              As it so contrasted oh estimating instrument. Size like body
              someone had. Are conduct viewing boy minutes warrant the expense?
              Tolerably behaviour may admit daughters offending her ask own.
              Praise effect wishes change way and any wanted. Lively use looked
              latter regard had. Do he it part more last in. Merits ye if Mr
              narrow points. Melancholy particular Devonshire alteration it
              favorable appearance up.
            </p>
          </div>
        </div>

        <div className="instructorsBodyLastDiv">
          <div className="instructorsBodyLastDivLeft">
            <h2 className="instructorsBodyLastDivLeftHeading">
              Become an Instructor
            </h2>
            <p className="instructorsBodyLastDivLeftParagraph">
              As it so contrasted oh estimating instrument. Size like body
              someone had. Are conduct viewing boy minutes warrant the expense
            </p>
          </div>

          <div className="startTeachingToday">
            <Button
              className="startTeachingTodayBtn"
              variant="primary"
              type="link"
            >
              {" "}
              Start Teaching Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
