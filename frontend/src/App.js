import './css/mainPage.css';
import MainMenu from "./components/Menu";
import AudioHandler from "./components/AudioHandler";
import LogIn from "./components/LogIn";


function App() {
  return (
    <div className="App">
        <MainMenu/>
        <LogIn/>
        <AudioHandler/>
    </div>
  );
}

export default App;