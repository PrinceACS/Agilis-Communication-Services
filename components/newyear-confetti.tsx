"use client";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const NewYearConfetti = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(true);
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);

      const handleResize = () => {
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        setTimeout(() => setIsConfettiActive(false), 7000); // Stop after 7 seconds
      };
    }
  }, []);

  return (
    <>
      {isConfettiActive && <Confetti width={innerWidth} height={innerHeight} />}
    </>
  );
};

export default NewYearConfetti;
