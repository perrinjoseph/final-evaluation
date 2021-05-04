import { render } from "@testing-library/react";
import Button from "./Button";
describe("Button", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Button>Snapshot Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
