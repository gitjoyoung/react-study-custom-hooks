import React from "react";

export const useClick = (onClick: any) => {
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("click", onClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      } // 리턴을 해줘야 이벤트 리스너가 계속 쌓이지 않는다.
    };
  }, [ref]);
  return { ref };
};
