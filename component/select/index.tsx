import React, { useState } from "react";
type SelectProps = {
  option: String[];
  anyFunction: (id) => void;
};
function Select(props: SelectProps) {
  return (
    <select
      className="border border-gray-700 p-1"
      onChange={(e) => props.anyFunction(e.target.value)}
    >
      {props.option.map((optionData, index) => (
        <option value={index + 1} key={index}>
          {optionData}
        </option>
      ))}
    </select>
  );
}

export { Select };
