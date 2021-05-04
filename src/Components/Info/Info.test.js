import { render } from "@testing-library/react";
import Info from "./Info";
describe("Info", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Info>Snapshot Info</Info>);
    expect(asFragment()).toMatchSnapshot();
  });
});
