'use client';

import React from 'react';

interface InputProps {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    isTextArea?: boolean;
    placeholder?: string;
  }

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  isTextArea = false
}) => {
  const commonClasses = "w-full p-2 rounded bg-gray-800 text-white border border-gray-700";
  
  return (
    <div>
      <label className="block text-white mb-2">{label}</label>
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={`${commonClasses} h-32`}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={commonClasses}
          required={required}
        />
      )}
    </div>
  );
};

export default Input;