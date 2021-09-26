import React from "react";
import "./Portfolio.css"

function Portfolio() {
  return (


<main>
<h1>Projects</h1>

<section id="listedProjects">

  <ul class="styled">

    <li>
      <div>
        <h3>Machine Learning-NBA</h3>
        <p className="portfolioP">Exploration in machine learning using NBA basketball <br></br> game data in effort to predict game outcomes.</p>
        <table>
          <tr>
            <td><a href="https://github.com/arerickson28/Machine-Learning-NBA">Project Repository</a></td>
          </tr>
          <tr>
            {/* <!-- <td><a href="#">Deployed Project</a></td> --> */}
          </tr>
        </table> 
      </div>
    </li>

    <li>
      <div>
        <h3>Weather Dashboard</h3>
        <p className="portfolioP">Search For Weather Conditions In  Any Major City</p>
        <table>
          <tr>
            <td><a href="https://github.com/arerickson28/weather-dashboard">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="https://arerickson28.github.io/weather-dashboard/">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li>

    <li>
      <div>
        <h3>Stock-Finder</h3>
        <p className="portfolioP">Search a company's stock information and <br></br> view relavent articles</p>
        <table>
          <tr>
            <td><a href="https://github.com/arerickson28/stock-finder">Project Repository</a></td>
          </tr>
          {/* <!-- <tr>
            <td><a href="https://arerickson28.github.io/stock-finder/">Deployed Project</a></td>
          </tr> --> */}
        </table> 
      </div>
    </li>

    

   


    
  </ul>

  <ul class="styled">

    {/* <!-- <li>
      <div>
        <h3>Day-Planner</h3>
        <p>Little description</p>
        <table>
          <tr>
            <td><a href="https://github.com/arerickson28/day-planner">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="https://arerickson28.github.io/day-planner/">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li> --> */}

   <li>
      <div>
        <h3>Code Quiz</h3>
        <p className="portfolioP">A timed multiple choice quiz utilizing local storage. <br></br> Can you beat your high score?</p>
        <table>
          <tr>
            <td><a href="https://github.com/arerickson28/code-quiz">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="https://arerickson28.github.io/code-quiz/">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li>


    <li>
      <div>
        <h3>Tech Blog</h3>
        <p className="portfolioP">The tech blog is a full-stack application utilizing node, <br></br> express, sequelize, and handlebars</p>
        <table>
          <tr>
            <td><a href="https://github.com/arerickson28/tech-blog">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="https://gr8-blog.herokuapp.com/">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li>
    
    {/* <!-- <li>
      <div>
        <h3>Machine Learning-NBA</h3>
        <p>Little description</p>
        <table>
          <tr>
            <td><a href="#">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="#">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li> --> */}
    
  </ul>




 
</section>


</main>




  );
}

export default Portfolio;