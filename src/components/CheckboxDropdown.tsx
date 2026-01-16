import React, { useState } from "react";

let initialJsonState = JSON.parse(
  '{"Intake issues": false,"Climb Failed": false,"Robot unresponsive": false,"Robot part fell off": false,"Did not participate": false,"Auto Stop": false,"Robot could not get off after climb": false,"Other": false}',
);

const [errorJson, setErrorJson] = useState<string>(initialJsonState);

interface DropdownProps {
  value: string;
  options: string[];
  label?: string;
}

const resetJson = () => {
  setErrorJson(initialJsonState);
};

const Dropdown: React.FC<DropdownProps> = ({ label, options, value }) => {
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  let boxLabel = null;
  if (label != null) {
    boxLabel = (
      <h3 className="font-semibold text-white text-2xl pb-1">{label}</h3>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      {boxLabel}

      <div
        onClick={() => setShowCheckboxes((showCheckboxes) => !showCheckboxes)}
        className="cursor-pointer text-white text-l pl-8 pr-8 p-4 flex-col items-start flex justify-center w-60 bg-gray-700 rounded-full focus-within:outline-auto relative"
      >
        <div className="relative">Select Options</div>
      </div>
      <div
        style={{ display: showCheckboxes ? "block" : "none" }}
        className="bg-gray-700 p-4 border-gray-200"
      >
        {options.map((option) => (
          <>
            <label className="text-white ">
              <input type="checkbox" onClick={resetJson} /> {option}
            </label>
            <br></br>
          </>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
