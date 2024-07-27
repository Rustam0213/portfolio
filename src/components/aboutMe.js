import React from "react";
import "./styles.css";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="row">
        <img className="bitmoji" src="filestore/bitmoji.png" alt="Bitmoji" />
        <div className="biography">
          <h2>About Me</h2>
          <hr />
          <p>
            Hello! I am a passionate and motivated beginner web developer with a strong foundation in various web technologies. My journey into web development has equipped me with skills in GIT, JavaScript, React, TypeScript, HTML, CSS, Python, and Django.
          </p>
          <p>
            I pride myself on being a quick learner and an adaptable professional, always eager to embrace new challenges and technologies. This adaptability is further enhanced by my proficiency in four languages: Ukrainian, Russian, Polish, and English, allowing me to communicate and collaborate effectively in diverse environments.
          </p>
          <p>
            My goal is to leverage my skills and enthusiasm to contribute to innovative projects and to continue growing as a developer. I am excited about the opportunities ahead and am committed to delivering high-quality, user-friendly web applications.
          </p>
          <p>
            Feel free to explore my portfolio and get in touch if you'd like to discuss potential collaborations or opportunities!
          </p>
        </div>
      </div>
    </div>
  );
}
