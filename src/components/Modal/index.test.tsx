import Modal from ".";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("<Modal />", () => {
  test("Should match snapshot", () => {
    const component = render(
      <Modal.Content onClose={() => {}}>
        <>
          <p>A modal content</p>
          <Modal.Footer />
        </>
      </Modal.Content>
    );
    expect(component).toMatchSnapshot();
  });
});
