import photoLogo from '../assets/images/photo_logo.png';
import linusImg from '../assets/images/great_linus_torvalds.jpg'; 
import richardImg from '../assets/images/richard_stallman.jpg';

import cvPdf from '../assets/files/cv_final.pdf';
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
                My name is Cedric, and I'm looking for a job in web development.
                I am very interested in web applications and how they work. I will
                be happy to work in the front or backend or both.
              </p>
              <p style={{display: 'block'}}>
                Over the last 7 years, my motivation to understand the functioning
                of computer systems has continued to grow. I learned a lot with
                GNU/Linux about system calls, systemd, filesystem, io, drivers, 
                application, web, etc.<br/>
                
                Special Thanks to Linus Torvalds
                &nbsp;<a href={linusImg} target="_blank" rel="noreferrer">
                <img src={linusImg} style={opts} alt="no Linus img" /></a> & 
                Richard Stallman
                &nbsp;<a href={richardImg} target="_blank" rel="noreferrer"><img src={richardImg} 
                style={opts} alt="no Richard img"/></a>
                &nbsp;! 
              </p>
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
                After that, I wannted know how web application works and how can I build web 
                API using Node & React.
              </p>
            </article>
          </div>

          <div className="flex--photo">
            <div className="div--content">
              <img src={photoLogo} className="img--photo" alt='no photo_logo !'/>
              <div className="filter--photo">
                <div className="design--photo">
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
              <p>My goal was to understand how a computer works,
                so I begun to install Linux, because there are many
                accessing configuration. Linux realy help me how work 
                an application with memory (RAM), process (PID), processor,
                IO, internet & security (Hyper-virtualisation, kalilinux).
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
                a server site with apache2.<br/>
                I can interact with MySQL & Mongoose with React (CRUD,
                login, sign-up, API, local db (js or json)).
              </p>
            </article>

            <div className="div--content2">
              <h3>
                Backend
              </h3>
              <div className="div--criteria">
                <ul>
                  <li>PHP - MySQL</li>
                  <li>Apache2</li>
                  <li>MySQL</li>
                  <li>Mongoose</li>
                  <li>JSON(with local db)</li>
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
                solutions with the virtual DOM. <br/>
                Also, I found it easy to use.
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
