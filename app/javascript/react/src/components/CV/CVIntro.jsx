import * as React from 'react';

const CVIntro = () => {
  return (
    <div className="cv-intro">
      <h1 className="cv-intro-title">
        {' '}
        Here are all the things I've done. Pay attention! 🧐{' '}
      </h1>
      <p className="cv-intro-text">
        {' '}
        I am in my second year of the{' '}
        <a
          href="https://software-engineering.ie/"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-intro-link"
        >
          Immersive Software Engineering
        </a>{' '}
        program in UL. So far I've completed two semesters in college and two
        internships in industry <br />
        <br /> Check out my{' '}
        <a
          href="https://github.com/jeancarson"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-intro-link"
        >
          GitHub
        </a>{' '}
        or{' '}
        <a
          href="https://linkedin.com/in/jean-carson"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-intro-link"
        >
          LinkedIn
        </a>{' '}
        for more!
      </p>
    </div>
  );
};

export default CVIntro;
