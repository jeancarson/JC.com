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
    <div style={{ marginTop: '40px', textAlign: 'center' }}>
      <h1 className="adale-mono-font" style={{ color: 'white' }}>
        Here are all the things I've done. Pay attention
      </h1>
      {[...Array(10)].map((_, index) => (
        <CVElement
          key={index}
          title={`CV #${index + 1}`}
          description={`Description for CV #${index + 1}`}
          ref={(el) => (sectionRefs.current[index] = el)} // Assign each ref
        />
      ))}
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
