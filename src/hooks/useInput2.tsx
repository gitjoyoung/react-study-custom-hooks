import React from "react";

export const useInput2 = (
  initialValue: string,
  validator: (value: string) => boolean
) => {
  const [value, setValue] = React.useState(initialValue);
  const [style, setStyle] = React.useState({ backgroundColor: "white" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    const isValid = validator(value);
    if (isValid) {
      setValue(value);
    }
    setStyle({ backgroundColor: isValid ? "white" : "red" });
  };

  return {
    value,
    onChange,
    style,
  };
};
