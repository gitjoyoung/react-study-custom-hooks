import React from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = React.useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setScrollY({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
};
