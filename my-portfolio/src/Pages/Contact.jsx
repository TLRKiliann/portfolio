import winLogo from '../assets/images/win_logo.jpg';
import '../styles/contact.scss';

export const Contact = () => {
  return (
    <div className="contact">

      <div className="div--win">
        <img src={winLogo} alt="no winLogo img!" className="img--win"/>
      </div>
      
      <h1 className="main--cvtitle">Contact</h1>

      <div className="perso--data">
        <div className="subperso--data">
          <span>Web Dev Front & Backend</span>
          <span>Cédric K.</span>
          <a
            href = "mailto: cedric.kuchen@protonmail.com"
            className="email--tag">
            Send Email
          </a>
          <span>+41 79 210 32 30</span>
          <span>Switzerland</span>
          <span>Lausanne</span>
        </div>
      </div>

    </div>
  );
}
