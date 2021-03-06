// Styling:
import './css/mainPage.css';
import './css/menu/socialMediaButtons.css';
import './css/fadeEffects.css';
// Child components:
import AudioHandler from "./components/audio/AudioHandler";
import MainMenu from "./components/main_menu/MainMenu";


function App() {
  return (
    <div className="App">
        <MainMenu/>
        <AudioHandler/>
    </div>
  );
}

export default App;