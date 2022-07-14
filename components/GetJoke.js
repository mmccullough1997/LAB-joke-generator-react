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
      <p className="title"><u><em>Joke Generator</em></u></p>
      <button
        type="button"
        onClick={handleJoke}
      >
        { buttonText }
      </button>
      <div className="jokeBox">
        <p className="setup">{ buttonText === 'Get you a joke' ? '' : joke.setup }</p>
        <p className="punchline">{ buttonText === 'Get a punchline' ? '' : joke.delivery }</p>
      </div>
    </>
  );
};

export default GetJoke;
