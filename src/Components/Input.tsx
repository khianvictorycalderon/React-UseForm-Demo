import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  additionalClassName?: {
    label?: string;
    input?: string;
    feedback?: string;
  };
  register?: UseFormRegisterReturn;
}

export const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  additionalClassName,
  register,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label
          className={`pl-2 block text-sm font-medium mb-1 text-zinc-100 ${additionalClassName?.label ?? ""}`}
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          additionalClassName?.input ?? ""
        }`}
        placeholder={`Enter ${label?.toLowerCase()}...`}
        {...register}
        {...props}
      />
      {errorMessage && (
        <p
          className={`pl-2 mt-1 text-sm text-red-400 ${
            additionalClassName?.feedback ?? ""
          }`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
