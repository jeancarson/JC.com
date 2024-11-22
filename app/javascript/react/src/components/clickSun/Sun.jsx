import { motion } from 'motion/react';
import { useState } from 'react';
import * as React from 'react';

const Sun = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      animate={{ scale: isClicked ? 1.5 : 1 }}
      onClick={() => setIsClicked(!isClicked)}
      style={{
        background: 'red',
        borderRadius: '50%',
        width: 100,
        height: 100,
      }}
    />
  );
};
export default Sun;
