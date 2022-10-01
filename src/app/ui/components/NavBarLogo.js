import React from "react";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { IoChevronDownSharp } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import { COLORS } from "../../utills/Tools";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const NavBarLogo = () => {
  return (
    <div
      className="NavBar"
      style={{
        paddingLeft: 50,
        paddingRight: 30,
        backgroundColor: COLORS.baseColorTwo,
        marginTop: 10,
        fontFamily: "Times New Roman",
      }}
    >
      <div
        className="NavBarLogo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={require("../../images/png/Logopit_1612880733521.png")}
            style={{ width: 200, height: 100 }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
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
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 40,
          }}
        >
          <Button className="navLogoButton"
            variant="primary"
            type="link"
            // style={{
            //   color: COLORS.baseColorTwo,
            //   backgroundColor: COLORS.baseColorSix,
            // }}
          >
            Category
          </Button>

          <div
            style={{ display: "flex", alignItems: "center", marginRight: 10 }}
          >
            <div style={{  }}>
              <h4>Pages</h4>
            </div>
            <div>
              <IoChevronDownSharp />
            </div>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", marginRight: 10 }}
          >
            <div style={{  }}>
              <h4>Accounts</h4>
            </div>
            <div>
              <IoChevronDownSharp />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <div>
              <h4>More</h4>
            </div>
            <div>
              <IoChevronDownSharp />
            </div>
          </div>

          <div style={{ paddingRight: 60, color: COLORS.baseColorOne }}>
            <IoEllipsisHorizontal />
          </div>

          <h6 style={{ color: COLORS.baseColorOne }}>V 2.0</h6>
        </div>
      </div>
    </div>
  );
};

export default NavBarLogo;
