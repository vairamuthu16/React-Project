import heroImg from './assets/hero.png'

function Home() {
  return (
    <div className="section">
      <h2>Welcome to Our Website</h2>

     <img src={heroImg} className="base" width="170" height="179" alt="" />

      <p>
        We provide Web Development, Mobile App Development,
        and Cloud Solutions.
      </p>
    </div>
  );
}

export default Home;
