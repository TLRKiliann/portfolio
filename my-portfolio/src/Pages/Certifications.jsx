import confettiImg from '../assets/images/confetti.jpg';
import '../styles/certif.scss';


export const Certifications = () => {
  return (
    <div className="certif">

      <div className="confetti--div">
      </div>

      <img src={confettiImg} className="confetti--tag" alt="no img confetti" />

      <h1>Certifications</h1>

      <section className="section--certif">
        <article className="art--tag">
          <h3>Truc 111</h3>
          <div>
            <p>FreeCodeCamp 2021-2022</p>
            <img src={confettiImg} width="50px" height="30px" alt="no img"/>
          </div>
        </article>

        <article className="art--tag">
          <h3>Truc 111</h3>
          <div>
            <p>FreeCodeCamp 2021-2022</p>
            <img src={confettiImg} width="50px" height="30px" alt="no img"/>
          </div>
        </article>

        <article className="art--tag">
          <h3>Truc 111</h3>
          <div>
            <p>OpenClassRoom 2021-2022</p>
            <img src={confettiImg} width="50px" height="30px" alt="no img"/>
          </div>
        </article>

        <article className="art--tag">
          <h3>Truc 111</h3>
          <div>
            <p>OpenClassRoom 2021-2022</p>
            <img src={confettiImg} width="50px" height="30px" alt="no img"/>
          </div>
        </article>

        <article className="art--tag">
          <h3>Truc 111</h3>
          <div>
            <p>OpenClassRoom 2021-2022</p>
            <img src={confettiImg} width="50px" height="30px" alt="no img"/>
          </div>
        </article>

      </section>
    </div>
  );
}
