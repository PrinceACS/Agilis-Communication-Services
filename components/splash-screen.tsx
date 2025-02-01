"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onVideoEnd }: { onVideoEnd: () => void }) => {
  const [isShrinking, setIsShrinking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShrinking(true);
      setIsHidden(true);
      onVideoEnd();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onVideoEnd]);

  if (isHidden) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: isShrinking ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.video
          autoPlay
          muted
          playsInline
          onEnded={() => setIsShrinking(true)}
          className="w-full h-full object-cover"
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: isShrinking ? 0.5 : 1,
            opacity: isShrinking ? 0 : 1,
          }}
          transition={{ duration: 1 }}
        >
          <source
            src="https://res.cloudinary.com/dv823zvb7/video/upload/v1738333568/a4ehxt3xee6ksnmpkhvb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </motion.video>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
