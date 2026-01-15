import React, { useState } from "react";

interface DropdownProps {
    value: string;
    options: string[];
    label?: string;
    placeholder?: string;
    onChange: (newValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, placeholder, options }) => {
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

            <div className="text-white text-l pl-8 pr-8 p-4 flex-col items-start flex justify-center w-60 bg-gray-700 rounded-full focus-within:outline-auto relative">
                <div className="relative">
                    <option
                        onClick={() =>
                            setShowCheckboxes(
                                (showCheckboxes) => !showCheckboxes
                            )
                        }
                        className="cursor-pointer"
                    >
                        Select Options
                    </option>
                </div>
            </div>
            <div
                style={{ display: showCheckboxes ? "block" : "none" }}
                className="bg-gray-700 p-4 border-gray-200"
            >
                {options.map((option) => (
                    <>
                        <label className="text-white ">
                            <input type="checkbox" /> {option}
                        </label>
                        <br></br>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
