import React from "react";
import Footer from "./Footers";
import '../css/Signin.css';
function SignIn(){
    return <header class="showcase">
    <div class="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png"/>
    </div>
    <div class="showcase-content">
        <div class="formm">
            <form action="/login" method="post">
                <h1>Sign In</h1>
                <div class="info">
                    <input class="email" name="username" type="email" placeholder="Email or phone number"/> 
                    <input class="email" name="password" type="password" placeholder="Password"/>
                </div>
                <div class="btn">
                    <button class="btn-primary" type="submit">Sign In</button>
                </div>
                <div class="help">
                    <div>
                        <input value="true" type="checkbox"/><label>Remember me</label>
                    </div>

                    <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>

                </div>

            </form>

        </div>
        <div class="signup">
            <p>New to Netflix ?</p>
            <a href="/">Sign up now</a>
        </div>
        <div class="more">
            <p>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
            </p>
        </div>


    </div>
    <Footer/>
    </header>

}
export default SignIn;