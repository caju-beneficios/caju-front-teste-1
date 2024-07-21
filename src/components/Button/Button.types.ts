export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outlined";
}
