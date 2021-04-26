import Project from "../components/Project";

function Portfolio() {
    return (
        <div>
            <main class="container bg-dark">
                <div class="row">
                    <div class="page-header">
                        <h1 class="headingStyle">Portfolio</h1>
                        <hr />
                    </div>

                    <div class="col">
                        <Project
                            image="../assets/project1.png"
                            alt="picture of a travel assistance computer application"
                            github="https://github.com/kmh8827/project1-team2"
                            deploy="https://kmh8827.github.io/project1-team2/"
                            text="Link to Deployed Travel Buddy Application"
                        />
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Portfolio;