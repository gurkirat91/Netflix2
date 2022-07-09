import React from "react";
// import '../css/Register.css';
function Register(){
    return <div class="container">
            

    <nav class="navbar">
        <div class="left">
            <img src="https://i.ibb.co/r5krrdz/logo.png" alt=""/>
        </div>
        <div class="right">
            <button><a href="/signin">Sign In</a></button>
        </div>
    </nav>


    {/* <!-- <div class="title"> --> */}
        <div class="content">
        <div class="register">
          <h1>Welcome back!</h1>
          <h1>Joining Netflix is easy.</h1><br />

          {/* <!-- <form action="/" method="post"> --> */}
              <h6>Enter your password and you'll be watching in no </h6>
              <h6>time.</h6>
              {/* <!-- <div class="email"> --> */}
                  {/* <!-- <input type="email" name="email" placeholder="Email address"> --> */}
                  {/* <!-- <button type="submit">Get Started></button> --> */}
              </div>
          {/* <!-- </form> --> */}
        </div>
        <div class="form">
          <form action="/register" method="post">
            {/* <!-- Email input --> */}
            <div class="form-outline mb-4">
              {/* <!-- <label class="form-label" for="form2Example1">Email address</label> --> */}
              <input type="email" id="form2Example1" class="form-control" name="username"  />
            </div>

            {/* <!-- Password input --> */}
            <div class="form-outline mb-4">
              {/* <!-- <label class="form-label" for="form2Example2">Password</label> --> */}
              <input type="password" id="form2Example2" class="form-control" name="password" placeholder="Enter Your Password" />
            </div>

            {/* <!-- Submit button --> */}
            <button class="xbt" type="submit">Next</button>

          </form>
        </div>














        </div>
}       

export default Register;