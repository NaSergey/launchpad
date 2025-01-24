"use client";

import { useState } from "react";
import Select from "react-select";
import { customStyles } from "@/styles/selectStyles";
const options = [
  { value: "Featured", label: "Featured" },
  { value: "", label: "Last trade" },
  { value: "", label: "Creation time" },
  { value: "option3", label: "Last replay" },
  { value: "option3", label: "market cap" },
];

const CoincContainer: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleChange = (option: any) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  return (
    <div className="flex flex-col items-center justify-center px-16">
      <div className="flex max-w-[254px] rounded-md shadow-lg space-x-4">
        <Select
          options={options}
          value={selectedOption}
          onChange={handleChange}
          placeholder="Select an option"
          className="w-full text-sm"
          styles={customStyles} 
          instanceId="react-select-instance"
        />
      </div>
    </div>
  );
};

export default CoincContainer;
