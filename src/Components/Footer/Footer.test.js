import { render } from "@testing-library/react";
import Footer from "./Footer";
describe("Footer", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Footer>Snapshot Footer</Footer>);
    expect(asFragment()).toMatchSnapshot();
  });
});
