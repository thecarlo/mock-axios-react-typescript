import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { Person } from './interfaces/person';
import { getPeople } from './services/getPeople';
import App from './App';
jest.mock('./services/getPeople');

it('should render a list of Star Wars characters', async () => {
  const mockResults: Person[] = [{ name: 'Foo' }];

  (getPeople as jest.Mock).mockResolvedValue({
    results: mockResults,
  });

  render(<App />);

  const h1Heading = screen.getByRole('heading', {
    name: 'Star Wars Characters',
  });

  expect(h1Heading).toBeInTheDocument();

  await waitFor(() => {
    expect(
      screen.getByText(mockResults[0].name),
    ).toBeInTheDocument();
  });
});
