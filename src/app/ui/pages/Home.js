import React from "react";

// importing from bootstrap
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

// importing from utills
import { COLORS } from "../../utills/Tools";
import { TEXT } from "../../utills/Data";

// ionicons5
import {
  IoBookmarkOutline,
  IoCart,
  IoCheckmarkCircleSharp,
  IoTvOutline,
  IoPersonSharp,
  IoPeopleSharp,
  IoCheckmarkDoneCircle,
  IoHeartOutline,
  IoStar,
  IoStarOutline,
  IoTimeOutline,
  IoApps,
  IoHeartSharp,
  IoStarHalfOutline,
} from "react-icons/io5";

const Home = () => {

  return (
    <>
      <div className="home">
        <div className="homeFirstDiv">
          <div style={{ marginRight: 350, width: 1000 }}>
            <h1
              style={{
                fontSize: 60,
                fontStyle: "italic",
                fontWeight: "bold",
                color: COLORS.baseColorSix,
              }}
            >
              {TEXT.homeHeaderText}
            </h1>
            <p style={{ fontSize: 20, color: "#ffffff" }}>
              Online learning and market place with 5K+ courses and 10M
              students. Taught by experts to help you acquire new skills.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: COLORS.baseColorSix,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: 20,
                }}
              >
                <p style={{ marginRight: 10 }}>Learn with experts</p>
                <IoCheckmarkCircleSharp />
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: 20,
                  }}
                >
                  <p style={{ marginRight: 10 }}>Get Certificate</p>
                  <IoCheckmarkCircleSharp />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: 10 }}>Get membership</p>
                  <IoCheckmarkCircleSharp />
                </div>
              </div>
            </div>
            <Button
              variant="primary"
              type="link"
              style={{
                height: 50,
                width: 150,
                backgroundColor: COLORS.baseColorSix,
                color: COLORS.baseColorTwo,
                borderColor: COLORS.baseColorSix,
                marginTop: 20,
                fontSize: 14,
                borderRadius: 5,
                cursor: "pointer"
              }}
            >
              GET STARTED
            </Button>
          </div>
          {/* <div>
            <Image
              src={require("../../images/jpeg/Effective_CEO.jpg")}
              style={{ width: 450, height: 420, borderRadius: 20}}
            />
          </div> */}
        </div>

        <div>
          <div
            style={{
              marginLeft: 60,
              marginRight: 60,
              width: "100",
              display: "flex",
              marginTop: 150,
              marginBottom: 100,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: 145,
                height: 30,
                borderRadius: 5,
                backgroundColor: COLORS.baseColorNine,
                padding: 20,
              }}
            >
              <div style={{ paddingRight: 20 }}>
                <IoTvOutline style={{ height: 100, width: 40 }} />
              </div>
              <div style={{ fontWeight: "600" }}>
                <p>10K</p>
                <p style={{ fontSize: 12 }}>Online Courses</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginRight: 60,
                alignItems: "center",
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 5,
                width: 130,
                height: 30,
                backgroundColor: COLORS.baseColorTen,
                paddingTop: 25,
                paddingBottom: 25,
              }}
            >
              <div style={{ paddingRight: 20 }}>
                <IoPersonSharp style={{ height: 100, width: 40 }} />
              </div>
              <div
                style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "600" }}
              >
                <p>200+</p>
                <p style={{ fontSize: 12 }}>Expert Tutors</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginRight: 60,
                alignItems: "center",
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 5,
                width: 130,
                height: 30,
                backgroundColor: COLORS.baseColorEleven,
                paddingTop: 25,
                paddingBottom: 25,
              }}
            >
              <div style={{ paddingRight: 20 }}>
                <IoPeopleSharp style={{ height: 100, width: 40 }} />
              </div>
              <div
                style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "600" }}
              >
                <p>60K+</p>
                <p style={{ fontSize: 12 }}>Online Students</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginRight: 60,
                alignItems: "center",
                paddingLeft: 30,
                paddingRight: 30,
                width: 130,
                borderRadius: 5,
                height: 30,
                backgroundColor: COLORS.baseColorTwelve,
                paddingTop: 25,
                paddingBottom: 25,
              }}
            >
              <div style={{ paddingRight: 20 }}>
                <IoCheckmarkDoneCircle style={{ height: 100, width: 40 }} />
              </div>
              <div
                style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "600" }}
              >
                <p>6K+</p>
                <p style={{ fontSize: 12 }}>Certified Courses</p>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: 70, paddingLeft: 450 }}>
            <h2 style={{ fontSize: 40 }}>Most Popular Courses</h2>
            <p style={{ fontSize: 16, marginBottom: 50 }}>
              Choose from hundreds of courses from Specialist organizations
            </p>
          </div>

          <div
            style={{
              marginLeft: 70,
              display: "flex",
              width: 1200,
              height: 35,
              backgroundColor: COLORS.baseColorThirteen,
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 100,
              paddingRight: 100,
              paddingTop: 5,
              paddingBottom: 5,
              marginBottom: 30,
              borderRadius: 5,
            }}
          >
            <h6 style={{ color: COLORS.baseColorSix, fontSize: 14 }}>
              Web Design
            </h6>
            <h6 style={{ color: COLORS.baseColorSix, fontSize: 16 }}>
              Development
            </h6>
            <Button
              variant="primary"
              type="link"
              style={{
                height: 35,
                width: 130,
                borderColor: COLORS.baseColorSix,
                color: COLORS.baseColorTwo,
                backgroundColor: COLORS.baseColorSix,
                fontWeight: "bold",
                borderRadius: 5,
              }}
            >
              Graphic Design
            </Button>
            <h6 style={{ color: COLORS.baseColorSix, fontSize: 16 }}>
              Marketing
            </h6>
            <h6 style={{ color: COLORS.baseColorSix, fontSize: 16 }}>
              Finance
            </h6>
          </div>

          <div
            style={{
              marginLeft: 70,
              marginRight: 55,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ height: 600 }}>
              {" "}
              <Image
                src={require("../../images/jpeg/red-wavy-background.jpg")}
                style={{ width: 325, height: 200, borderRadius: 5 }}
              />
              <div
                style={{
                  backgroundColor: COLORS.baseColorTwo,
                  width: 290,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="primary"
                    type="link"
                    style={{
                      height: 35,
                      width: 100,
                      borderColor: COLORS.baseColorSix,
                      color: COLORS.baseColorTwo,
                      backgroundColor: COLORS.baseColorSix,
                      fontSize: 14,
                      fontWeight: "bold",
                      borderRadius: 5,
                    }}
                  >
                    All level
                  </Button>
                  <IoHeartOutline />
                </div>
                <h3 style={{ color: COLORS.baseColorSix }}>
                  Sketch from A to Z: for app
                </h3>
                <h5>Proposal indulged nor do sociable he throwing settling</h5>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarOutline />
                    <h5 style={{ marginLeft: 10 }}>4.0/5.0</h5>
                  </div>

                  <div>
                    {" "}
                    <h5>$90</h5>{" "}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 5 }}>12h 56m</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>15 lectures</h5>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={require("../../images/jpeg/istockphoto-2.jpg")}
                style={{ width: 325, height: 200, borderRadius: 5 }}
              />
              <div
                style={{
                  backgroundColor: COLORS.baseColorTwo,
                  width: 290,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="primary"
                    type="link"
                    style={{
                      height: 35,
                      width: 100,
                      borderColor: COLORS.baseColorSix,
                      color: COLORS.baseColorTwo,
                      backgroundColor: COLORS.baseColorSix,
                      fontSize: 14,
                      fontWeight: "bold",
                      borderRadius: 5,
                    }}
                  >
                    All level
                  </Button>
                  <IoHeartSharp />
                </div>
                <h3 style={{ color: COLORS.baseColorSix }}>Learn Invision</h3>
                <h5>
                  Arrived off she elder beloved him Course to up he hardly
                </h5>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalfOutline />
                    <IoStarOutline />
                    <h5 style={{ marginLeft: 10 }}>3.5/5.0</h5>
                  </div>
                  <div>
                    <h5>$90</h5>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 5 }}>6h 56m</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>82 lectures</h5>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={require("../../images/jpeg/istockphoto-1.jpg")}
                style={{ width: 325, height: 200, borderRadius: 5 }}
              />
              <div
                style={{
                  backgroundColor: COLORS.baseColorTwo,
                  width: 290,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="primary"
                    type="link"
                    style={{
                      height: 35,
                      width: 100,
                      borderColor: COLORS.baseColorSix,
                      color: COLORS.baseColorTwo,
                      backgroundColor: COLORS.baseColorSix,
                      fontSize: 14,
                      fontWeight: "bold",
                      borderRadius: 5,
                    }}
                  >
                    Beginner
                  </Button>
                  <IoHeartSharp />
                </div>
                <h3 style={{ color: COLORS.baseColorSix }}>
                  Graphic design Masterclass
                </h3>
                <h5>
                  Rooms oh fully taken by worse do points afraid but may end
                </h5>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalfOutline />
                    <h5 style={{ marginLeft: 10 }}>4.5/5.0</h5>
                  </div>
                  <div>
                    <h5>Free</h5>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 5 }}>9h 56m</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>65 lectures</h5>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={require("../../images/jpeg/istockphoto-3.jpg")}
                style={{ width: 325, height: 200, borderRadius: 5 }}
              />
              <div
                style={{
                  backgroundColor: COLORS.baseColorTwo,
                  width: 290,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Button
                      variant="primary"
                      type="link"
                      style={{
                        height: 35,
                        width: 100,
                        borderColor: COLORS.baseColorSix,
                        color: COLORS.baseColorTwo,
                        backgroundColor: COLORS.baseColorSix,
                        fontSize: 14,
                        fontWeight: "bold",
                        borderRadius: 5,
                      }}
                    >
                      Beginner
                    </Button>
                  </div>
                  <IoHeartOutline />
                </div>
                <h3 style={{ color: COLORS.baseColorSix }}>
                  Create a Design system in Figma
                </h3>
                <h5>
                  Rooms oh fully taken by worse do points afraid but may end
                </h5>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalfOutline />
                    <h5 style={{ marginLeft: 10 }}>4.5/5.0</h5>
                  </div>
                  <div>
                    <h5>Free</h5>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 5 }}>5h 56m</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>32 lectures</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="become">
          <div
            style={{
              width: 1250,
              height: 200,
              marginLeft: 70,
              marginRight: 50,
              backgroundColor: COLORS.baseColorSix,
              display: "flex",
              alignItems: "center",
              paddingLeft: 70,
              paddingRight: 70,
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            <div style={{ width: 700, marginRight: 200 }}>
              <h1 style={{ color: COLORS.baseColorTwo }}>
                Become an Instructor!
              </h1>
              <p style={{ color: COLORS.baseColorTwo, fontSize: 16 }}>
                Speedily say has suitable disposal add boy. On forth doubt miles
                of child. Exercise joy man children rejoiced. Yet uncommonly his
                ten who diminution astonished
              </p>
            </div>
            <div>
              <Button
                variant="primary"
                type="link"
                style={{
                  height: 40,
                  width: 170,
                  borderColor: COLORS.baseColorTen,
                  color: COLORS.baseColorTen,
                  backgroundColor: COLORS.baseColorSix,
                  fontSize: 16,
                  borderRadius: 5,
                }}
              >
                Start Teaching Today
              </Button>
            </div>
          </div>

          <div
            style={{
              marginLeft: 70,
              paddingLeft: 450,
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <h2 style={{ fontSize: 40 }}>Our Trending Courses</h2>
            <p style={{ fontSize: 18, marginLeft: 50 }}>
              Check out most Courses in the market
            </p>
          </div>

          <div
            style={{
              marginLeft: 70,
              marginRight: 55,
              display: "flex",
              width: 1250,
              marginBottom: 100,
            }}
          >
            <div style={{ marginRight: 70, marginLeft: 15, width: 700 }}>
              
              <Image
                src={require("../../images/jpeg/about-img.jpg")}
                style={{ width: 400, height: 250 }}
              />
              <div
                style={{
                  backgroundColor: COLORS.baseColorTwo,
                  width: 360,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", marginRight: 120 }}>
                    <Button
                      variant="primary"
                      type="link"
                      style={{
                        height: 35,
                        width: 80,
                        borderColor: COLORS.baseColorSix,
                        marginRight: 10,
                        color: COLORS.baseColorTwo,
                        backgroundColor: COLORS.baseColorSix,
                        fontSize: 14,
                        fontWeight: "bold",
                        borderRadius: 5,
                      }}
                    >
                      Design
                    </Button>

                    <Button
                      variant="primary"
                      type="link"
                      style={{
                        height: 35,
                        width: 90,
                        borderColor: COLORS.baseColorSix,
                        color: COLORS.baseColorTwo,
                        backgroundColor: COLORS.baseColorSix,
                        fontSize: 14,
                        fontWeight: "bold",
                        borderRadius: 5,
                      }}
                    >
                      Beginner
                    </Button>
                  </div>
                  <IoBookmarkOutline style={{}} />
                </div>
                <h4 style={{ color: COLORS.baseColorSix }}>
                  The Complete Digital Marketing Course - 8 Course in one
                </h4>
                <div
                  style={{ display: "flex", alignItems: "center", width: 360 }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginRight: 5 }}>4.5</p>
                    <IoStar />
                    <h5 style={{ marginLeft: 10, marginRight: 170 }}>(6500)</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h5>6500 (Student)</h5>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 10, marginRight: 15 }}>6h 56m</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingRight: 20,
                    }}
                  >
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>82 lectures</h5>
                  </div>
                </div>
                <div></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src={require("../../images/jpeg/man_on_suit.jpg")}
                      style={{ width: 60, height: 60 }}
                    />
                    <h5
                      style={{ marginRight: 60, marginLeft: 10, fontSize: 16 }}
                    >
                      Larry Lawson
                    </h5>
                  </div>
                  <Button
                    variant="primary"
                    type="link"
                    style={{
                      height: 35,
                      width: 130,
                      borderColor: COLORS.baseColorSix,
                      color: COLORS.baseColorTwo,
                      backgroundColor: COLORS.baseColorSix,
                      fontSize: 14,
                      fontWeight: "bold",
                      borderRadius: 5,
                    }}
                  >
                    <IoCart /> Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            <div style={{ marginRight: 70, marginLeft: 15, width: 700 }}>
              <Image
                src={require("../../images/png/writers_employability.png")}
                style={{ width: 400, height: 250 }}
              />
              <div
                style={{
                  backgroundColor: COLORS.baseColorTwo,
                  width: 360,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", marginRight: 120 }}>
                    <Button
                      variant="primary"
                      type="link"
                      style={{
                        height: 35,
                        width: 80,
                        borderColor: COLORS.baseColorSix,
                        marginRight: 10,
                        color: COLORS.baseColorTwo,
                        backgroundColor: COLORS.baseColorSix,
                        fontSize: 14,
                        fontWeight: "bold",
                        borderRadius: 5,
                      }}
                    >
                      Design
                    </Button>

                    <Button
                      variant="primary"
                      type="link"
                      style={{
                        height: 35,
                        width: 90,
                        borderColor: COLORS.baseColorSix,
                        color: COLORS.baseColorTwo,
                        backgroundColor: COLORS.baseColorSix,
                        fontSize: 14,
                        fontWeight: "bold",
                        borderRadius: 5,
                      }}
                    >
                      Beginner
                    </Button>
                  </div>
                  <IoBookmarkOutline style={{}} />
                </div>
                <h4 style={{ color: COLORS.baseColorSix }}>
                  Angular - The Complete Guide (2021 Edition)
                </h4>
                <div
                  style={{ display: "flex", alignItems: "center", width: 360 }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginRight: 5 }}>4.0</p>
                    <IoStar />
                    <h5 style={{ marginLeft: 10, marginRight: 170 }}>(3500)</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h5>4500 (Student)</h5>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 10, marginRight: 15 }}>12h 45m</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingRight: 20,
                    }}
                  >
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>65 lectures</h5>
                  </div>
                </div>
                <div></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src={require("../../images/jpeg/Extraordinary Receptionist Training.jpg")}
                      style={{ width: 60, height: 60 }}
                    />
                    <h5
                      style={{ marginRight: 60, marginLeft: 10, fontSize: 16 }}
                    >
                      Billy Vasquez
                    </h5>
                  </div>
                  <div>
                    <h5>$90</h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={require("../../images/jpeg/Computer Skills for kids.jpg")}
                style={{ width: 400, height: 250 }}
              />
              <div
                style={{
                  backgroundColor: COLORS.baseColorTwo,
                  width: 360,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", marginRight: 120 }}>
                    <Button
                      variant="primary"
                      type="link"
                      style={{
                        height: 35,
                        width: 80,
                        borderColor: COLORS.baseColorSix,
                        marginRight: 10,
                        color: COLORS.baseColorTwo,
                        backgroundColor: COLORS.baseColorSix,
                        fontSize: 14,
                        fontWeight: "bold",
                        borderRadius: 5,
                      }}
                    >
                      Design
                    </Button>

                    <Button
                      variant="primary"
                      type="link"
                      style={{
                        height: 35,
                        width: 90,
                        borderColor: COLORS.baseColorSix,
                        color: COLORS.baseColorTwo,
                        backgroundColor: COLORS.baseColorSix,
                        fontSize: 14,
                        fontWeight: "bold",
                        borderRadius: 5,
                      }}
                    >
                      Beginner
                    </Button>
                  </div>
                  <IoBookmarkOutline style={{}} />
                </div>
                <h4 style={{ color: COLORS.baseColorSix }}>
                  Time Management Mastery: Do more, stress less
                </h4>
                <div
                  style={{ display: "flex", alignItems: "center", width: 360 }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginRight: 5 }}>4.5</p>
                    <IoStar />
                    <h5 style={{ marginLeft: 10, marginRight: 170 }}>(6500)</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h5>6500 (Student)</h5>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 10, marginRight: 15 }}>6h 56m</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingRight: 20,
                    }}
                  >
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>82 lectures</h5>
                  </div>
                </div>
                <div></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src={require("../../images/jpeg/man-2 0n suit.jpg")}
                      style={{ width: 60, height: 60 }}
                    />
                    <h5
                      style={{ marginRight: 60, marginLeft: 10, fontSize: 16 }}
                    >
                      Larry Lawson
                    </h5>
                  </div>
                  <div>
                    <h5>$225</h5>
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div
            className="lastOne"
            style={{
              marginLeft: 80,
              marginRight: 20,
              display: "flex",
              width: 1400,
            }}
          >
            <div>
              <div
                style={{
                  width: 450,
                  height: 250,
                  paddingTop: 20,
                  paddingBottom: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                  marginBottom: 40,
                  borderRadius: 5,
                  marginTop: 50,
                }}
              >
                <Image
                  src={require("../../images/jpeg/istockphoto2.jpeg")}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 1000,
                    marginLeft: 165,
                  }}
                />
                <p style={{ marginBottom: 15, fontSize: 18 }}>
                  "Moonlight newspaper up its enjoyment agreeable depending.
                  Timed voice share led him to widen noisy young. At weddings
                  believed laughing"
                </p>
                <div style={{ marginLeft: 155, marginBottom: 15 }}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalfOutline />
                </div>
                <h4 style={{ marginLeft: 150 }}>Carolyn Ortiz</h4>
              </div>
              <div
                style={{
                  width: 210,
                  height: 110,
                  paddingTop: 15,
                  backgroundColor: COLORS.baseColorSix,
                  borderRadius: 10,
                  marginLeft: 275,
                }}
              >
                <h4 style={{ marginBottom: 10, marginLeft: 85, color: COLORS.baseColorTwo }}>4.5/5.0</h4>
                <div style={{ marginLeft: 65, marginBottom: 10 }}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalfOutline />
                </div>
                <p style={{ marginLeft: 40, color: COLORS.baseColorTwo}}>Based on 3265 ratings</p>
              </div>
            </div>

            <div style={{ marginLeft: 20 }}>
              <div
                style={{
                  width: 220,
                  height: 250,
                  paddingTop: 15,
                  borderRadius: 5,
                  paddingLeft: 20,
                }}
              >
                <h3 style={{ marginBottom: 20 }}>100+ Verified Mentors</h3>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <Image
                      src={require("../../images/jpeg/istockphoto1.jpeg")}
                      style={{
                        width: 60,
                        height: 50,
                      }}
                    />
                    <div style={{ marginLeft: 5 }}>
                      <h4>Lori Stephens</h4>
                      <p>Tutor of Physics</p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <Image
                      src={require("../../images/jpeg/istockphoto4.jpeg")}
                      style={{
                        width: 60,
                        height: 50,
                      }}
                    />
                    <div style={{ marginLeft: 5 }}>
                      <h4>Billy Vasquez</h4>
                      <p>Tutor of Chemistry</p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <Image
                      src={require("../../images/jpeg/istockphoto5.jpeg")}
                      style={{
                        width: 60,
                        height: 50,
                      }}
                    />
                    <div style={{ marginLeft: 5, width: 700 }}>
                      <h4>Larry Lawson</h4>
                      <p>Tutor of Technology</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 280,
                  height: 270,
                  paddingTop: 20,
                  paddingBottom: 5,
                  paddingLeft: 30,
                  paddingRight: 25,
                  marginBottom: 40,
                  borderRadius: 5,
                  marginTop: 35,
                }}
              >
                <Image
                  src={require("../../images/jpeg/istockphoto6.jpeg")}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 1000,
                    marginLeft: 100,
                    marginBottom: 10,
                  }}
                />
                <p style={{ marginBottom: 20, fontSize: 18 }}>
                  "At wedding believed laughing although the Moonlight newspaper
                  up its enjoyment agreeable depending"
                </p>
                <div style={{ marginLeft: 90, marginBottom: 15 }}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalfOutline />
                </div>
                <h4 style={{ marginLeft: 80 }}>Dennis Barrett</h4>
              </div>
            </div>

            <div
              style={{
                marginLeft: 40,
                height: 255,
                borderRadius: 5,
                width: 500,
                marginTop: 160,
                paddingTop: 20,
                
              }}
            >
              <h1 style={{ marginBottom: 20 }}>
                Some valuable feedback from our Students
              </h1>
              <p style={{ fontSize: 18 }}>
                Supporting so be resolving breakfast an or perfectly. It drew a
                hill from me. Valley by oh twenty direct me so. Departure
                defective arranging rapturous did believe him all had supported.
                Family months lasted simple set nature vulgar him. Picture for
                attempt joy excited ten carried manners talking how.
              </p>
              <Button
                variant="primary"
                type="link"
                style={{
                  height: 35,
                  width: 135,
                  borderColor: COLORS.baseColorSix,
                  color: COLORS.baseColorTwo,
                  backgroundColor: COLORS.baseColorSix,
                  fontSize: 14,
                  fontWeight: "bold",
                  borderRadius: 5,
                  marginTop: 20,
                }}
              >
                View Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
