import * as React from 'react';
import { animate, scroll } from 'framer-motion';
import CVElement from './CVElement';
import CVIntro from './CVIntro';
import * as ReactDOM from 'react-dom/client';
import '../../my-styles.css';

const CVOverview = () => {
  const sectionRefs = React.useRef([]); // Array of refs for all CVElement components

  React.useEffect(() => {
    // Attach scroll animations to each CVElement
    sectionRefs.current.forEach((item) => {
      if (item) {
        scroll(animate(item, { opacity: [0, 1, 1, 0] }, { ease: 'linear' }), {
          target: item,
          offset: ['start end', 'end end', 'start start', 'end start'], // Customize scroll offsets
        });
      }
    });
  }, []);

  return (
    <div
      style={{ marginTop: '40px', marginBottom: '80px', textAlign: 'center' }}
    >
      <CVIntro />
      <CVElement
        title="Analog Devices"
        description={
          <>
            I completed a 14 week internship with this leading semiconductor
            manufacturer. I worked in embedded C on encrypting data from a
            sensor to a cloud ☁️ service for a new product. <br />
            <br />
            This was a research heavy role which required a lot of
            experimentation as this had not been achieved with this hardware
            previously <br />
            <br />I also played a lot of pool 😅
          </>
        }
        image="/images/outside-analog.jpg"
        ref={(el) => (sectionRefs.current[0] = el)} // Assign ref
      />
      <CVElement
        title="Intercom"
        description={
          <>
            I spent 10 weeks as an intern here, working in web development on
            the Intercom Messenger team. <br />
            <br />
            I was using Ruby on Rails and React doing a mix of bug 🪳 fixes and
            adding features to the messenger <br />
            <br />
            It was great to work in and really contribute to a production team
            🎉
          </>
        }
        ref={(el) => (sectionRefs.current[1] = el)} // Assign ref
        image="/images/intercom-pool.jpg"
      />
      <CVElement
        title="ISE Block 4"
        description={
          <>
            In this block I studied software design patterns, data structures &
            algorithms, functional programming (Haskell 😵‍💫), operating sytems,
            computer architecture (basic electronics and building circuits ⚡)
            and and hosted my ClubHub app from block 3 on AWS
            <br />
            <br />
            We also learned about event driven programming through C++ and I
            built a GUI for my version of the classic Zork game using QT <br />
            <br />
            This block was also heavy on innovation and professional
            development, learning about things like podcasts & written
            communication. We hosted a hackathon to explore software solutions
            for local charities and later presented our ideas in the format of
            the Amazon 6 page document
            <br />
          </>
        }
        image="/images/gui-zork.png"
        ref={(el) => (sectionRefs.current[2] = el)} // Assign ref
      />
      <CVElement
        title="ISE Block 3"
        description={
          <>
            I worked with a group to build a web app in python using Flask and
            an SQLite database. The app, 'ClubHub', was a sports club membership
            management system. <br />
            <br />
            We studied maths for data science before moving on to learning about
            data visualisation, data analytics and machine learning 🤖 <br />
            <br />
            Our final submission for the block was a machine learning pipeline.
            We aimed to predict a woman's chance of surviving breast cancer
            based on various factors. We found and cleaned a suitable database
            before using methods such as Naive Bayes, random forest, and linear
            and logistic regression. Unfortunately, our results were not
            terribly accurate 🫣, but we learned a lot!
          </>
        }
        image="/images/block3.png"
        ref={(el) => (sectionRefs.current[3] = el)} // Assign ref
      />
      <CVElement
        title="ISE Block 2"
        description={
          <>
            This block focussed on object oriented programming, with classes on
            refactoring, code reviews and software design patterns <br />
            <br />
            We studied software testing, CICD, some Docker and Kubernetes, maths
            🤓 and some more professional development <br />
            <br />
            As our final project we were tasked with building a taxi simulation
            app in Java with a heavy focus on OOP principles. With my teammate I
            made a terminal based app which presents a user alist of nearby
            randomly moving 'ghost' taxi, which takes the optimal path to their
            destination. Users can choose their ride based on price and rating,
            and can rate the jouney at the end 🚕
          </>
        }
        image="/images/block2-taxi.png"
        ref={(el) => (sectionRefs.current[4] = el)} // Assign ref
      />
      <CVElement
        title="ISE Block 1"
        description={
          <>
            I entered this block with next to no coding experience, and began
            with Java, as well as learning basic git and shell 🐚 programming
            <br />
            <br />
            I studied computer organisation (some programming in assembly 🫨),
            discrete mathematics and computer foundations <br />
            <br />
            At the end of the 8-week block we worked in pairs to build a quiz
            app in java, which could be played in several game modes and
            provided a user with an analysis of their performance both
            personally and in comparison to others
          </>
        }
        image="/images/block1.png"
        ref={(el) => (sectionRefs.current[5] = el)} // Assign ref
      />
      {/* {[...Array(10)].map((_, index) => (
        <CVElement
          key={index}
          title={`CV #${index + 1}`}
          description={`Description for CV #${index + 1}`}
          ref={(el) => (sectionRefs.current[index] = el)} // Assign each ref
        />
      ))} */}
    </div>
  );
};

export default CVOverview;

document.addEventListener('DOMContentLoaded', () => {
  const cvOverviewElement = document.getElementById('cv-overview');
  if (cvOverviewElement) {
    console.log('Found cv overview element');
    const cvOverviewRoot = ReactDOM.createRoot(cvOverviewElement);
    cvOverviewRoot.render(
      <React.StrictMode>
        <CVOverview />
      </React.StrictMode>
    );
  } else {
    console.log("Can't find cs overview carosel element");
  }
});
