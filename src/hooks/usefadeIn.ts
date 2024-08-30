import React from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  const element = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = "1";
    }
  }, [duration, delay]);
  
  return { ref: element, style: { opacity: 0 } };
};
