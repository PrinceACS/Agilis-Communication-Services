"use client";
import { useEffect, useState } from "react";

const SplashScreen = ({ onVideoEnd }: { onVideoEnd: () => void }) => {
  const [isShrinking, setIsShrinking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Start shrinking animation after 3 seconds
    const timer = setTimeout(() => {
      setIsShrinking(true);
      setIsHidden(true); // Hide completely after transition
      onVideoEnd(); // Ensure the header remains visible
    }, 3000);

    return () => clearTimeout(timer);
  }, [onVideoEnd]);

  if (isHidden) return null; // Fully remove splash screen after animation

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000 ${
        isShrinking ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Video Background with Shrinking Effect */}
      <video
        autoPlay
        muted
        playsInline
        onEnded={() => setIsShrinking(true)}
        className={`transition-all duration-1000 ${
          isShrinking ? "scale-50 opacity-50" : "scale-100 opacity-100"
        }`}
      >
        <source
          src="https://res.cloudinary.com/dv823zvb7/video/upload/v1738333568/a4ehxt3xee6ksnmpkhvb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
