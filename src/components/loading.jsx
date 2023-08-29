/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Contoh penggunaan: Simulasikan loading selama 3 detik
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {isLoading ? (
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      ) : (
        <h1 className="text-3xl text-center mt-10">Halaman Utama</h1>
      )}
    </div>
  );
};

export default LoadingAnimation;
