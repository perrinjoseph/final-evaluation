import { render } from "@testing-library/react";
import About from "./About";
describe("About", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<About>Snapshot About</About>);
    expect(asFragment()).toMatchSnapshot();
  });
});
