import { render, screen } from '@testing-library/react';
import userData from 'data/userData.json';
import App from 'App';

test('should render the right data', () => {
  render(<App />);
  userData.map(async (val, i) => {
    const labelTxt = screen.getAllByTestId('label')[i];
    expect(labelTxt.textContent).toEqual(`${val.first} ${val.last}`);
  });
});
