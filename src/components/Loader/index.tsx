import { HiRefresh } from "react-icons/hi";
import { BackgroundContainer } from "../SharedStyles";
import { Content } from "./styles";

const Loader = () => {
  return (
    <BackgroundContainer>
      <Content>
        <HiRefresh className="spin" />
      </Content>
    </BackgroundContainer>
  );
};

export default Loader;
