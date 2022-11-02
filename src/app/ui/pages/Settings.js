import React from 'react'
import { Image, Button } from 'react-bootstrap'
import {
  IoCheckmarkCircleSharp,
  IoStar,
  IoPersonSharp,
  IoDocumentText,
  IoGridOutline,
  IoTodayOutline,
  IoHelpCircleOutline,
  IoOpenOutline,
  IoPeople,
  IoBasketOutline,
  IoStarOutline,
  IoPencil,
  IoSquareOutline,
  IoSettingsOutline,
  IoTrashOutline,
  IoExitOutline
} from "react-icons/io5";

const Settings = () => {
  return (
    <div className='settingsPage'>
      <div className='settingsWholeBodyDiv'>
        <div className='settingsTopDiv'>
          <div className='profileAndDetails'>
            <div className='settingsImageDiv'>
            <Image className='settingsImage' src={require("../../images/jpeg/istockphoto6.jpeg")}/>
            </div>
            <div className='settingsProfileDetails'>
              <h3 className='SettingsProfileName'>Lori Stephens <IoCheckmarkCircleSharp/></h3>
              <div className='settingsProfileH5'>
                <h5 className='settingsStarRating'><IoStar/> 4.5/5.0</h5>
                <h5 className='settingsEnrolled'><IoPersonSharp/> 12k Enrolled Students</h5>
                <h5 className='settingsCourses'><IoDocumentText/> Courses</h5>
              </div>
            </div>
          </div>
          <div className='settingscreateACourseBtnDiv'>
            <Button className='createACourseBtn'>Create a Course</Button>
          </div>
        </div>

        <div className='settingsSecondDiv'>
          <div className='settingsSecondDivLeft'>
          <div className='individualDiv'><IoGridOutline/><h4 className='dashboardAndOthers'> Dashboard</h4></div>
          <div className='individualDiv'><IoTodayOutline/><h4 className='dashboardAndOthers'> My Courses</h4></div>
            <div className='individualDiv'><IoHelpCircleOutline/> <h4 className='dashboardAndOthers'>  Quiz</h4></div>
            <div className='individualDiv'><IoOpenOutline/> <h4 className='dashboardAndOthers'>  Earnings</h4></div>
            <div className='individualDiv'><IoPeople/> <h4 className='dashboardAndOthers'>  Students</h4></div>
            <div className='individualDiv'><IoBasketOutline/> <h4 className='dashboardAndOthers'>  Others</h4></div>
            <div className='individualDiv'><IoStarOutline/> <h4 className='dashboardAndOthers'>  Reviews</h4></div>
            <div className='individualDiv'><IoPencil/> <h4 className='dashboardAndOthers'>  Edit Profile</h4></div>
            <div className='individualDiv'><IoSquareOutline/> <h4 className='dashboardAndOthers'>  Payouts</h4></div>
            <div className='individualDiv'><IoSettingsOutline/> <h4 className='dashboardAndOthers'>  Settings</h4></div>
            <div className='individualDiv'><IoTrashOutline/> <h4 className='dashboardAndOthers'>  Delete Profile</h4></div>
            <div className='signOutDiv'><IoExitOutline/> <h4 className='signOut'>  Sign Out</h4></div>
          </div>

          <div className='settingsSecondDivRight'>
            <div className='settingsHeadingDiv'> <h2 className='settingsHeading'>Settings</h2></div>
            <div className='profileSettingsHeadingDiv'><h3 className='profileSettingsHeading'>Profile Settings</h3></div>
            <div className='notificationsSettingsDiv'><h3 className='notificationsSettingsHeading'>Notifications Settings</h3></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
