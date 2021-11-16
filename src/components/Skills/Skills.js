import React from "react";
import './Skills.css'
import analytics from "../../images/analytics.png"
import computer from "../../images/computer.png"
function Skills() {
  return (
<>
    <section className="skillsSection" id="displayIcons">
    <div id="codingLangs">
      <i class="fab fa-python fa-3x"></i>
      <i class="far fa-file-excel fa-3x"></i>
      <i class="fas fa-database fa-3x"></i>
      <i class="fab fa-js-square fa-3x"></i>
      <i class="fab fa-react fa-3x"></i>
      <i class="fab fa-node-js fa-3x"></i>
      <i class="fab fa-html5 fa-3x"></i>
      <i class="fab fa-css3-alt fa-3x"></i>
      {/* <!-- <i class="fab fa-bootstrap fa-3x"></i>   --> */}
    </div>
  
    {/* <!-- <p>Have an idea for a web application but don't know how to make it a reality? I will communicate with you through each stage of development to manafest your vision!</p> --> */}
  
    <h1 id="skillsH1">Full-Stack Web Development & Data Analytics</h1>
  
    <hr></hr>
    <p>My experience with the following tools comes from the University of Minnesota Data Visualization & Analytics and Full-Stack Web development bootcamps along with independent study and practice.</p>
  </section>
  
  <main>
  <div id="skillsDiv">
 
  <img className="icons" src={analytics} alt="data-graphic"></img>
 
   
  <section id="dataSkills">
  
    <h3>Microsoft Excel</h3>
    <p>(Macros, Pivot Tables)</p>
    <p>____</p>
  

    <h3>Python</h3>
    <p>(JupyterNotebook, Pandas, Matplotlib, <br></br>Flask, BeautifulSoup, Scikit-learn, Turtle)</p>
    <p>____</p>
    <h3>Tableau</h3>
    <p>____</p>
    <h3>Databases</h3>
    <p>(PostGres SQL, MySQL, MongoDB)</p>
    <p>____</p>
    <h3>JavaScript</h3>
    <p>(JQuery, Leaflet, React, Node, Express)</p>
    <p>____</p>
    <h3>HTML5/CSS</h3>
    <p>(FlexBox, BootStrap)</p>


  
  </section>

  <img className="icons" src={computer} alt="computer-graphic"></img>

 
</div>
</main>


  {/* <main> */}
    {/* <div id="skillsDiv">
    <section className="skillsSection" id="dataSkills">
      <img src={analytics} alt="data-graphic"></img>
      <h1>Data</h1>
      <h3>Microsoft Excel</h3>
      <p>(Macros, Pivot Tables)</p>
      <p>____</p>
      <h3>Python</h3>
      <p>(JupyterNotebook, Pandas, Matplotlib, <br></br>Flask, BeautifulSoup, Scikit-learn, Turtle)</p>
      <p>____</p> */}
      {/* <!-- <ul>
        <li>JupyterNotebook</li>
        <li>Pandas</li>
        <li>Matplotlib</li>
        <li>Flask</li>
        <li>Beautiful Soup</li>
        <li>Scikit-learn</li>
        <li>Turtle</li>
      </ul> --> */}
      {/* <h3>Tableau</h3>
      <p>____</p>
      <h3>SQL</h3>
      <p>(PostGres, MySQL)</p> */}
      {/* <!-- <ul>
        <li>PostGres SQL</li>
      </ul> --> */}
  
    
    {/* </section> */}
  
    {/* <!-- <div id="decorativeSunflower">
    <img src="../images/sunflower-clipart-md.png">
    </div> --> */}
  
    
    {/* <section className="skillsSection"id="webSkills">
      <img src={computer} alt="computer-graphic"></img>
      <h1>Web</h1>
      <h3>JavaScript</h3>
      <p>(JQuery, Leaflet)</p>
      <p>____</p> */}
      {/* <!-- <ul>
        <li>JQuery</li>
        <li>Leaflet.js</li>
      </ul> --> */}
    {/* <h3>React.js</h3>
    <p>____</p>
    <h3>Node.js</h3>
    <p>____</p> */}
  
    {/* <h3>HTML5/CSS</h3> */}
    {/* <!-- <h3>-CSS-</h3> --> */}
    {/* <p>(BootStrap)</p>
    <p>____</p> */}
    {/* <!-- <ul>
      <li>BootStrap</li>
    </ul> --> */}
    {/* <h3>Mongo DB</h3>
    </section>
  </div>
  </main> */}
  
  <section className="skillsSection"id="tutorSkills">
    <h1>Mentoring & Tutoring</h1>
    <p>Throughout my journey of becoming a developer, I've had the fortune of terrific teachers and mentors guiding me on my way. In the spirit of paying it forward, I offer tutoring and/or mentoring sessions for beginner coders. I've always loved sharing the joy of learning and have firsthand experience from working as an academic tutor for College Tutors and serving as a T.A. for a rigorous economics course at the University Of Vermont.</p>
  </section>



</>

  );
}

export default Skills;