// CustomLoader.js
import React, { useState, useEffect, Suspense } from 'react';

const CustomLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(intervalId);
          setIsLoading(false);
        }
        return newProgress;
      });
    }, 10); // Adjust the interval based on your loading time

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Suspense fallback={<LoadingIndicator progress={progress} />}>
      {isLoading ? <LoadingIndicator progress={progress} /> : children}
    </Suspense>
  );
};

const LoadingIndicator = ({ progress }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <p className="text-2xl">Loading... {progress}%</p>
        {/* You can customize the loader animation or use an animated SVG here */}
        <div className="mt-4">
          <div className="h-2 bg-white rounded-full">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CustomLoader };
