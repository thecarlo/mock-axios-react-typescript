import React, {
  JSX,
  useEffect,
  useState,
} from 'react';

import { getPeople } from './services/getPeople';
import { Person } from './interfaces/person';

import './app.scss';

export const App: React.FC = (): JSX.Element => {
  const [people, setPeople] = useState<Person[]>(
    [],
  );

  useEffect(() => {
    getPeople()
      .then((response) => {
        setPeople(response.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container" id="main">
      <h1>Star Wars Characters</h1>

      <div className="people">
        <ul className="list-group people mx-auto text-light">
          {people.map((person: Person) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={`li-${person.name}`}
              >
                <span>{person.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
