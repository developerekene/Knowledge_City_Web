import React from "react";

// importing from bootstrap
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// impoting from ionicon5
import { IoChevronDownSharp, IoEllipsisHorizontal, IoSearch} from "react-icons/io5";

// importing from utills
import { COLORS } from "../../utills/Tools";

const NavBarLogo = () => {
  return (
    <nav
      className="NavBar"
      style={{
        paddingLeft: 50,
        paddingRight: 30,
        backgroundColor: COLORS.baseColorTwo,
        marginTop: 10,
        fontFamily: "Times New Roman",
      }}
    >
      <ul
        className="NavBarLogo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <li style={{ display: "flex", alignItems: "center" }}>
          <a href="/">
            <Image
              src={require("../../images/png/Logopit_1612880733521.png")}
              style={{ width: 200, height: 100 }}
            />
          </a>
        </li>

        <li style={{ display: "flex", alignItems: "center" }}>
          <Form>
            <Form.Control
              type="text"
              placeholder="What do you want to learn?"
              style={{ height: 45, width: 250, paddingLeft: 20 }}
            />
          </Form>
          <Button
            variant="primary"
            type="link"
            style={{
              height: 50,
              width: 40,
              color: COLORS.baseColorTwo,
              borderColor: COLORS.baseColorSix,
              backgroundColor: COLORS.baseColorSix,
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            <IoSearch style={{ height: 30, width: 25 }} />
          </Button>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 40,
          }}
        >
          <a href="/category">
            <Button
              className="navLogoButton"
              variant="primary"
              type="link"
              // style={{
              //   color: COLORS.baseColorTwo,
              //   backgroundColor: COLORS.baseColorSix,
              // }}
            >
              Category
            </Button>
          </a>

          <li style={{ alignItems: "center", marginRight: 10 }}>
            <a className="atagLogo" href="#">
              <h4>
                Pages <IoChevronDownSharp/>
              </h4>
            </a>
          </li>

          <li
            style={{ display: "flex", alignItems: "center", marginRight: 10 }}
          >
            <a className="atagLogo" href="#">
              <h4>
                Accounts <IoChevronDownSharp />
              </h4>
            </a>
          </li>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <a className="atagLogo" href="#">
              <h4>
                More <IoChevronDownSharp />
              </h4>
            </a>
          </li>

          <li style={{ paddingRight: 60, color: COLORS.baseColorOne }}>
            <a className="atagLogo">
              <IoEllipsisHorizontal />
            </a>
          </li>

          <li>
            <a className="atagLogo">
              <h6 style={{ color: COLORS.baseColorOne }}>V 2.0</h6>
            </a>
          </li>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarLogo;
