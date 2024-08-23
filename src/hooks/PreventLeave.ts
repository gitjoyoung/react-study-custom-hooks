export const usePreventLeave = () => {
  const listener = (event: any) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
    console.log("enablePrevent 이벤트 발생");
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
    console.log("disablePrevent 이벤트 발생");
  };

  return { enablePrevent, disablePrevent };
};
