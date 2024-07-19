import { InputHTMLAttributes } from "react";

export type TextFieldProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
