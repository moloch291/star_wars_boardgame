// Importing style:
import './css/mainPage.css';
import './css/menu/socialMediaButtons.css';
import './css/fadeEffects.css';
// Components:
import AudioHandler from "./components/audio/AudioHandler";
import MainMenu from "./components/menu/MainMenu";


function App() {
  return (
    <div className="App">
        <MainMenu/>
        <AudioHandler/>
    </div>
  );
}

export default App;