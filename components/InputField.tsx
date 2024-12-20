"use client"

import React from 'react';

// Define the component's props interface
interface InputFieldProps {
  type?: 'text' | 'password' | 'email' | 'number';  // You can extend this as needed
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  return (
    <div className={`flex space-y-2 ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-2 border w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;