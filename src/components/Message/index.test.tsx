import { act, render, screen } from "@testing-library/react";
import { messageApi, Message, MessageType } from "src/components/Message";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";

describe("Message component", () => {
  const defaultProps = {
    type: "success" as MessageType,
    content: "This is a success message",
  };

  it("should render the message with correct content", () => {
    render(
      <ThemeProvider theme={theme}>
        <Message {...defaultProps} />
      </ThemeProvider>
    );
    expect(screen.getByText("This is a success message")).toBeInTheDocument();
  });
});

describe("messageApi.open", () => {
  it("should display a message and remove it after the timeout", () => {
    jest.useFakeTimers();
    const messageProps = { type: "error", content: "Error occurred" };
    act(() => {
      messageApi.open(messageProps);
    });

    expect(screen.getByText("Error occurred")).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.queryByText("Error occurred")).not.toBeInTheDocument();

    jest.useRealTimers();
  });
});
