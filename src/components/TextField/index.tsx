import { InputHTMLAttributes } from "react";
import { Input } from "./styles";

type Props = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<any>;

const TextField = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <Input {...props} />
      <span style={{ fontSize: 12, color: "red" }}>{props.error}</span>
    </div>
  );
};

export default TextField;
