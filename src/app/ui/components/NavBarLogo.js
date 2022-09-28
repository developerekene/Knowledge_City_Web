import React from 'react'
import { Image } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { IoChevronDownSharp } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import { COLORS } from '../../utills/Tools';




const NavBarLogo = () => {
  return (
    <div className='NavBar' style={{ paddingLeft: 50, paddingRight: 50, backgroundColor: COLORS.baseColorTwo, marginTop: 10, marginBottom: 100}}>
      <div className='NavBarLogo' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <Image src={require('../../images/Logopit_1612880733521.png')} style={{ width: 200, height: 100 }} />
        </div>

        <div>
          <Form>
            <Form.Control type="text" placeholder="What do you want to learn?" style={{ height: 40, width: 300 }} />
          </Form>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 20 }}>
          <div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
            <div style={{ color: COLORS.baseColorSeven }}>
              <h4>Courses</h4>
            </div>
            <div>
              <IoChevronDownSharp />
            </div>
          </div>

          <div style={{ marginRight: 10, color: COLORS.baseColorSeven }}>
            <h4>Idea Box</h4>
          </div>

          <div style={{ marginRight: 10, backgroundColor: COLORS.baseColorSix }}>
            <Button variant="primary" type="link" style={{
              height: 55, width: 180, backgroundColor: COLORS.baseColorSix, color: COLORS.baseColorTwo,
              borderColor: COLORS.baseColorSix, fontWeight: 'bold'}}>
              BOOKS
            </Button>
          </div>

          <div style={{ marginRight: 10, backgroundColor: COLORS.baseColorSix }}>
            <Button variant="primary" type="link" style={{
              height: 55, width: 180, backgroundColor: COLORS.baseColorSix, color: COLORS.baseColorTwo,
              borderColor: COLORS.baseColorSix, fontWeight: 'bold'}}>
              ARTICLES
            </Button>
          </div>

          <div style={{ display: "flex", alignItems: "center", marginRight: 20, color: COLORS.baseColorSeven }}>
            <div>
              <h4>More</h4>
            </div>
            <div>
              <IoChevronDownSharp />
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default NavBarLogo
