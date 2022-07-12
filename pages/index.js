import GetJoke from '../components/GetJoke';
import GetPunchline from '../components/GetPunchline';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <GetJoke />
      <GetPunchline />
    </div>
  );
}

export default Home;
