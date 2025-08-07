import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

interface FeedbackProps {
  type: "warning" | "error";
  message: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  feedback?: FeedbackProps;
  feedbackColor?: {
    warning?: string;
    error?: string;
  };
  additionalClassName?: {
    label?: string;
    input?: string;
    feedback?: string;
  };
  register?: UseFormRegisterReturn;
}

export const Input: React.FC<InputProps> = ({
  label,
  feedback,
  feedbackColor,
  additionalClassName,
  register,
  ...props
}) => {
  const resolvedFeedbackColor =
    feedback?.type === "error"
      ? feedbackColor?.error || "text-red-400"
      : feedback?.type === "warning"
      ? feedbackColor?.warning || "text-yellow-400"
      : "";

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
        className={`w-full px-4 py-2 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${additionalClassName?.input ?? ""}`}
        placeholder={`Enter ${label?.toLowerCase()}...`}
        {...register}
        {...props}
      />
      {feedback && (
        <p
          className={`pl-2 mt-1 text-sm ${resolvedFeedbackColor} ${
            additionalClassName?.feedback ?? ""
          }`}
        >
          {feedback.message}
        </p>
      )}
    </div>
  );
};
