import { useState } from 'react';
import getJoke from '../api/jokeData';

const GetPunchline = () => {
  const [punchline, setPunchline] = useState();

  const handleClick = () => {
    // console.warn(getJoke().then((response) => console.warn(response.delivery)));
    getJoke().then((response) => setPunchline(response.delivery));
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
      >
        GET A PUNCHLINE
      </button>
      <p>{ punchline }</p>
    </>
  );
};

export default GetPunchline;
