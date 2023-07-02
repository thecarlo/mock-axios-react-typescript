import { PeopleAxiosResponse } from '../interfaces/peopleAxiosResponse';
import axios, { AxiosResponse } from 'axios';

export const getPeople =
  async (): Promise<PeopleAxiosResponse> => {
    const response: AxiosResponse<PeopleAxiosResponse> =
      await axios.get(
        'https://swapi.dev/api/people',
      );

    return response.data;
  };
