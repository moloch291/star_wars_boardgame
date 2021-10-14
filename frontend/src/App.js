import logo from './img/_swLogo2.png';
import './css/mainPage.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="menu-logo" alt="logo" />
      </header>
        <ul>
            <li>
                <i className="fab fa-facebook-f"
                   onClick={window.open("https://www.facebook.com/komjatidaniel")}>
                </i>
            </li>
            <li>
                <i className="fab fa-linkedin-in"
                   onClick={window.open("https://www.linkedin.com/in/d%C3%A1niel-komj%C3%Ati-6a6b3521a")}>
                </i>
            </li>
            <li>
                <i className="fa fa-github" aria-hidden={'true'}
                   onClick={window.open("https://github.com/moloch291/star_wars_boardgame")}>
                </i>
            </li>
        </ul>
    </div>
  );
}

export default App;
