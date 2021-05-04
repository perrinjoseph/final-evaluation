import { render } from "@testing-library/react";
import Contact from "./Contact";
describe("Contact", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Contact>Snapshot Contact</Contact>);
    expect(asFragment()).toMatchSnapshot();
  });
});
