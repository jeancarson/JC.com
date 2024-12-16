import * as React from 'react';
import { motion } from 'framer-motion';
import './cv-element-styles.css';

const CVElement = React.forwardRef((props, ref) => {
  return (
    <motion.div
      ref={ref}
      className="cv-element"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="cv-image-card">
        {props.image && (
          <img className="cv-image" src={props.image} alt={props.title} />
        )}
        <div className="cv-description-box">
          <h1 className="cv-title">{props.title}</h1>
          <p className="cv-description-text">{props.description}</p>
        </div>
      </div>
    </motion.div>
  );
});

export default CVElement;
