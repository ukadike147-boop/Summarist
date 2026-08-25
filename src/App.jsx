import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
    <nav>
  <h1>Summarist</h1>

  <div>
    <span>Login</span>
    <span>About</span>
    <span>Contact</span>
    <span>Help</span>
  </div>
</nav>
<main>
  <section className="hero">
  <div className="hero__text">
    <h2>Gain more knowledge in less time</h2>

    <p>
      Great summaries for busy people, individuals who barely have time to read,
      and even people who aren't into reading.
    </p>

    <button>Login</button>
  </div>

  <img src={heroImg} alt="Books" />
</section>
<section className="features">
  <h2>Understand books in few minutes</h2>

  <div className="features__row">
    <div>
      <h3>Read or listen</h3>
      <p>Save time by getting the core ideas from the best books.</p>
    </div>

    <div>
      <h3>Find your next read</h3>
      <p>Explore book lists and personalized recommendations.</p>
    </div>

    <div>
      <h3>Briefcasts</h3>
      <p>Gain valuable insights from briefcasts.</p>
    </div>
  </div>
</section>
</main>
</>
  )
}


export default App
