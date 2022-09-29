import React from 'react'
import Button from 'react-bootstrap/Button';
import { COLORS } from '../../utills/Tools';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoTvOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Image } from 'react-bootstrap'
import { IoHeartOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5"
import { IoApps } from "react-icons/io5"
import {IoHeartSharp} from "react-icons/io5"
import {IoStarHalfOutline} from "react-icons/io5"

const Home = () => {
  return (
    <>

      <div className='home' style={{ marginBottom: 80 }}>
        <div style={{ paddingLeft: 70, width: 800, marginBottom: 70 }}>
          <h1 style={{ fontSize: 55, fontStyle: 'italic', fontWeight: 'bold' }}>Limitless learning at your fingertips</h1>
          <p style={{ fontSize: 20 }}>Online learning and market place with 5K+ courses and 10M students. Taught by experts to help you acquire new skills.</p>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", paddingRight: 20 }}>
              <p>Learn with experts</p>
              <IoCheckmarkCircleSharp />
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", paddingRight: 20 }}>
                <p>Get Certificate</p>
                <IoCheckmarkCircleSharp />
              </div>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Get membership</p>
                <IoCheckmarkCircleSharp />
              </div>
            </div>
          </div>
          <Button variant="primary" type="link" style={{
            height: 50, width: 150, backgroundColor: COLORS.baseColorSix,
            color: COLORS.baseColorTwo, borderColor: COLORS.baseColorSix, marginTop: 20, fontSize: 14
          }}>
            GET STARTED
          </Button>
        </div>

        <div>
          <div style={{
            marginLeft: 70, width: 1400, display: "flex", marginBottom: 60, justifyContent: "space-between",
            alignItems: "center"
          }}>

            <div style={{
              display: "flex", alignItems: "center", width: 130, height: 30, paddingLeft: 30,
              paddingRight: 30, backgroundColor: COLORS.baseColorNine, paddingTop: 25, paddingBottom: 25, alignContent: "center"
            }}>
              <div style={{ paddingRight: 20 }}>
                <IoTvOutline />
              </div>
              <div style={{}}>
                <h5>10K</h5>
                <h6 style={{ fontSize: 12 }}>Online Courses</h6>
              </div>
            </div>

            <div style={{
              display: "flex", marginRight: 60, alignItems: "center", paddingLeft: 30, paddingRight: 30,
              width: 130, height: 30, backgroundColor: COLORS.baseColorTen, paddingTop: 25, paddingBottom: 25
            }}>
              <div style={{ paddingRight: 20 }}>
                <IoPersonSharp />
              </div>
              <div>
                <h5>200+</h5>
                <h6 style={{ fontSize: 12 }}>Expert Tutors</h6>
              </div>
            </div>

            <div style={{
              display: "flex", marginRight: 60, alignItems: "center", paddingLeft: 30, paddingRight: 30,
              width: 130, height: 30, backgroundColor: COLORS.baseColorEleven, paddingTop: 25, paddingBottom: 25
            }}>
              <div style={{ paddingRight: 20 }}>
                <IoPeopleSharp />
              </div>
              <div>
                <h5>60K+</h5>
                <h6 style={{ fontSize: 12 }}>Online Students</h6>
              </div>
            </div>

            <div style={{
              display: "flex", marginRight: 60, alignItems: "center", paddingLeft: 30, paddingRight: 30, width: 130,
              height: 30, backgroundColor: COLORS.baseColorTwelve, paddingTop: 25, paddingBottom: 25
            }}>
              <div style={{ paddingRight: 20 }}>
                <IoCheckmarkDoneCircle />
              </div>
              <div>
                <h5>6K+</h5>
                <h6 style={{ fontSize: 12 }}>Certified Courses</h6>
              </div>
            </div>

          </div>
          <div style={{ marginLeft: 70, paddingLeft: 450 }}>
            <h2 style={{ fontSize: 40 }}>Most Popular Courses</h2>
            <h6 style={{ fontSize: 14 }}>Choose from hundreds of courses from Specialist organizations</h6>
          </div>

          <div style={{
            marginLeft: 70, display: "flex", width: 1200, height: 35, backgroundColor: COLORS.baseColorThirteen, alignItems: "center",
            justifyContent: "space-between", paddingLeft: 100, paddingRight: 100, paddingTop: 5, paddingBottom: 5, marginBottom: 30
          }}>
            <h6 style={{ color: COLORS.baseColorSix, fontSize: 14 }}>Web Design</h6>
            <h6 style={{ color: COLORS.baseColorSix, fontSize: 16 }}>Development</h6>
            <Button variant="primary" type="link" style={{
              height: 35, width: 130, borderColor: COLORS.baseColorSix,
              color: COLORS.baseColorTwo, backgroundColor: COLORS.baseColorSix, fontWeight: 'bold'
            }}>
              Graphic Design
            </Button>
            <h6 style={{ color: COLORS.baseColorSix, fontSize: 16 }}>Marketing</h6>
            <h6 style={{ color: COLORS.baseColorSix, fontSize: 16 }}>Finance</h6>
          </div>

          <div style={{ marginLeft: 70, marginRight: 55, display: "flex", justifyContent: "space-between", }}>
            <div style={{height: 600}}> <Image src={require('../../images/red-wavy-background.jpg')} style={{ width: 325, height: 200 }} />

              <div style={{ backgroundColor: COLORS.baseColorTwo, width: 290, paddingLeft: 15, paddingRight: 15}}>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Button variant="primary" type="link" style={{
                    height: 35, width: 100, borderColor: COLORS.baseColorEleven,
                    color: COLORS.baseColorFourteen, backgroundColor: COLORS.baseColorEleven, fontSize: 14, fontWeight: "bold"
                  }}>
                    All level
                  </Button>
                  <IoHeartOutline />
                </div>
                <h3>Sketch from A to Z: for app</h3>
                <h5>Proposal indulged nor do sociable he throwing settling</h5>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarOutline />
                  <h5 style={{ marginLeft: 10 }}>4.0/5.0</h5>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 5 }}>12h 56m</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", paddingRight: 20 }}>
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>15 lectures</h5>
                  </div>
                </div>
              </div>
            </div>

            <div><Image src={require('../../images/istockphoto-2.jpg')} style={{ width: 325, height: 200 }} />
              <div style={{ backgroundColor: COLORS.baseColorTwo, width: 290, paddingLeft: 15, paddingRight: 15 }}>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Button variant="primary" type="link" style={{
                    height: 35, width: 100, borderColor: COLORS.baseColorEleven,
                    color: COLORS.baseColorFourteen, backgroundColor: COLORS.baseColorEleven, fontSize: 14, fontWeight: "bold"
                  }}>
                    All level
                  </Button>
                  <IoHeartSharp />
                </div>
                <h3>Learn Invision</h3>
                <h5>Arrived off she elder beloved him Course to up he hardly</h5>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalfOutline />
                  <IoStarOutline />
                  <h5 style={{ marginLeft: 10 }}>3.5/5.0</h5>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 5 }}>6h 56m</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", paddingRight: 20 }}>
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>82 lectures</h5>
                  </div>
                </div>
              </div>
            </div>

            <div><Image src={require('../../images/istockphoto-1.jpg')} style={{ width: 325, height: 200 }} />
              <div style={{ backgroundColor: COLORS.baseColorTwo, width: 290, paddingLeft: 15, paddingRight: 15 }}>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Button variant="primary" type="link" style={{
                    height: 35, width: 100, borderColor: COLORS.baseColorEleven,
                    color: COLORS.baseColorFourteen, backgroundColor: COLORS.baseColorEleven, fontSize: 14, fontWeight: "bold"
                  }}>
                    Beginner
                  </Button>
                  <IoHeartSharp />
                </div>
                <h3>Graphic design Masterclass</h3>
                <h5>Rooms oh fully taken by worse do points  afraid but may end</h5>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalfOutline />
                  <h5 style={{ marginLeft: 10 }}>4.5/5.0</h5>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 5 }}>9h 56m</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", paddingRight: 20 }}>
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>65 lectures</h5>
                  </div>
                </div>
              </div>
            </div>

            <div><Image src={require('../../images/istockphoto-3.jpg')} style={{ width: 325, height: 200 }} />
              <div style={{ backgroundColor: COLORS.baseColorTwo, width: 290, paddingLeft: 15, paddingRight: 15 }}>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Button variant="primary" type="link" style={{
                    height: 35, width: 100, borderColor: COLORS.baseColorEleven,
                    color: COLORS.baseColorFourteen, backgroundColor: COLORS.baseColorEleven, fontSize: 14, fontWeight: "bold"
                  }}>
                    Beginner
                  </Button>
                  <IoHeartOutline />
                </div>
                <h3>Create a Design system in Figma</h3>
                <h5>Rooms oh fully taken by worse do points  afraid but may end</h5>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalfOutline />
                  <h5 style={{ marginLeft: 10 }}>4.5/5.0</h5>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IoTimeOutline />
                    <h5 style={{ marginLeft: 5 }}>5h 56m</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", paddingRight: 20 }}>
                    <IoApps />
                    <h5 style={{ marginLeft: 5 }}>32 lectures</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>




  )
}

export default Home
