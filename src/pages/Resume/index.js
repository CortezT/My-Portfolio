import React from 'react';
import './style.css';

function Resume() {
    return (
        <div className="resume">
            <h2>Trystan Cortez Resume</h2>

            <section className="education">
                <h3>Education</h3>
                <h4>High School Deploma 2019 (New Waverly High School)</h4>
                <h4>Advanced Individual Training for 14G 2019-2020 (Army - Air Defence Battle Management System Operator)</h4>
                <h4>University of Texas Full Stack Developer Bootcamp 2023-2024</h4>
            </section>

            <section className="experience">
                <h3>Work Experience</h3>
                <h4>Texas Army National Guard</h4>
                <p>- Deployed over seas for 10 months.</p>
                <p>- Deployed to the Texas border for a year and a half as an HR representative.</p>
            </section>

            <section className="skills">
                <h3>Skills</h3>
                <p>
                    I am very skilled at adaptng to new enviroments and being able to learn new material. In the National Guard
                    you are not always doing the MOS you were trained to do and are often found doing other peoples jobs. This happened
                    to me at the Texas border when I was assigned to be ab HR rep for thousands of soldiers in Eagle PASS Texas.
                    I was able to quickly figure out how to do the job and did it with no complaint.Being in the military has
                    taught me a lot about being ready for any obstical that might come my way.
                </p>
                <p>
                    Another skill I have is being able to work in any enviroment and get along with everyone. My team building
                    skills are not an issue and the military has taught me how to be respectful of and understandiong of others.
                    I have worked with many people over the past 5 years in the military allowing me to be subject to all sorts
                    of personalities and culturs. These experiences have helped me become a better teammate no matter where I find myself.
                </p>
            </section>

            <section className="certifications">
                <h3>Certifications</h3>
                <h4>University of Texas Full Stack Web Developer</h4>
            </section>

            <a
                href="/img/Trystan_Cortez_Resume.pdf"
                download
                className="resume-download"
            >
                Download Full Resume Here
            </a>
        </div>
    );
}

export default Resume;