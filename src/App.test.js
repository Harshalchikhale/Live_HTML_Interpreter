import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
function lw() {
  var x = document.getElementById("d1");
  //y = x.innerHTML;

  var z = document.getElementById('d3');
  // z.value = x.innerHTML;
  x.innerHTML = z.value;
}
