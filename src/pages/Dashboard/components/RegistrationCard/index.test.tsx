import RegistrationCard from ".";
import { render } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";

describe("<RegistrationCard />", () => {
  test("Should match snapshot", () => {
    const component = render(
      <RegistrationCard
        data={{
          admissionDate: "22/10/2023",
          email: "luiz@caju.com.br",
          employeeName: "Luiz Filho",
          status: "APPROVED",
          cpf: "56642105087",
          id: "3",
        }}
        onDelete={() => {}}
        onUpdate={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
