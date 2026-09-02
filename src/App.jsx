import { useState } from "react";
import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [showLogin, setShowLogin] = useState(false);
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
    </div>

    <p>
      Great summaries for busy people, individuals who barely have time to read,
      and even people who aren't into reading.
    </p>

    <button onClick={() => setShowLogin(true)}>
        Login
</button>

  <img src={heroImg} alt="Books" />
</section>
<section className="features">
  <h2>Understand books in few minutes</h2>

  <div className="features__row">
    <div>
      <div className="features__icon">
  <AiFillFileText />
  </div>
      <h3>Read or listen</h3>
      <p>Save time by getting the core ideas from the best books.</p>
    </div>

    <div>
      <div className="features__icon">
  <AiFillBulb />
    </div>
      <h3>Find your next read</h3>
      <p>Explore book lists and personalized recommendations.</p>
    </div>

    <div>
      <div className="features__icon">
  <AiFillAudio />
     </div>
      <h3>Briefcasts</h3>
      <p>Gain valuable insights from briefcasts.</p>
    </div>
    </div>
    <div className="statistics__wrapper">
  <div className="statistics__content--header statistics__content--header-second">
    <div className="statistics__heading statistics__heading--active">
  Enhance your knowledge
 </div>
    <div className="statistics__heading">Achieve greater success</div>
    <div className="statistics__heading">Improve your health</div>
    <div className="statistics__heading">Develop better parenting skills</div>
    <div className="statistics__heading">Increase happiness</div>
    <div className="statistics__heading">Be the best version of yourself!</div>
  </div>

  <div className="statistics__content--details">
    <div className="statistics__data">
      <div className="statistics__data--number">93%</div>
      <div className="statistics__data--title">
        of Summarist members <b>significantly increase</b> reading frequency.
      </div>
    </div>

    <div className="statistics__data">
      <div className="statistics__data--number">96%</div>
      <div className="statistics__data--title">
        of Summarist members <b>establish better</b> habits.
      </div>
    </div>

    <div className="statistics__data">
      <div className="statistics__data--number">90%</div>
      <div className="statistics__data--title">
        have made <b>significant positive</b> change to their lives.
      </div>
    </div>
  </div>
</div>
<div className="statistics__wrapper">
  <div className="statistics__content--details statistics__content--details-second">
    <div className="statistics__data">
      <div className="statistics__data--number">91%</div>
      <div className="statistics__data--title">
        of Summarist members <b>report feeling more productive</b> after incorporating the service into their daily routine.
      </div>
    </div>

    <div className="statistics__data">
      <div className="statistics__data--number">94%</div>
      <div className="statistics__data--title">
        of Summarist members have <b>noticed an improvement</b> in their overall comprehension and retention of information.
      </div>
    </div>

    <div className="statistics__data">
      <div className="statistics__data--number">88%</div>
      <div className="statistics__data--title">
        of Summarist members <b>feel more informed</b> about current events and industry trends since using the platform.
      </div>
    </div>
  </div>
  <div className="statistics__content--header">
    <div className="statistics__heading">
      Expand your learning
    </div>
    <div className="statistics__heading">Accomplish your goals</div>
    <div className="statistics__heading">Strengthen your vitality</div>
    <div className="statistics__heading">Become a better caregiver</div>
    <div className="statistics__heading">Improve your mood</div>
    <div className="statistics__heading">Maximize your abilities</div>
  </div>
</div>
</section>
<section className="reviews">
  <h2>What our members say</h2>
   <div className="reviews__wrapper">
    <div className="review">
  <div className="review__header">
    <div className="review__name">Hanna M.</div>
    <div className="review__stars">
    <BsStarFill />
    <BsStarFill />
    <BsStarFill />
    <BsStarFill />
   <BsStarFill />
</div>
</div>
<div className="review__body">
    This app has been a <b>game-changer</b> for me! It's saved me so much time
    and effort in reading and comprehending books. Highly recommend it to all
    book lovers.
  </div>
   </div>
  <div className="review">
  <div className="review__header">
    <div className="review__name">David B.</div>

    <div className="review__stars">
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
    </div>
  </div>

  <div className="review__body">
    I love this app! It provides <b>concise and accurate summaries</b> of books
    in a way that is easy to understand. It's also very user-friendly and
    intuitive.
  </div>
</div>
<div className="review">
  <div className="review__header">
    <div className="review__name">Nathan S.</div>

    <div className="review__stars">
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
    </div>
  </div>

  <div className="review__body">
    This app is a great way to get the main takeaways from a book without
    having to read the entire thing.
    <b> The summaries are well-written and informative.</b>
    Definitely worth downloading.
  </div>
   </div> 
   <div className="review">
  <div className="review__header">
    <div className="review__name">Ryan R.</div>

    <div className="review__stars">
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
    </div>
  </div>

  <div className="review__body">
    If you're a busy person who
    <b> loves reading but doesn't have the time</b> to read every book in full,
    this app is for you! The summaries are thorough and provide a great overview
    of the book's content.
  </div>
  <div className="reviews__btn--wrapper">
</div>
</div>
  </div>
</section>
<button onClick={() => setShowLogin(true)}>
  Login
</button>

<section className="numbers">
  <h2>Start growing with Summarist now</h2>

  <div className="numbers__wrapper">
    <div className="numbers__card">
      <div className="numbers__icon">
        <BiCrown />
      </div>
      <div className="numbers__title">3 Million</div>
      <div className="numbers__sub--title">
        Downloads on all platforms
      </div>
    </div>

    <div className="numbers__card">
      <div className="numbers__icon numbers__star--icon">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
      </div>
      <div className="numbers__title">4.5 Stars</div>
      <div className="numbers__sub--title">
        Average ratings on iOS and Google Play
      </div>
    </div>
    <div className="numbers__card">
      <div className="numbers__title">97%</div>
      <div className="numbers__sub--title">
        Of Summarist members create a better reading habit
      </div>
    </div>
  </div>
</section>
</main>
<footer className="footer">
  <div className="footer__links">
    <div>
      <h3>Actions</h3>
      <p>Summarist Magazine</p>
      <p>Cancel Subscription</p>
      <p>Help</p>
      <p>Contact us</p>
    </div>

    <div>
      <h3>Useful Links</h3>
      <p>Pricing</p>
      <p>Summarist Business</p>
      <p>Gift Cards</p>
      <p>Authors & Publishers</p>
    </div>

    <div>
      <h3>Company</h3>
      <p>About</p>
      <p>Careers</p>
      <p>Partners</p>
      <p>Code of Conduct</p>
    </div>

    <div>
      <h3>Other</h3>
      <p>Sitemap</p>
      <p>Legal Notice</p>
      <p>Terms of Service</p>
      <p>Privacy Policies</p>
    </div>
  </div>

  <p className="footer__copyright">
    Copyright © 2023 Summarist.
  </p>
</footer>
</>
  )
}


export default App
