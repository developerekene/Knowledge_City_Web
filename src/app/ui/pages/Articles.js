import React from "react";
import { Button, Image } from "react-bootstrap";
import {
  IoArrowForwardOutline,
  IoPerson,
  IoCalendarOutline,
} from "react-icons/io5";
import { COLORS } from "../../utills/Tools";

const Articles = () => {
  return (
    <div className="articlesPage">
      <div className="articlesFirstDiv">
        <div className="getLatestDiv">
          <h1>Grow your audience right here on Knowledge City</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia
            error facilis, numquam, neque dicta pariatur quos vero in, modi
            commodi praesentium dolore corrupti? Quisquam, itaque.
          </p>
          <Button className="registerBtn" variant="primary" type="link">
            POST ARTICLE
          </Button>
        </div>
      </div>

      <div className="coursesSecondDiv">
        <div className="getSartedContainer">
          <h2 className="h2">GET STARTED</h2>
          <p className="p1">
            Join over 10,000 students online making use of our platform to
            increase their knowledge in different variety of subjects.
          </p>
          <a href="#">
            <h5 className="h5">Learn more</h5>
          </a>
        </div>

        <div className="getSartedContainer">
          <h2 className="h2">PICK COURSE</h2>
          <p className="p1">
            Begin your journey to becoming a professional in your field.
            Register a course today.
          </p>
          <a href="#">
            <h5 className="h5">Pick a course</h5>
          </a>
        </div>

        <div className="getSartedContainer">
          <h2 className="h2">CERTIFICATION</h2>
          <p className="p1">
            With over 280+ certification to choose from, knowledge city gives
            you the platform to achieve your dreams.
          </p>
          <a href="#">
            <h5 className="h5">Get Certified today</h5>
          </a>
        </div>
      </div>

      <h1 className="recentArticlesHeading">RECENTS ARTICLES</h1>

      <div className="recentArticlesDiv">
        <div className="articlesLeftDiv">
          <Image
            className="firstAdminImage"
            src={require("../../images/png/writers_employability.png")}
          />

          <Button className="adminBtn" variant="primary" type="link">
            <div className="personAdmin">
              <IoPerson /> Admin
            </div>{" "}
            <div className="calenderAdmin">
              <IoCalendarOutline /> January 14th, 2019.
            </div>{" "}
            <div>2 Comments</div>
          </Button>

          <a href="#">
            <h2 className="whyShould">
              Why should boys have all the fun? it's the women who are making
              india an alcohol-loving contry
            </h2>
          </a>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            voluptas deserunt beatae adipisci iusto totam placeat corrupti
            ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate,
            numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
            illum similique veniam tempore unde?
          </p>

          <Button className="readMoreBtnarticles" variant="primary" type="link">
            READ MORE <IoArrowForwardOutline />
          </Button>

          <Image
            className="firstAdminImage"
            src={require("../../images/jpeg/Dog.jpg")}
          />

          <Button className="adminBtn" variant="primary" type="link">
            <div className="personAdmin">
              <IoPerson /> Admin
            </div>{" "}
            <div className="calenderAdmin">
              <IoCalendarOutline /> January 16th, 2019.
            </div>{" "}
            <div>7 Comments</div>
          </Button>

          <a href="#">
            <h2 className="whyShould">
              Why should boys have all the fun? it's the women who are making
              india an alcohol-loving contry
            </h2>
          </a>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            voluptas deserunt beatae adipisci iusto totam placeat corrupti
            ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate,
            numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
            illum similique veniam tempore unde?
          </p>

          <Button className="readMoreBtnarticles" variant="primary" type="link">
            READ MORE <IoArrowForwardOutline />
          </Button>

          <Image
            className="firstAdminImage"
            src={require("../../images/jpeg/Biker.jpg")}
          />

          <Button className="adminBtn" variant="primary" type="link">
            <div className="personAdmin">
              <IoPerson /> Admin
            </div>{" "}
            <div className="calenderAdmin">
              <IoCalendarOutline /> January 19th, 2019.
            </div>{" "}
            <div>5 Comments</div>
          </Button>

          <a href="#">
            <h2 className="whyShould">
              New data recording system to better analyse road accidents
            </h2>
          </a>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            voluptas deserunt beatae adipisci iusto totam placeat corrupti
            ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate,
            numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
            illum similique veniam tempore unde?
          </p>

          <Button className="readMoreBtnarticles" variant="primary" type="link">
            READ MORE <IoArrowForwardOutline />
          </Button>

          <Image
            className="firstAdminImage"
            src={require("../../images/jpeg/Ship.jpg")}
          />

          <Button className="adminBtn" variant="primary" type="link">
            <div className="personAdmin">
              <IoPerson /> Admin
            </div>{" "}
            <div className="calenderAdmin">
              <IoCalendarOutline /> January 21, 2019.
            </div>{" "}
            <div>12 Comments</div>
          </Button>

          <a href="#">
            <h2 className="whyShould">
              New data recording system to better analyse road accidents
            </h2>
          </a>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            voluptas deserunt beatae adipisci iusto totam placeat corrupti
            ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate,
            numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
            illum similique veniam tempore unde?
          </p>

          <Button className="readMoreBtnarticles" variant="primary" type="link">
            READ MORE <IoArrowForwardOutline />
          </Button>
        </div>
        <div className="articlesRightDiv">
          <h1 className="categoryHeading">Category</h1>

          <div className="categoryBtnDiv">
            <Button className="categoryBtns" variant="primary" type="link">
              <p>
                <a className="categoryAnchor" href="#">
                  Software
                </a>
              </p>{" "}
              <p>(05)</p>
            </Button>

            <Button className="categoryBtns" variant="primary" type="link">
              <p>
                <a className="categoryAnchor" href="#">
                  Technology
                </a>
              </p>{" "}
              <p>(02)</p>
            </Button>

            <Button className="categoryBtns" variant="primary" type="link">
              <p>
                <a className="categoryAnchor" href="#">
                  Lifestyle
                </a>
              </p>{" "}
              <p>(07)</p>
            </Button>

            <Button className="categoryBtns" variant="primary" type="link">
              <p>
                <a className="categoryAnchor" href="#">
                  Shopping
                </a>
              </p>{" "}
              <p>(01)</p>
            </Button>

            <Button className="categoryBtns" variant="primary" type="link">
              <p>
                <a className="categoryAnchor" href="#">
                  Food
                </a>
              </p>{" "}
              <p>(08)</p>
            </Button>
          </div>

          <h1 className="popularArticleHeading">Popular Article</h1>

          <div className="popularArticleDiv">
            <Image
              className="popularArticleImage"
              src={require("../../images/jpeg/Cup-of-tea.jpg")}
            />
            <Button className="popularArticleBtn" variant="primary" type="link">
              <IoCalendarOutline />
              <p>January 14th, 2019.</p> <p>2 Comments</p>
            </Button>
            <a href="#">
              <p className="popularArticleParagraph">
                New data recording system to better analyse road accidents
              </p>
            </a>
          </div>

          <div className="popularArticleDiv">
            <Image
              className="popularArticleImage"
              src={require("../../images/jpeg/green-flower.jpg")}
            />
            <Button className="popularArticleBtn" variant="primary" type="link">
              <IoCalendarOutline />
              <p>January 14th, 2019.</p> <p>2 Comments</p>
            </Button>
            <a href="#">
              <p className="popularArticleParagraph">
                New data recording system to better analyse road accidents
              </p>
            </a>
          </div>

          <div className="popularArticleDiv">
            <Image
              className="popularArticleImage"
              src={require("../../images/jpeg/Groom-bride.jpg")}
            />
            <Button className="popularArticleBtn" variant="primary" type="link">
              <IoCalendarOutline />
              <p>January 14th, 2019.</p> <p>2 Comments</p>
            </Button>
            <a href="#">
              <p className="popularArticleParagraph">
                New data recording system to better analyse road accidents
              </p>
            </a>
          </div>

          <div className="popularArticleDiv">
            <Image
              className="popularArticleImage"
              src={require("../../images/jpeg/white-lady.jpg")}
            />
            <Button className="popularArticleBtn" variant="primary" type="link">
              <IoCalendarOutline />
              <p>January 14th, 2019.</p> <p>2 Comments</p>
            </Button>
            <a href="#">
              <p className="popularArticleParagraph">
                New data recording system to better analyse road accidents
              </p>
            </a>
          </div>

          <div className="popularArticleDiv">
            <Image
              className="popularArticleImage"
              src={require("../../images/jpeg/Abroad-background.jpg")}
            />
            <Button className="popularArticleBtn" variant="primary" type="link">
              <IoCalendarOutline />
              <p>January 14th, 2019.</p> <p>2 Comments</p>
            </Button>
            <a href="#">
              <p className="popularArticleParagraph">
                New data recording system to better analyse road accidents
              </p>
            </a>
          </div>

          <h1 className="popularTagHeading">Popular Tags</h1>
          <div className="popularTagDiv">
            <div className="firstButtonrow">
              <Button className="softwareTagBtn" variant="primary" type="link">
                Software
              </Button>

              <Button
                className="technologyTagBtn"
                variant="primary"
                type="link"
              >
                Technology
              </Button>

              <Button className="travelTagBtn" variant="primary" type="link">
                travel
              </Button>
            </div>

            <div className="secondButtonrow">
              <Button
                className="illustrationTagBtn"
                variant="primary"
                type="link"
              >
                Illustration
              </Button>

              <Button className="designTagBtn" variant="primary" type="link">
                Design
              </Button>

              <Button className="lifestyleTagBtn" variant="primary" type="link">
                Lifestyle
              </Button>
            </div>

            <div className="thirdButtonrow">
              <Button className="loveTagBtn" variant="primary" type="link">
                Love
              </Button>

              <Button className="projectTagBtn" variant="primary" type="link">
                Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
