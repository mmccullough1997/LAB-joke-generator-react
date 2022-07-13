import { useState } from 'react';
import getJoke from '../api/jokeData';

const GetJoke = () => {
  const [joke, setJoke] = useState();
  const [buttonText, setButtonText] = useState('Get A Joke');
  const [value, setValue] = useState(0);

  const handleJoke = () => {
    // console.warn(getJoke().then((response) => console.warn(response.setup)));
    getJoke().then((response) => setJoke(response.setup));
    setButtonText('Get a Punchline');
    setValue((prevState) => prevState + 1);
  };

  const handlePunchline = () => {
    setButtonText('Get A Joke');
    setValue((prevState) => prevState + 1);
    getJoke().then((response) => setJoke(response.delivery));
  };

  return (
    <>
      <p><u><em>Joke Generator</em></u></p>
      <button
        type="button"
        onClick={value % 2 === 0 ? handleJoke : handlePunchline}
      >
        { buttonText }
      </button>
      <p>{ joke }</p>
    </>
  );
};

export default GetJoke;
