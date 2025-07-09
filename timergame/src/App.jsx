import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      
      <div id="challenges">
        <TimerChallenge title="Possible" targetTime={5}/> 
        <TimerChallenge title="Medium" targetTime={10}/>
        <TimerChallenge title="Hard" targetTime={15}/>
        <TimerChallenge title="Impossible" targetTime={20}/>
      </div>
    </>
  );
}

export default App;
