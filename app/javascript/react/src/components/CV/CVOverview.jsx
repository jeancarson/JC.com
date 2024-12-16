import * as React from 'react';
import { animate, scroll } from 'framer-motion';
import CVElement from './CVElement';
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
      <h1 className="adale-mono-font" style={{ color: 'white' }}>
        Here are all the things I've done. Pay attention
      </h1>
      <CVElement
        title="Analog Devices"
        description="Played a lot of pool and occasionally fought with some embedded C"
        image="/images/galaxy-background.jpg"
        ref={(el) => (sectionRefs.current[0] = el)} // Assign ref
      />
      <CVElement
        title="Intercom"
        description="Did web developemnt using React and Ruby on Rails and ate a lot of chocolate"
        ref={(el) => (sectionRefs.current[1] = el)} // Assign ref
      />
      <CVElement
        title="ISE Block 4"
        description="Strange exam structure and a LOT of subjects - AWS (where I hosted ClubHub), more software patters, C++ for event driven programming, functional programming (HAskall, yuck)"
        ref={(el) => (sectionRefs.current[2] = el)} // Assign ref
      />
      <CVElement
        title="ISE Block 3"
        description="Hell on Earth. Machine learning and data science heavy, through python. I actually liked that part but just had NO TIME to do it bc we had to make a 'mini prject' Flask app called CLubHub used to make a sports club membership management system."
        ref={(el) => (sectionRefs.current[3] = el)} // Assign ref
      />
      <CVElement
        title="ISE Block 2"
        description="Java taxi simulation app MUPPPP. Also there was an attempt to teach us docker and kubernetes but it was not successful. Dd a lot of software patterns which I really enjoed"
        ref={(el) => (sectionRefs.current[4] = el)} // Assign ref
      />
      <CVElement
        title="ISE Block 1"
        description="I did not know how to code when I came here LOL. I learned Java and made a quiz game, as well as studying things like discrete maths and oftware architechtures."
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
