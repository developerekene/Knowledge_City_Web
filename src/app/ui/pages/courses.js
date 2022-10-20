import React from "react";

// importing from utills
import { COLORS } from "../../utills/Tools";

// importing from Bootstrap
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  PROANDCOM,
  WRAC,
  AACRAFTS,
  BUSINESS,
  ENGANDCONST,
  COOBAKING,
  TRAAM,
  HEALTHFITNESS,
  OFFICEPRO,
  DESIGN,
  LIFESTYLE,
  MUSIC,
  KIDDIES,
} from "../../utills/Data";

const Courses = () => {
  let getProAndCom = () => {
    return PROANDCOM.map((PROANDCOM, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv"
              onClick={() => alert(PROANDCOM.title)}>
              <Image className="coursesImage"
                src={PROANDCOM.image}
              />
              <h5 className="courseState"
                style={{
                  
                }}
              >
                {PROANDCOM.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{PROANDCOM.title}</h3>
              <h4>{PROANDCOM.price}</h4>
            </div>
            <div className="coursesReview">
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>{PROANDCOM.star}</div> */}
              <div>{PROANDCOM.review}</div>
              {/* <div style={{marginBottom: 15}}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
            </div>
          </div>
        </div>
      );
    });
  };

  let getWrac = () => {
    return WRAC.map((WRAC, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={WRAC.image}
              />
              <h5 className="courseState" >
                {WRAC.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{WRAC.title}</h3>
              <h4>{WRAC.price}</h4>
            </div>
            <div className="coursesReview"
              
            >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{WRAC.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  let getArtsAndCrafts = () => {
    return AACRAFTS.map((AACRAFTS, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={AACRAFTS.image}
            
              />
              <h5 className="courseState">
                {AACRAFTS.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{AACRAFTS.title}</h3>
              <h4>{AACRAFTS.price}</h4>
            </div>
            <div className="coursesReview"
              
            >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{AACRAFTS.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };


  let getBusiness = () => {
    return BUSINESS.map((BUSINESS, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={BUSINESS.image}
                
              />
              <h5 className="courseState">
                {BUSINESS.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{BUSINESS.title}</h3>
              <h4>{BUSINESS.price}</h4>
            </div>
            <div className="coursesReview"
              
              
            >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{BUSINESS.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  let getEngAndConst = () => {
    return ENGANDCONST.map((ENGANDCONST, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={ENGANDCONST.image}
                
              />
              <h5 className="courseState">
                {ENGANDCONST.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{ENGANDCONST.title}</h3>
              <h4>{ENGANDCONST.price}</h4>
            </div>
            <div className="coursesReview">
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{ENGANDCONST.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  let getCooBaking = () => {
    return COOBAKING.map((COOBAKING, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={COOBAKING.image}
              />
              <h5 className="courseState">
                {COOBAKING.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{COOBAKING.title}</h3>
              <h4>{COOBAKING.price}</h4>
            </div>
            <div className="coursesReview"
              >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{COOBAKING.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  let getTrainAndMentor = () => {
    return TRAAM.map((TRAAM, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={TRAAM.image}
                
              />
              <h5 className="courseState">
                {TRAAM.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{TRAAM.title}</h3>
              <h4>{TRAAM.price}</h4>
            </div>
            <div className="coursesReview"
              
            >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{TRAAM.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  let getHealthFitness = () => {
    return HEALTHFITNESS.map((HEALTHFITNESS, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={HEALTHFITNESS.image}
              />
              <h5 className="courseState">
                {HEALTHFITNESS.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{HEALTHFITNESS.title}</h3>
              <h4>{HEALTHFITNESS.price}</h4>
            </div>
            <div className="coursesReview"
              
              
            >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{HEALTHFITNESS.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  let getOfficePro = () => {
    return OFFICEPRO.map((OFFICEPRO, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={OFFICEPRO.image}
                
              />
              <h5 className="courseState">
                {OFFICEPRO.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{OFFICEPRO.title}</h3>
              <h4>{OFFICEPRO.price}</h4>
            </div>
            <div className="coursesReview"
              
            >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{OFFICEPRO.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  let getDesign = () => {
    return DESIGN.map((DESIGN, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={DESIGN.image}
                
              />
              <h5 className="courseState">
                {DESIGN.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{DESIGN.title}</h3>
              <h4>{DESIGN.price}</h4>
            </div>
            <div className="coursesReview"
              
            >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{DESIGN.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  let getLifestyle = () => {
    return LIFESTYLE.map((LIFESTYLE, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={LIFESTYLE.image}
                
              />
              <h5 className="courseState">
                {LIFESTYLE.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{LIFESTYLE.title}</h3>
              <h4>{LIFESTYLE.price}</h4>
            </div>
            <div className="coursesReview"
              
            >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{LIFESTYLE.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  let getMusic = () => {
    return MUSIC.map((MUSIC, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={MUSIC.image}
                
              />
              <h5 className="courseState">
                {MUSIC.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{MUSIC.title}</h3>
              <h4>{MUSIC.price}</h4>
            </div>
            <div className="coursesReview"
            
            >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{MUSIC.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  let getKiddies = () => {
    return KIDDIES.map((KIDDIES, index) => {
      return (
        <div key={index}>
          <div className="coursesDiv">
            <div
              className="coursesImageDiv">
              <Image className="coursesImage"
                src={KIDDIES.image}
                
              />
              <h5 className="courseState">
                {KIDDIES.state}
              </h5>
            </div>
            <div className="courseTitlePrice">
              <h3>{KIDDIES.title}</h3>
              <h4>{KIDDIES.price}</h4>
            </div>
            <div className="coursesReview"
              
             >
              {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
                <input class="star" type="checkbox" title="bookmark page" />
              </div> */}
              <div>{KIDDIES.review}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="coursesPage">
      <div className="coursesFirstDiv">
        <div
          style={{
            marginLeft: 250,
            height: 45,
          }}
        >
          <h2 style={{ color: COLORS.baseColorTwo, fontSize: 35 }}>
            Welcome, search for courses in over 12 cartegories.
          </h2>
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
          <h5 className="h5">
            Learn more
          </h5>
          </a>
        </div>

        <div className="getSartedContainer">
          <h2 className="h2">PICK COURSE</h2>
          <p className="p1">
            Begin your journey to becoming a professional in your field.
            Register a course today.
          </p>
          <a href="#">
          <h5 className="h5">
            Pick a course
          </h5>
          </a>
        </div>

        <div className="getSartedContainer">
          <h2 className="h2">CERTIFICATION</h2>
          <p className="p1">
            With over 280+ certification to choose from, knowledge city gives
            you the platform to achieve your dreams.
          </p>
          <a href="#">
          <h5 className="h5">
            Get Certified today
          </h5>
          </a>
        </div>
      </div>

      <h1 className="knowledgeCity"
      
      >
        KNOWLEDGE CITY COURSES
      </h1>

      <h2 className="coursesHeading">
        PROGRAMMING AND COMPUTER SCIENCE
      </h2>

      <div className="imagesContainer"
        
      >
        {getProAndCom()}
      </div>

      <h2 className="coursesHeading"
        
      >
        WRITING AND CREATIVITY
      </h2>

      <div className="imagesContainer"
        
      >
        {getWrac()}
      </div>

      <h2 className="coursesHeading"
                
      >
        ARTS AND CRAFTS
      </h2>

      <div className="imagesContainer"
        
      >
        {getArtsAndCrafts()}
      </div>

      <h2 className="coursesHeading"
        
      >
        BUSINESS
      </h2>

      <div className="imagesContainer"
        
      >
        {getBusiness()}
      </div>

      <h2 className="coursesHeading"
        
      >
        ENGINEERING AND CONSTRUCTION
      </h2>

      <div className="imagesContainer"
        
      >
        {getEngAndConst()}
      </div>

      <h2 className="coursesHeading"
        
      >
        COOKING AND BAKING
      </h2>

      <div className="imagesContainer"
        
      >
        {getCooBaking()}
      </div>

      <h2 className="coursesHeading"
        
      >
        TRAINING AND MENTORING
      </h2>

      <div className="imagesContainer"
        
      >
        {getTrainAndMentor()}
      </div>

      <h2 className="coursesHeading"
        
      >
        HEALTH AND FITNESS
      </h2>

      <div className="imagesContainer"
       
      >
        {getHealthFitness()}
      </div>

      <h2 className="coursesHeading"
        
      >
        OFFICE PRODUCTIVITY
      </h2>

      <div className="imagesContainer"
        
      >
        {getOfficePro()}
      </div>

      <h2 className="coursesHeading"
        
      >
        DESIGN
      </h2>

      <div className="imagesContainer"
        
      >
        {getDesign()}
      </div>

      <h2 className="coursesHeading"
        
      >
        LIFESTYLE
      </h2>

      <div className="imagesContainer"
        
      >
        {getLifestyle()}
      </div>

      <h2 className="coursesHeading"
        
      >
        MUSIC
      </h2>

      <div className="imagesContainer"
       
      >
        {getMusic()}
      </div>

      <h2 className="coursesHeading"
        
      >
        KIDDIES
      </h2>

      <div className="kiddiesContainer"
        
      >
        {getKiddies()}
      </div>
    </div>
  );
};

export default Courses;
