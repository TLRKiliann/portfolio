import winLogo from '../assets/images/win_logo.jpg';
import '../styles/contact.scss';


export const Contact = () => {
  return (
    <div className="contact">

      <div className="div--win">
        <img src={winLogo} alt="no winLogo img!" className="img--win"/>
      </div>
      
      <h1 className="main--contacttitle">Contact</h1>

      <div className="perso--data">
        <div className="subperso--data">
          <span
            className="span--contact"
            style={{
              color: 'orange',
              marginBottom: '20px',
              fontWeight: 'bold',
              fontSize: '2.4rem'
            }}>
            Web Developer
          </span>
          <span className="span--contact">Name : Cédric Kuchen</span>
          <span className="span--contact">e-mail : <a
            href = "mailto: cedric.kuchen@protonmail.com"
            className="email--tag">
            cedric.kuchen@protonmail.com
          </a></span>
          <span className="span--contact">Phone : +41 79 210 32 30</span>
        </div>
      </div>

    </div>
  );
}
