import { ModalBodyContainer } from "./styles";

type ModalBodyProps = {
  children: React.ReactNode;
};

const Body: React.FC<ModalBodyProps> = ({ children }) => (
  <ModalBodyContainer>{children}</ModalBodyContainer>
);

export default Body;
