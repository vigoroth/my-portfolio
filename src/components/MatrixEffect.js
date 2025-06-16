// src/components/MatrixEffect.js
"use client";

import { useEffect, useRef } from 'react';

const MatrixEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas to fill its container
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    // Create an array to track the Y position of each column's falling character
    const drops = Array(columns).fill(1);

    function draw() {
      // Create a semi-transparent black rectangle to create the fading trail effect
      ctx.fillStyle = 'rgba(17, 17, 17, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the color for the falling characters
      ctx.fillStyle = '#34D399'; // Your accent green
      ctx.font = `${fontSize}px monospace`;

      // Loop over each column
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset the drop to the top randomly to make the streams uneven
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move the drop down
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    // Cleanup function to stop the animation when the component is no longer on screen
    return () => clearInterval(interval);

  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0"
    ></canvas>
  );
};

export default MatrixEffect;