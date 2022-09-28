import React from 'react'
import { Image } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { IoChevronDownSharp } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import { COLORS } from '../../utills/Tools';
import { IoEllipsisHorizontal } from "react-icons/io5"




const NavBarLogo = () => {
  return (
    <div className='NavBar' style={{ paddingLeft: 50, paddingRight: 30, backgroundColor: COLORS.baseColorTwo, marginTop: 10, marginBottom: 100 }}>
      <div className='NavBarLogo' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={require('../../images/Logopit_1612880733521.png')} style={{ width: 200, height: 100 }} />
        </div>

        <div>
          <Form>
            <Form.Control type="text" placeholder="What do you want to learn?" style={{ height: 40, width: 250 }} />
          </Form>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 40 }}>
          <Button variant="primary" type="link" style={{
            height: 35, width: 130, color: COLORS.baseColorOne, backgroundColor: COLORS.baseColorTwo, fontWeight: 'bold', marginRight: 10}}>
            Category
          </Button>

          <div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
            <div style={{ color: COLORS.baseColorSeven }}>
              <h4>Pages</h4>
            </div>
            <div>
              <IoChevronDownSharp />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
            <div style={{ color: COLORS.baseColorSeven }}>
              <h4>Accounts</h4>
            </div>
            <div>
              <IoChevronDownSharp />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", marginRight: 20, color: COLORS.baseColorSeven }}>
            <div>
              <h4>More</h4>
            </div>
            <div>
              <IoChevronDownSharp />
            </div>
          </div>

          <div style={{ paddingRight: 60 }}>
            <IoEllipsisHorizontal />
          </div>

          <h6>V 2.0</h6>
        </div>



      </div>
    </div>
  )
}

export default NavBarLogo
