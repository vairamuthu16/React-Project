import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function About() {
  return (
    <div className="section">
      <h2>About Us</h2>

      <img src={reactLogo} className="framework" alt="React logo" />
      <img src={viteLogo} className="vite" alt="Vite logo" />

      <p>
        We are a software development team specializing in
        React, React Native, and Node.js.
      </p>
    </div>
  );
}

export default About;
