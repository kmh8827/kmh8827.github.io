import React from "react";
import SelfPicture from "../assets/images/self-picture2.jpg";
import "../assets/css/Homepage.css";

function HomePage() {
    return (
        <div className="body">
            <main class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                            <h1 class="headingStyle">About Me</h1>
                        <hr />
                        <div class="row">
                            <section class="col-md-6">
                                <img src={SelfPicture} height="70%" width="60%" alt="" className="selfPicture"/>
                            </section>
                            <aside class="col-md-6">
                                <p class="content">My name is Kevin Hellman. I was born in Durham, North Carolina, but moved shortly after to Apex. I went to Apex elementary, middle, and high school.</p>
                                <p class="content">I graduated from N.C. State University with a bachelor's degree in Psychology. During the Covid-19 Pandemic I saw an opportunity to go back to school and learn programming.</p>
                                <p class="content">I attend a bootcamp from UNC Chapel Hill at the moment.</p>
                                <p class="content">If you would like to reach me you can do so at kevinhellman94@gmail.com</p>
                            </aside>
                        </div>
                    </div>
                </div>
                <br />
            </main>
        </div>
    )
}

export default HomePage;