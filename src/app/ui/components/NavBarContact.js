import React from "react";

// importing from ionicon5
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

// importing from utills
import { COLORS } from "../../utills/Tools";

const NavBarContact = () => {
  return (
    <nav
      className="navBarContact"
      style={{
        backgroundColor: COLORS.baseColorSix,
      }}
    >
      <ul
        className="navBarcontact"
        style={{ display: "flex", alignItems: "center" }}
      >
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: 20,
            color: COLORS.baseColorTwo,
          }}
        >
          
          <a className="atag" href="#">
            <h4><IoCallOutline /> 07068815984</h4>
          </a>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            color: COLORS.baseColorTwo,
          }}
        >
          <a className="atag" href="#">
            <h4><IoMailOutline /> hr@Knowledgecity.com</h4>
          </a>
        </li>
      </ul>

      <ul className="navBarLogin"
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <li>
          <a className="atag" href="/login" >
            <h4>Login</h4>
          </a>
        </li>

        <li>
          <p className="atag">
            <h4>|</h4>
          </p>
        </li>

        <li>
          <a className="atag" href="/signup">
            <h4>Join for free</h4>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarContact;
