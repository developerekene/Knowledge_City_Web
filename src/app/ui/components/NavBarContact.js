import React from 'react'
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { COLORS } from '../../utills/Tools';


const NavBarContact = () => {
    return (
        <div className='navBar' style={{ paddingLeft: 100, paddingRight: 100, backgroundColor: COLORS.baseColorSix, display: 'flex', justifyContent: "space-between" }}>
            <div className='navBarcontact' style={{ display: "flex", alignItems: "center", }}>
                <div style={{ display: "flex", alignItems: "center", marginRight: 20, color: COLORS.baseColorTwo }}>
                    <div style={{ marginRight: 10, }}>
                        <IoCallOutline />
                    </div>
                    <div>
                        <h4>07068815984</h4>
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", color: COLORS.baseColorTwo }}>
                    <div style={{ marginRight: 10 }}>
                        <IoMailOutline />
                    </div>
                    <div>
                        <h4>hr@Knowledgecity.com</h4>
                    </div>
                </div>
            </div>

            <div className='navBarLogo' style={{ display: "flex", alignItems: "center", color: COLORS.baseColorTwo }}>

                <div style={{ marginRight: 5 }}>
                    <h4>Login</h4>
                </div>
                <div style={{ marginRight: 5 }}>
                    <h4>|</h4>
                </div>
                <div>
                    <h4>Join for free</h4>
                </div>


            </div>
        </div>

    )
}

export default NavBarContact
