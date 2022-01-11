// Importing style:
import './css/mainPage.css';
import './css/socialMediaButtons.css';
import './css/mainButtons.css';
import './css/fadeEffects.css';
// Components:
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