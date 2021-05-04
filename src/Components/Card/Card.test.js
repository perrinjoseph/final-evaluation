import { render } from "@testing-library/react";
import Card from "./Card";
describe("Card", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Card>Snapshot Card</Card>);
    expect(asFragment()).toMatchSnapshot();
  });
});
