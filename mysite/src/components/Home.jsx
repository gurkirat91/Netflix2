import React from "react";
// import '../css/Home.css';
import Footer from "./Footers";

function Home(){
    let user="";
    function GoToRegister(event){
        console.log(event.target.value);
        user=event.target.value;
    }
    
    const start="Get Started >"
    return <div>
        <div class="container">
        <nav class="navbar">
            <div class="left">
                <img src="https://i.ibb.co/r5krrdz/logo.png" alt=""/>
            </div>
            <div class="right">
                <select name="language" class="language">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>

                <button><a href="/signin">Sign In</a></button>
            </div>
        </nav>

        <div class="title">
            <div class="content">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <form actions="/register">
                    <h3 >Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div class="email">
                        <input type="email" name="email" placeholder="Email address"  />
                        <button type="submit"><a href="/register">{start}</a></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
}
export default Home;