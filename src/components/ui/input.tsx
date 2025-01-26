import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/ui/button";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface FormInputs {
  search: string;
}

const CoincContainer: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Search value:", data.search);
    reset(); 
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <form
        className="flex flex-row max-w-[354px]  p-4 rounded-md shadow-lg space-x-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("search", { required: true })}
          placeholder="Search"
          className="p-2 border rounded-md w-full"
        />
        <Button text="Login"  />

      </form>
    </div>
  );
};

export default CoincContainer;
