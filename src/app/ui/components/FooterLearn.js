import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { COLORS } from '../../utills/Tools';
import { SIZES } from '../../utills/Tools';

const FooterLearn = () => {
    return (
        <div className='footer' style={{backgroundColor: COLORS.baseColorOne, paddingTop: 10, paddingBottom: 30, height: 300}}>
            <div style={{paddingLeft: 60}}>
                <h3 style={{color: COLORS.baseColorTwo}}>Learn anything, from anywhere, at anytime.</h3>
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 95, paddingRight: 70}}>
                <div style={{ alignItems: 'centre', width: 130 }}>
                    <h4 style={{color: COLORS.baseColorSix}}>TOP COURSES</h4>
                    <div style={{color: COLORS.baseColorTwo}}>
                    Business
                    Computer Science
                    Language
                    Arts / Humanity
                    Communication
                    </div>
                </div>

                <div style={{ alignItems: 'centre', width: 180 }}>
                    <h4 style={{color: COLORS.baseColorSix}}>ABOUT KNOWLEDGE CITY</h4>
                    <div style={{color: COLORS.baseColorTwo}}>
                    About Us
                    Knowledge City For Student
                    Knowledge City For Facilitators
                    Terms And Conditions
                    Contacts
                    FAQ's
                    </div>
                </div>

                <div style={{ alignItems: 'centre', width: 150,}}>
                    <h4 style={{color: COLORS.baseColorSix}}>BECOME A PART OF OUR COMMUNITY</h4>
                    <div style={{color: COLORS.baseColorTwo}}>
                    About Us
                    Knowledge City For Student
                    Knowledge City For Facilitators
                    Terms And Conditions
                    Contacts
                    FAQ's
                    </div>
                </div>

                <div>
                    <h4 style={{color: COLORS.baseColorSix}}>SIGN UP TO OUR NEWSLETTER</h4>
                    <p style={{color: COLORS.baseColorTwo}}>Get the first looks at new drops, like courses, books, sales and offers</p>
                    <div>
                        <Form>
                            <Form.Control type="text" placeholder="" style={{ height: 40, width: 470 }} />
                        </Form>
                    </div>
        
                        <Button variant="primary" type="link" style={{
                            height: 50, width: 250, backgroundColor: COLORS.baseColorSix, color: COLORS.baseColorTwo,
                            borderColor: COLORS.baseColorSix, fontWeight: 'bold', marginTop: 20, size: SIZES.constSize2}}>
                            SUBSCRIBE
                        </Button>
                    
                </div>
            </div>
        </div>
    )
}

export default FooterLearn
