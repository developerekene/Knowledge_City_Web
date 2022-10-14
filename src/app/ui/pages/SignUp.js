import React from 'react'
// import Form from 'react-bootstrap/Form'
// import FormLabel from 'react-bootstrap/FormLabel'

const Signup = () => {
  return (
    <center>
    <div className="signup">
      <div id='signup_side_panel'><p>Knowledge<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City.</p><br/><br/><b>Learn Anything,<br/> From Anywhere,<br/> At Anytime</b></div>
      <div id='signup_form_header'>
        <br/>
        <h1 className='signup_h1'>SignUp</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <form className='signup_form'>
          <div className='name_email'>
            <div className='email_name'>
          <label for="full name">Full Name</label>
          <br/>
          <br/>
          <input type="text" placeholder=' Name'/>
          <br/>
          <br/>
          <br/>
          <label for="email">E-Mail</label>
          <br/>
          <br/>
          <input type="email" placeholder=' E-Mail'/>
          <br/>
            </div>
          <div className='name_dob'>
          <label for="username">UserName</label>
          <br/>
          <br/>
          <input type="text" placeholder=' User Name'/>
          <br/>
          <br/>
          <br/>
          <label for="date">Date Of Birth</label>
          <br/>
          <br/>
          <input type="date"/>
          </div>
          </div>
          <br/>
          <input className="signup_checkbox"type="checkbox"/> I Agree to Terms and Conditions
          <br/>
          <br/>
          <div className='login_alt'>
          <b>Already have an account? <a href="/Login">Login</a></b>
          <br/>
          </div>
          <button className='submit_btn_primary'>Submit</button>
        </form>
        </div>
    </div>
    </center>
    )
}

export default Signup