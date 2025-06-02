import { useEffect, useState } from 'react';

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Crear estrellas aleatorias
    const createStars = () => {
      const newStars = [];
      const starCount = 100;

      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 5;

        newStars.push({
          id: i,
          size,
          posX,
          posY,
          delay,
          duration,
        });
      }
      setStars(newStars);
    };

    createStars();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.posX}%`,
            top: `${star.posY}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
