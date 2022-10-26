import React from "react";
import { Button, Image } from "react-bootstrap";
import { IoCheckmarkCircleSharp, IoStar, IoStarHalfOutline} from "react-icons/io5";


const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutFirstDiv">
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

      <h1 className="aboutHeading">ABOUT KNOWLEDGE CITY</h1>

      <div className="aboutBodyDiv">
        <h2 className="aboutThemeHeading">
          KNOWLEDGE CITY EDUCATION THEME BUILT SPECIFICALLY FOR EDUCATION
          CENTRES WHICH IS DEDICATED TO TEACHING AND INVOLVE LEARNERS
        </h2>

        <div className="themeDiv">
          <div className="themeLeftDiv">
            <Image
              className="themeLeftDivTopImage"
              src={require("../../images/jpeg/about-img.jpg")}
            />

            <Image
              className="themeLeftDivBottomImage"
              src={require("../../images/jpeg/Computer Skills for kids.jpg")}
            />
          </div>

          <div className="themeMiddleDiv">
            <Image
              className="themeMiddleImage"
              src={require("../../images/jpeg/Extraordinary-Receptionist.jpg")}
            />
          </div>

          <div className="themeRightDiv">
            <Image
              className="themeRightDivTopImage"
              src={require("../../images/jpeg/Dog.jpg")}
            />

            <Image
              className="themeRightDivBottomImage"
              src={require("../../images/jpeg/working-relation.jpg")}
            />
          </div>
        </div>
        <h2 className="aboutPortalHeading">About Knowledge City portal</h2>
        <p className="aboutPortalParagraph">
          How promotion excellent curiosity yet attemted hapiness gay prosperous
          impression had conviction for every delay death ask to style me mean
          able my by in the extremity now strangers contained
        </p>

        <div className="aboutPageMiddleDiv">
          <div className="aboutPageMiddleDivLeft">
          <Image
              className="themeMiddleImage"
              src={require("../../images/jpeg/Extraordinary-Receptionist.jpg")}
            />
          </div>

          <div className="aboutPageMiddleDivRight">
            <h2 className="heading35000">35,000+ Students joined with us to achieve their goals</h2>
            <p className="aboutPageMiddleDivRightFirstParagraph">How promotion excellent curiosity yet attemted hapiness gay prosperous
          impression had conviction for every delay death ask to style me mean
          able my by in the extremity now strangers contained How promotion excellent curiosity yet attemted hapiness gay prosperous
          impression had conviction for</p>

          <p className="aboutPageMiddleDivRightSecondParagraph">How promotion excellent curiosity yet attemted hapiness gay prosperous
          impression had conviction for every delay death ask to style me mean
          able my by in the extremity now strangers contained How promotion</p>
          
          <p className="firstListParagraph"> <IoCheckmarkCircleSharp/> Setup and installation take less time</p>
          <p className="secondListParagraph"> <IoCheckmarkCircleSharp/> Professional and easy to use Software</p>
          <p className="thirdListParagraph"> <IoCheckmarkCircleSharp/> Perfect for any design with pixel-perfect design</p>
          <p className="fourthListParagraph"> <IoCheckmarkCircleSharp/> Setup and installation too fast</p>
          </div>
        </div>

        <div className="awardsMeetButtonDiv">
        <h2 className="awardsHeadings">Awards'N Stuff</h2>
        <h2 className="meetHeadings">Meet Our Team</h2>
        <Button className="joinTeamBtn" variant="primary" type="link">
            Join Team
          </Button>
          </div>

          <div className="awardYearAndTeamDiv">
            <div className="awardYearandTitle">
              <p className="award2015"> <strong className="awardYear"> 2015</strong> Heroes for Children award</p>
              <p className="award2016"> <strong className="awardYear"> 2016</strong> Education Agency of the Year</p>
              <p className="award2017"> <strong className="awardYear"> 2017</strong> National Teacher of Year</p>
              <p className="award2018"> <strong className="awardYear"> 2018</strong> Best Education Agency 2018</p>
              <p className="award2019"> <strong className="awardYear"> 2019</strong> Teacher of the Nation (2nd place)</p>
              <p className="award2020"> <strong className="awardYear"> 2020</strong> Best Independent Education Agency</p>
            </div>

            <div className="teamMembersAndDetailsDiv">
              <div className="firstTeamMemberDetails">
              <Image
              className="teamFirstImages"
              src={require("../../images/jpeg/istockphoto2.jpeg")}
            />
            <h5 className="teamMemberName">Carolyn Ortiz</h5>
            <p className="teamMemberJob">Designer</p>
            <div className="teamMemberStars">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalfOutline />
                </div>
              </div>

              <div className="secondTeamMemberDetails">
              <Image
              className="teamSecondImages"
              src={require("../../images/jpeg/istockphoto6.jpeg")}
            />
            <h5 className="teamMemberName">Dennis Barrett</h5>
            <p className="teamMemberJob">IT Profesor</p>
            <div className="teamMemberStars">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalfOutline />
                </div>
              </div>

              <div className="thirdTeamMemberDetails">
              <Image
              className="teamThirdImages"
              src={require("../../images/jpeg/Extraordinary Receptionist Training.jpg")}
            />
            <h5 className="teamMemberName">Carolyn Ortiz</h5>
            <p className="teamMemberJob">Designer</p>
            <div className="teamMemberStars">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
              </div>

              <div className="FourthTeamMemberDetails">
              <Image
              className="teamFourthImages"
              src={require("../../images/jpeg/man_on_suit.jpg")}
            />
            <h5 className="teamMemberName">Carolyn Ortiz</h5>
            <p className="teamMemberJob">Designer</p>
            <div className="teamMemberStars">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalfOutline />
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default About;
