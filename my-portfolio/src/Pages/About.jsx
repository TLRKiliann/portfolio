import photoLogo from '../assets/images/photo_logo.png';
import cvPdf from '../assets/files/cv_final.pdf';
import '../styles/about.scss';


export const About = () => {
  //replace p by a href="#"!
  return (
    <div className="projects">

      <div>
        <div className="spin">
          <h1 className="main--projecttitle">
            About
          </h1>
        </div>
      </div>

      <span
        className="pdf--caption"
      >
        About Me
      </span>

      <section className="mainproject--div">

        <div className="main--content">

          <div className="about--me">
            <article className="art--aboutme">
              <h3>About Me</h3>
              <p>
                My name is Cédric Kuchen, and I'm searching a job in web development.
                I'm very interested by web app, and I will be glade to work with.
              </p>
              <p>
                Over the last 7 years, my motivation to understand the
                functioning of computer systems has continued to grow.
              </p>
              <p>
                I started by learning HTML5, CSS3 and programming in Python3. Then, I 
                learn more programming languages and how to make web site.
              </p>
              <p>
                My first web site (WAN) was made with PHP, MySQL on raspberry 3 server
                with apache2.
              </p>
              <p>
                With python3, I realized web application without framework. For me it's
                was more interesting to build application with tkinter to interact
                with a server in LAN (Linux, raspberry, SSH, SCP, MySQL).
              </p>
              <p>
                After that, I wannted know how web application works and how can I
                build web API using Node & React.
              </p>
              <p>
                Actually, I'm studying more about web API. I follow fullstack course
                online of University of Helsiniki.
              </p>
              <a
                href={cvPdf}
                title="open link in new tab"
                target="_blank"
                rel="noreferrer"
                className="cv--pdf"
              >
                Curriculum Vitae
              </a>
            </article>
          </div>

          <div className="flex--photo">
            <div className="div--content">
              <img src={photoLogo} alt='no photo_logo !'/>
              <div
                className="filter--photo"
              >
              </div>
            </div>
          </div>

        </div>
        



        <div className="about--me">
          <article className="art--aboutme">
            <h3>Python3</h3>
            <p>I've worked as a nurse durig 12 years, but my motivation was
              more greater to understand computing system and functionnalities.<br />
              I've started by leanrning python3  to realize application. That was 
              so interesting for me to make an application with tkinter to interact
              with a mysql server raspberry pi 3.<br />
              After that, I wannted know how web application works and how can I
              make project with visualisation effects.
            </p>
          </article>
        </div>


        <div className="div--content2">
          <h3>
            Javacript
          </h3>
          <p>truc</p>
        </div>

        <div className="about--me">
          <article className="art--aboutme">
            <h3>WEB</h3>
            <p>I've worked as a nurse durig 12 years, but my motivation was
              more greater to understand computing system and functionnalities.<br />
              I've started by leanrning python3  to realize application. That was 
              so interesting for me to make an application with tkinter to interact
              with a mysql server raspberry pi 3.<br />
              After that, I wannted know how web application works and how can I
              make project with visualisation effects.
            </p>
          </article>
        </div>

        <div className="div--content3">
          <h3>
            API REST & RESTfull - React (mongoose)
          </h3>
          <p>truc</p>
        </div>

        <div className="about--me">
          <article className="art--aboutme">
            <h3>Frontend Web Developer React</h3>
            <p>I've worked as a nurse durig 12 years, but my motivation was
              more greater to understand computing system and functionnalities.<br />
              I've started by leanrning python3  to realize application. That was 
              so interesting for me to make an application with tkinter to interact
              with a mysql server raspberry pi 3.<br />
              After that, I wannted know how web application works and how can I
              make project with visualisation effects.
            </p>
          </article>
        </div>

        <div className="div--content4">
          <h3>
            React-TypeScript
          </h3>
          <p>truc</p>
        </div>

      </section>

    </div>
  );
}
