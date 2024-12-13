import { motion } from 'framer-motion'; // Corrected import for framer-motion
import { useState, useEffect, useRef } from 'react';
import * as React from 'react';

const Sun = ({ containerRef }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setIsClicked(!isClicked);
    window.location.href = '/serious';
  };

  // initial position
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const initialX = container.offsetWidth * 0.4755 - 60; // Start at 50% width, adjusting for the sun's size
      const initialY = container.offsetHeight * 0.465 - 60; // Start at 40% height, adjusting for the sun's size
      setPosition({ x: initialX, y: initialY });
    }
  }, [containerRef]);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const mouseX = e.clientX - container.offsetLeft;
    const mouseY = e.clientY - container.offsetTop;

    const dx = mouseX - position.x;
    const dy = mouseY - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const speed = 10; ///frames per second ...I think????
    const moveX = position.x - (dx / distance) * speed;
    const moveY = position.y - (dy / distance) * speed;

    const newX = Math.min(Math.max(moveX, 0), container.offsetWidth - 120);
    const newY = Math.min(Math.max(moveY, 0), container.offsetHeight - 120);

    if (distance < 200 && (newX !== position.x || newY !== position.y)) {
      setPosition({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [containerRef, position]);

  return (
    <motion.div
      // animate={{ scale: isClicked ? 1.5 : 1 }}
      onClick={handleClick}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        background: '#eb311b',
        borderRadius: '50%',
        width: 120,
        height: 120,
      }}
    />
  );
};

export default Sun;
