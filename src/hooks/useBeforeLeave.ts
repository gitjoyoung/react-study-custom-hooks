import React from "react";

export const useBeforeLeave = (onBefore: any) => {
  const handle = (event: MouseEvent) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    } // 마우스가 위로 나갈 때만 실행
  };
  React.useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
