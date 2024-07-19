import { IconButtonContainer } from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";

export default function IconButtonView(props: IconButtonProps) {
  return (
    <IconButtonContainer title={props["aria-label"]} {...props}>
      {props.children}
    </IconButtonContainer>
  );
}
