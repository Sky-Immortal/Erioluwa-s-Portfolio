import { Component} from "react";
import ScrollSpy from "./scrollspy.js"; 



class About extends Component
{
    
    render()
    {
        return(
            // Main container for the About section with some margin
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 text-center mb-5">

                        {/* Header for the About section with animation on scroll */}
                        <h2 data-aos="zoom-in">About me</h2>

                        {/* Divider element with animation on scroll */}
                        <span className="divider" data-aos="zoom-out-right"></span>

                        {/* Paragraph describing the individual with animation on scroll */}
                        <p className="hero__aboutme" data-aos="fade-up">I'm Erioluwa, a passionate graphics designer with a unique flair 
                            for transforming ideas into visual experiences that captivate and communicate effectively. My design journey 
                            began with a fascination for digital art, which evolved into a strong foundation in various graphic design tools, 
                            including Adobe Photoshop, Illustrator, Lightroom, and InDesign. With an eye for detail and an instinct for color theory, 
                            composition, and typography, I aim to produce designs that resonate with audiences and align with brand objectives. </p>
                    </div>
                </div>

                {/* Including the ScrollSpy component */}
                <ScrollSpy />
            </div>
           

      )
    }
}

export default About