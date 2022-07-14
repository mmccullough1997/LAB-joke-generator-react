import { useState } from 'react';
import getJoke from '../api/jokeData';

const GetJoke = () => {
  const [joke, setJoke] = useState({});
  const [buttonText, setButtonText] = useState('Get you a joke');

  const handleJoke = () => {
    // console.warn(getJoke().then((response) => console.warn(response.setup)));
    if (buttonText === 'Get you a joke' || buttonText === 'Get another joke') {
      getJoke().then((response) => setJoke(response)).then(() => {
        setButtonText('Get a punchline');
      });
    } else {
      setButtonText('Get another joke');
    }
  };

  return (
    <>
      <p><u><em>Joke Generator</em></u></p>
      <button
        type="button"
        onClick={handleJoke}
      >
        { buttonText }
      </button>
      <p>{ buttonText === 'Get you a joke' ? '' : joke.setup }</p>
      <p>{ buttonText === 'Get a punchline' ? '' : joke.delivery }</p>
    </>
  );
};

export default GetJoke;
