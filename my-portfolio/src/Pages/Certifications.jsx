import fccImg from '../assets/images/fcc_primary_small.png';
import openImg from '../assets/images/openclass_logo.png';
import secNumImg from '../assets/images/secnum_logo.png';
import '../styles/certif.scss';


export const Certifications = () => {
  return (
    <div className="certif">

      <div className="flash--bg">
        
      </div>

      <div className="certif--anim">
        <div className="nth-child">
          <span>C</span>
          <span>e</span>
          <span>r</span>
          <span>t</span>
          <span>i</span>
          <span>f</span>
          <span>i</span>
          <span>c</span>
          <span>a</span>
          <span>t</span>
          <span>i</span>
          <span>o</span>
          <span>n</span>
          <span>s</span>
        </div>
      </div>

      <div className="filter--div">
      </div>

      <section className="section--certif">
        <article className="art--tag">
          <h3>2022</h3>
          <div className="flexible--imgfcc">
            <p>FreeCodeCamp</p>
            <img src={fccImg} width="50px" height="30px" alt="no img"/>
          </div>
          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li>
                  Front End Development Libraries
                  (React - Redux - Bootstrap - jQuerry - Sass)
                </li>
                <li>
                  FreeCodeCamp Youtube Videos
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="art--tag">
          <h3>2021</h3>
          <div className="flexible--imgfcc">
            <p>FreeCodeCamp</p>
            <img src={fccImg} width="50px" height="30px" alt="no img"/>
          </div>
          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li className="abs--li">
                  Responsive Web Design
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="art--tag">
          <h3>2021</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li>
                  Mettez en place votre environnement front-end.
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="art--tag">
          <h3>2018-2021</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li>
                  Apprenez à coder en Javascript
                </li>
                <li>
                  Apprenez à programmer avec JavaScript 
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="art--tag">
          <h3>2016-2020</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li>
                  Python3
                </li>
                <li>
                  POO en Python3
                </li>
                <li>
                  Tester vos projets avec Python3
                </li>
                <li>
                  Perfectionnez-vous en Python3
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="art--tag">
          <h3>2019</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li>
                  Gérez votre code avec Git et GitHub 
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="art--tag">
          <h3>2019</h3>
          <div className="flexible--imgsec">
            <p>ANSSI</p>
            <img src={secNumImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li>
                  MOOC SecNumAcadémie 
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="art--tag">
          <h3>2016-2019</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li>
                  Comprendre le web
                </li>
                <li>
                  Fonctionnement des réseaux <br/> TCP/IP
                </li>
                <li>
                  Maîtriser vos applications et réseaux TCP/IP
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="art--tag">
          <h3>2016-2019</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li>
                  PHP - MySQL (HTML5 + CSS3)
                </li>
                <li>
                  Server apache2 with PHP - MVC (blog)
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="art--tag">
          <h3>2015-2016</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li>
                  Protégez l’ensemble de vos données sur votre ordinateur
                </li>
                <li>
                  Apprenez à naviguer en sécurité sur Internet
                </li>
                <li>
                  Protégez l’ensemble de vos données sur votre ordinateur 
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="art--tag">
          <h3>2015</h3>
          <div className="flexible--imgoc">
            <p>OpenClassRoom</p>
            <img src={openImg} width="50px" height="30px" alt="no img"/>
          </div>

          <div className="div--certification">
            <div className="subdiv--certifications">
              <ul>
                <li>
                  Programmation en C
                </li>
                <li>
                  Linux
                </li>
                <li>
                  HTML5
                </li>
                <li>
                  CSS3
                </li>
              </ul>
            </div>
          </div>
        </article>

      </section>
    </div>
  );
}
