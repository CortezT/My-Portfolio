import React from 'react';
import './style.css';

function AboutMe() {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <img src="Face-Photo.JPG" alt="Trystan Cortez" />
            <p>
                I love video games and how they work in the background, which is why I have put my
                foot in the door of coding. I love to explore new territories of coding and design by making
                simple mods for video games. I have dabbled in a little bit of Python but have found
                that I like javaScript more. My ultimate goal is to learn C++ later in my career as a
                coder so that I can focus more on Game design.
            </p>
            <p>
                Currently I am in the Texas Army National Guard and have been over seas on Deployment.
                Being overseas was an Interesting experience for me and I wish to go back and explore other countries.
                My all time dream location to visit is Japan during the Cherry Blossom season beacuse those trees
                are the prettiest trees on planet Earth and they take my breath away everytime is see one.

            </p>
        </div>
    );
}

export default AboutMe;