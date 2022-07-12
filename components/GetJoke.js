import { useState } from 'react';
import getJoke from '../api/jokeData';

const GetJoke = () => {
  const [joke, setJoke] = useState();

  const handleClick = () => {
    // console.warn(getJoke().then((response) => console.warn(response.setup)));
    getJoke().then((response) => setJoke(response.setup));
  };

  return (
    <>
      <p><u><em>Joke Generator</em></u></p>
      <p>{ joke }</p>
      <button
        type="button"
        onClick={handleClick}
      >
        GET A JOKE
      </button>
    </>
  );
};

export default GetJoke;
