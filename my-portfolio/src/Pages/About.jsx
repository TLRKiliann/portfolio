import photoLogo from '../assets/images/photo_logo.png';
import linusImg from '../assets/images/great_linus_torvalds.jpg'; 
import richardImg from '../assets/images/richard_stallman.jpg';
import cvPdf from '../assets/files/top_cv.pdf';
import '../styles/about.scss';


export const About = () => {
  //replace p by a href="#"!
  const opts = {
    height: "30px",
    weight: "30px",
  }
  return (
    <div className="projects">

      <div>
        <div className="spin">
          <h1 className="main--projecttitle">
            About
          </h1>
          <a
            href={cvPdf}
            title="open link in new tab"
            target="_blank"
            rel="noreferrer"
            className="cv--pdf"
          >
            Curriculum Vitae
          </a>
        </div>
      </div>

      <div className="title--devweb">
        <h2>WEB DEVELOPMENT</h2>
        <h3>Cédric Kuchen</h3>
      </div>

      <div className="div--caption">
        <span className="title--caption">
          Wellcome !
        </span>
      </div>

      <section className="mainproject--div">

        <div className="main--content">

          <div className="about--me">
            <article className="art--aboutme">
              <h3>- About Me -</h3>
              <hr className="hr"/>
              <p>
                My name is Cdréic, and I'm looking for a job as web developer.
                I am very interested in web applications and how they work. I will
                be happy to work in the front or backend or both.
              </p>
              <p style={{display: 'block'}}>
                Over the last 7 years, my motivation to understand the functioning
                of computer systems has continued to grow. I learned a lot with
                GNU/Linux about system calls, systemd, filesystem, io, drivers, 
                application, web, etc.
              </p>
              <div className="align--gnu">
                <span style={{color: '#5cd6b0'}}>I am infinitely grateful to 
                  &nbsp;<mark>Linus Torvalds</mark>&nbsp;& 
                  &nbsp;<mark>Richard Stallman</mark>&nbsp;
                </span>
                <a 
                  href={linusImg} 
                  className="linus--richard"
                  title="open Linus T. img"
                  target="_blank"
                  rel="noreferrer">
                <img src={linusImg} style={opts} alt="no Linus img" /></a>
            
                <a
                  href={richardImg}
                  className="linus--richard" 
                  title="open Richard S. img"
                  target="_blank"
                  rel="noreferrer">
                <img src={richardImg} style={opts} alt="no Richard img"/></a>

              </div>
              <p>
                I started by learning HTML5, CSS3 and programming in Python3. Then, I 
                learn more programming languages and how to make web site.<br/>
                My first web site (WAN) was made with PHP, MySQL on raspberry 3 server
                with apache2.
              </p>
              <p>
                With python3, I realized web application without framework. In my opinion,
                it's was more interesting to build application with tkinter to interact with
                a server in LAN (Linux, raspberry, SSH, SCP, MySQL).<br/>
                After that, I wannted to know how web application works with framework,
                and how to build web API using Node & React.
              </p>
            </article>
          </div>

          <div className="flex--photo">
            <div className="div--content">
              <img src={photoLogo} className="img--photo" alt='no photo_logo !'/>
              <div className="filter--photo">
                <div className="backframe--photo">
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="second--content">
          <div className="second--divcontent">
            <article className="art--second">
              <h3>- Linux -</h3>
              <hr className="hr"/>
              <p>My goal was to understand how a computer works, so I 
                started to install Linux, because we have easier access 
                to configurations than other platforms. Linux really 
                helped me to understand how an application works with 
                memory (RAM), processes (PID), processor, I/O, internet 
                and security (Hyper-virtualization, kalilinux).
              </p>
            </article>

            <div className="div--content2">
              <h3>
                Versions
              </h3>
              <div className="div--criteria">
                <ul>
                  <li>Linux Mint</li>
                  <li>Ubuntu 20.04 lts</li>
                  <li>Debian</li>
                  <li>Xubuntu Voyager XFCE4</li>
                  <li>Kalilinux</li>
                  <li>Raspberry pi 3b</li>
                  <li>Raspberry pi 4</li>
                </ul>
              </div>
            </div>

          </div>
        </div>


        <div className="second--content">
          <div className="second--divcontent">
            <article className="art--second">
              <h3>- Backend Web Development -</h3>
              <hr className="hr"/>
              <p>I changed my job after 12 years, because I 
                was more motivated to understand the computer 
                system and its features.<br/>
                I started by learning python3 to make applications. 
                It was so interesting to make an application that 
                interacts with a mysql server on raspberry pi 3.
                After that, I varied my skills with PHP/MySQL to build
                a server site on apache2 (raspberry pi).<br/>
                Now, I can build MERN stack e-commerce with React & TypeScript.
              </p>
            </article>

            <div className="div--content2">
              <h3>
                Backend
              </h3>
              <div className="div--criteria">
                <ul>
                  <li>PHP</li>
                  <li>Apache2</li>
                  <li>Python3-MySQL</li>
                  <li>React-MySQL</li>
                  <li>React-Mongoose</li>
                  <li>API REST & RESTfull</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="second--content">
          <div className="second--divcontent">
            <article className="art--second">
              <h3>- Frontend Web Development -</h3>
              <hr className="hr"/>
              <p>
                I chose React because it is the most used framework 
                in the world and for its graphic rendering. It has 
                several library extensions, which diversifies the 
                solutions. <br/>
                Also, I found it easy to use and this is a good place 
                for creation.
              </p>
            </article>

            <div className="div--content2">
              <h3>
                Frontend
              </h3>
              <div className="div--criteria">
                <ul>
                  <li>Redux</li>
                  <li>TypeScript</li>
                  <li>Bootstrap</li>
                  <li>SCSS</li>
                  <li>jQuery</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
