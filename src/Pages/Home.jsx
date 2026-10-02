import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
  return (
    <div className="home">
      <nav className="home__nav">
        <h2>Summarist</h2>

        <div className="home__links">
          <button>Login</button>
          <span>About</span>
          <span>Contact</span>
          <span>Help</span>
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
  <img src="/your-image.png" alt="Summarist illustration" />
</div>
      </section>
    </div>
  );
}

export default Home;