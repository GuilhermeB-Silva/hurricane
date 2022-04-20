import { Footer } from ".";
import { render } from "@testing-library/react";

test("render component", () => {
  const { debug } = render(<Footer />);

  debug();
});
