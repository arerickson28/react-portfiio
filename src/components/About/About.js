import React from "react";
import './About.css'
import Me from "../../images/me.jpg"
function About() {
  return (
    <>
        <main>
            <div id="bio">

                <img id="bio-pic" src= {Me} alt="bio-pic"></img>
                <p>Data analyst and full-stack developer with a background in economics and physical sciences. 
                    Enjoys thinking in systems and connecting details to a bigger picture, 
                    recognizes the importance of storytelling and its role in decision making, 
                    has a desire to learn and grow in capabilities; and believes in teamwork and 
                    leveraging skillset diversity.
                </p>

                <h3>Why Sunflowers?</h3>

                <p>
                When I look at a sunflower, it seems to say "I'm happy to be here" which is the attitude with which I aim to live my life. Sunflowers can be symbolic of many things, including but not limited to, joy, celebration, gratitude, friendship, community, and kindness. Above all, however, they represent choice. Whether I'm practicing data analytics, web development, or dancing west coast swing, I get to choose how I show up to each activity. The qualities I consisistently choose to bring to my work include curiosity, quality-work, and a commitment to continued growth and development.
                </p>
            
                
            </div>

        </main>
    </>
  );
}

export default About;