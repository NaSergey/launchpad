"use client";
import { useState } from "react";
import Select from "@/components/ui/select";
import Button from "@/components/ui/button";

const Filter: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row w-full p-4 items-center gap-4">
      {/* Select */}
      <div className="w-full sm:w-auto">
        <Select />
      </div>
      
      {/* Text */}
      <div className="w-full text-center sm:text-left sm:w-auto">
        <p>Trending</p>
      </div>
      
      {/* Buttons */}
      <div className="flex w-full sm:w-auto justify-center sm:justify-start space-x-2">
        <Button text="Login" onClick={() => setModalOpen(true)} />
        <Button text="Sign Up" onClick={() => setModalOpen(true)} />
        <Button text="Learn More" onClick={() => setModalOpen(true)} />
      </div>
    </div>
  );
};

export default Filter;
