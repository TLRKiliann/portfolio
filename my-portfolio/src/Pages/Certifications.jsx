import confettiImg from '../assets/images/confetti.jpg';
import fccImg from '../assets/images/fcc_primary_small.png';
import openImg from '../assets/images/openclass_logo.png';
import '../styles/certif.scss';


export const Certifications = () => {
  return (
    <div className="certif">

      <div className="filter--div">
      </div>

      <img src={confettiImg} className="confetti--tag" alt="no img confetti" />

      <h1>Certifications</h1>

      <section className="section--certif">
        <article className="art--tag">
          <h3>Truc 111</h3>
          <div className="flexible--imgfcc">
            <p>FreeCodeCamp 2021</p>
            <img src={fccImg} width="50px" height="30px" alt="no img"/>
          </div>
          <div className="div--certifications">
            <ul>
              <li>
                Web designer machin
              </li>
            </ul>
          </div>
        </article>

        <article className="art--tag">
          <h3>Truc 111</h3>
          <div className="flexible--imgfcc">
            <p>FreeCodeCamp 2021-2022</p>
            <img src={fccImg} width="50px" height="30px" alt="no img"/>
          </div>
          <div className="div--certifications">
            <ul>
              <li className="abs--li">
                Web Frontend Librairies
              </li>
            </ul>
          </div>
        </article>

        <article className="art--tag">
          <h3>Truc 111</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom 2021-2022</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certifications">
            <ul>
              <li>
                Python3 perfectionnement
              </li>
              <li>
                Web reseaz
              </li>
              <li>
                TCP/IP
              </li>
            </ul>
          </div>
        </article>

        <article className="art--tag">
          <h3>Truc 111</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom 2021-2022</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certifications">
            <ul>
              <li>
              </li>
              <li>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </article>

        <article className="art--tag">
          <h3>Truc 111</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom 2021-2022</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certifications">
            <ul>
              <li>
              </li>
              <li>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </article>

      </section>
    </div>
  );
}
