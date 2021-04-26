import Project from "../components/Project";
import TravelBuddy from "../assets/project1.png";
import Dumbbells from "../assets/dumbells.png";
import EmployeeDirectory from "../assets/employeeDirectory.png";
import Weather from "../assets/weather.png";
import Budget from "../assets/budget.png";
import Burger from "../assets/eatBurger.png";
import "../assets/portfolio.css";

function Portfolio() {
    return (
        <div>
            <main class="container bg-dark">

                    <div class="page-header">
                        <h1 class="headingStyle">Portfolio</h1>
                        <hr class="headingLine" />
                    </div>

                <div class="row">

                    <div class="col">
                        <Project
                            image={TravelBuddy}
                            alt="picture of a travel assistance computer application"
                            github="https://github.com/kmh8827/project1-team2"
                            deploy="https://kmh8827.github.io/project1-team2/"
                            text="Link to Deployed Travel Buddy Application"
                        />
                    </div>

                    <div class="col">
                        <Project
                            image={Dumbbells}
                            alt="picture of a workout compantion computer application"
                            github="https://github.com/katemilano/project2"
                            deploy="https://project2-kate.herokuapp.com/"
                            text="Link to a Deployed Dumbbells for Dummies Application"
                        />
                    </div>

                </div>

                <div class="row">
                <div class="col">
                        <Project
                            image={EmployeeDirectory}
                            alt="picture of a sortable list of Randomly Generated Employees"
                            github="https://github.com/kmh8827/EmployeeDirectory"
                            deploy="https://kmh8827.github.io/EmployeeDirectory"
                            text="Link to an Employee Directory that sorts a list of employees using React and is deployed on github pages"
                        />
                    </div>

                    <div class="col">
                        <Project
                            image={Weather}
                            alt="picture of an weather application that gives forecasts for a city"
                            github="https://github.com/kmh8827/5DayForcast"
                            deploy="https://kmh8827.github.io/5DayForcast"
                            text="Link to Deployed Weather Forecast Application"
                        />
                    </div>
                </div>

                <div class="row">
                <div class="col">
                        <Project
                            image={Budget}
                            alt="picture of a travel assistance computer application"
                            github="https://github.com/kmh8827/OfflineBudgetTracker"
                            deploy="https://hellmanofflinebudgetapp.herokuapp.com/"
                            text="Link to Deployed Travel Buddy Application"
                        />
                    </div>

                    <div class="col">
                        <Project
                            image={Burger}
                            alt="picture of a travel assistance computer application"
                            github="https://github.com/kmh8827/Eat-da-burger"
                            deploy="https://hellman-eat-the-burger.herokuapp.com/"
                            text="Link to Deployed Burger Eating Application"
                        />
                    </div>
                </div>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
};

export default Portfolio;