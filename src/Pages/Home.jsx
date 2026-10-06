import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
function Home() {
    const navigate = useNavigate();
  return (
    <>
    <nav className="home__nav">
  <div className="home__nav--inner">
    <h2>Summarist</h2>

    <div className="home__links">
      <button onClick={() => navigate("/login")}>Login</button>
      <span>About</span>
      <span>Contact</span>
      <span>Help</span>
    </div>
  </div>
</nav>

      <section className="home__hero">
        <div className="home__hero--left">
          <h1>
            Gain more knowledge
            <br />
            in less time
          </h1>

          <p>
            Great summaries for busy people,
            individuals who barely have time to read,
            and even people who don't like to read.
          </p>

          <button onClick={() => navigate("/login")}>Login</button>
        </div>

        <div className="home__hero--right">
  <img src={hero} alt="Summarist illustration" />
</div>
      </section>
      </>
      
  );
}

export default Home;