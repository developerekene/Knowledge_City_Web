import React from 'react'
import Button from 'react-bootstrap/Button';
import { COLORS } from '../../utills/Tools';
import {IoCheckmarkCircleSharp} from "react-icons/io5";

const Home = () => {
  return (
    <>

      <div className='home' style={{marginBottom: 80}}>
        <div style={{paddingLeft: 70, width: 800, marginBottom: 70}}>
          <h1 style={{fontSize: 55, fontStyle: 'italic', fontWeight: 'bold'}}>Limitless learning at your fingertips</h1>
          <p style={{fontSize: 20}}>Online learning and market place with 5K+ courses and 10M students. Taught by experts to help you acquire new skills.</p>
          
          <div style={{display: "flex", alignItems: "center"}}>
            <div style={{display: "flex", alignItems: "center", paddingRight: 20}}>
              <p>Learn with experts</p>
              <IoCheckmarkCircleSharp/>
            </div>
            
            <div>
            <div style={{display: "flex", alignItems: "center", paddingRight: 20}}>
              <p>Get Certificate</p>
              <IoCheckmarkCircleSharp/>
            </div>
            </div>

            <div>
            <div style={{display: "flex", alignItems: "center"}}>
              <p>Get membership</p>
              <IoCheckmarkCircleSharp/>
            </div>
            </div>
          </div>
          <Button variant="primary" type="link" style={{height: 50, width: 150, backgroundColor: COLORS.baseColorSix, 
          color: COLORS.baseColorTwo,borderColor: COLORS.baseColorSix, marginTop: 20, fontSize: 14
          }}>
            GET STARTED
          </Button>
        </div>

        <div style={{marginBottom: 80}}>
          <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: 100, paddingRight: 95}}>
            <div style={{width: 270}}>
              <h3>GET STARTED</h3>
              <p style={{fontSize: 18}}>Join over 10,000 students online making use of our platform to increase their knowledge in different variety of subjects.</p>
              <div style={{color: COLORS.baseColorSix, fontSize: 16, fontStyle: 'italic', fontWeight: 'bold'}}>Learn more</div>
            </div>

            <div style={{width: 270}}>
              <h3>PICK COURSE</h3>
              <p style={{fontSize: 18}}>Begin your journey to becoming a professional in your field. Register a course today.</p>
              <div style={{color: COLORS.baseColorSix, fontSize: 16, fontStyle: 'italic', fontWeight: 'bold'}}>Pick a Course</div>
            </div>

            <div style={{width: 270}}>
              <h3>CERTIFICATION</h3>
              <p style={{fontSize: 18}}>With over 280+ certification to choose from, knowledge city gives you the platform to achieve your dreams.</p>
              <div style={{color: COLORS.baseColorSix, fontSize: 16, fontStyle: 'italic', fontWeight: 'bold'}}>Get Certified today</div>
            </div>
          </div>
        </div>

        <div style={{paddingLeft: 100}}>
          <h2>LEARN ANYTHING, FROM ANYWHERE, AT ANYTIME.</h2>
        </div>
      </div>

    </>




  )
}

export default Home
