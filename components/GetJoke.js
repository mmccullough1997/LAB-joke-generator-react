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
      <button
        type="button"
        onClick={handleClick}
      >
        GET THEE A JOKE
      </button>
      <p>{ joke }</p>
    </>
  );
};

export default GetJoke;
