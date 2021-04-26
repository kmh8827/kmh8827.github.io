import React from "react";

function Contact() {
    return (
        <div>
            <main class="container bg-dark">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="page-header">
                            <h1 class="headingStyle">Contact</h1>
                        </div>
                        <hr />
                    </div>
                </div>
                <section class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                        </div>
                    </div>
                </section>
                <section class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                        </div>
                    </div>
                </section>
                <section class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-light mb-3">Submit</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default Contact;