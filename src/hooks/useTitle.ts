import React from "react";

export const useTitle = (initialvalue: string) => {
  const [title, setTitle] = React.useState(initialvalue);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    if (htmlTitle !== null) {
      htmlTitle.innerText = title;
    }
  };

  React.useEffect(updateTitle, [title]);
  return setTitle;
};
