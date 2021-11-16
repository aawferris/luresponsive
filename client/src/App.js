import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="main-box">
        <div id="header">
          <h1 id="challenge-title">CHALLENGE 2</h1>
        </div>
        <div id="card-box">
          <h2 id="card-title">Cards</h2>
          <div class="card">
            <div class="top-card">
              <img src="../public/assets/gradient.png" alt="gradient blue" />
            </div>
            <div class="bottom-card">
              <div class="left">
                <p class="card-title">Card Title</p>
                <button class="button">Card Tag</button>
              </div>
              <div class="right">
                <button class="plus">Plus Sign</button>
              </div>
            </div>
          </div>
        </div>
        <div id="footer"></div>
      </div>
    </div>
  );
}

export default App;
