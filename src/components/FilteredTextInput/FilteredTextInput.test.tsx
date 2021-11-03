import { render, screen } from "@testing-library/react";
import FilteredTextInput from './FilteredTextInput';

test.skip("renders without crash", () => {
  render(<div>FilteredTextInput</div>);
  const filteredTextInput = screen.getByText("FilteredTextInput", {exact: true});
  expect(filteredTextInput).toBeInTheDocument();
});



