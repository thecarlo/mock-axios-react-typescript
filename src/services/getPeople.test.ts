import axios from 'axios';
import { getPeople } from './getPeople';
jest.mock('axios');

it('should return a successful response if the GET request was successful', async () => {
  const mockResponse = {
    data: {
      results: [{ name: 'Foo' }],
    },
  };

  axios.get = jest
    .fn()
    .mockResolvedValue(mockResponse);

  const peopleData = await getPeople();

  expect(mockResponse.data).toEqual(peopleData);
});
