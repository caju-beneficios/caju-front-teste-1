import { createRoot } from "react-dom/client";
import { Container } from "./styles";

export type MessageType = "success" | "error";

interface MessageProps {
  type: MessageType;
  content: string;
}

export const Message = ({ type, content }: MessageProps) => {
  return <Container $type={type}>{content}</Container>;
};

export const messageApi = {
  open: ({ type, content }: MessageProps) => {
    const messageRoot = document.createElement("div");
    document.body.appendChild(messageRoot);
    const root = createRoot(messageRoot);

    const removeMessage = () => {
      setTimeout(() => {
        document.body.removeChild(messageRoot);
      }, 2000);
    };

    root.render(<Message type={type} content={content} />);
    removeMessage();
  },
};
