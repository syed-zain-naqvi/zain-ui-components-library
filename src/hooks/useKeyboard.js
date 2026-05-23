import { useEffect } from 'react';

export const useKeyboard = (key, callback) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === key) {
        callback(event);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [key, callback]);
};
