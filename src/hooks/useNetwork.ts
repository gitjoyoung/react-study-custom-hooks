import React from "react";

export const useNetwork = (onChange: (online: any) => void) => {
  const [status, setStatus] = React.useState(navigator.onLine);

  const handleChange = () => {
    setStatus(navigator.onLine);
    onChange(navigator.onLine);
  };
  React.useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};
