import './css/mainPage.css';
import MainMenu from "./components/menu/Menu";
import AudioHandler from "./components/audio/AudioHandler";


function App() {
  return (
    <div className="App">
        <MainMenu/>
        <AudioHandler/>
    </div>
  );
}

export default App;