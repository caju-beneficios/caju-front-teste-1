import { forwardRef } from "react";
import { Error, Input, Label } from "./TextField.styles";
import { TextFieldProps } from "./TextField.types";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props: TextFieldProps, ref) => {
    const { id, label, error, ...rest } = props;

    return (
      <div>
        <Label htmlFor={id}>{label}</Label>
        <Input {...rest} ref={ref} />
        <Error>{error}</Error>
      </div>
    );
  }
);

export default TextField;
