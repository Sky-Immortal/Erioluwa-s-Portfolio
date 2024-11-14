import { Component} from "react";
import SocialButton from "./social_button.js"; 
import TypeWriter from "./typeWriter.js";



class Hero extends Component
{

    scrollToGallery = () => {
        const gallerySection = document.getElementById('list-item-3');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    
    // Render method to display the component
    render()
    {
        // Main container for the hero section
        return(
            <div className="container-fluid hero position-relative">
                <div className="row ">
                    <div className="col-12 text-center">

                        {/* TypeWriter component displaying a welcome message */}
                        <TypeWriter text="I'm creative. I'm hard working. I'm ..." className="hero__aboutme" data-aos="fade-up"  as="p" />

                        {/* Main heading with animation attributes */}
                        <h1  data-aos="zoom-in"  data-aos-duration="750" className="color-secondary" >ERIOLUWA ADEAGA </h1>
                        
                        {/* Divider with animation */}
                        <span className="divider" data-aos="zoom-out-right"></span>

                        
                    </div>
                    <div className="col-12 text-center">
                        <button 
                            className="btn btn__split btn__split-secondary px-5 py-3 m-3" 
                            data-aos="zoom-in-up" 
                            data-aos-duration="1000" 
                            onClick={this.scrollToGallery}
                        >
                            Designs
                        </button>
                    </div>
                </div>

                 {/* SocialButton component for social media links */}
                <SocialButton />

            </div>
           

      )
    }
}

// Export the Hero component for use in other parts of the application
export default Hero