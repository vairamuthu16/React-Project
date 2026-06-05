
import About from "./About";
import "./App.css";
import Home from "./home";

function App() {
  return (
    <div>
      <header>
        <h1>My Company</h1>
      </header>

      <Home />
      <About />

      <footer>
        <p>© 2026 My Company</p>
      </footer>
    </div>
  );
}

export default App;
