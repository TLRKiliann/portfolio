import cvPdf from '../assets/files/cv_final.pdf';
import winLogo from '../assets/images/win_logo.jpg';
import '../styles/contact.scss';

export const Contact = () => {
  return (
    <div className="contact">

      <div className="div--win">
        <img src={winLogo} alt="no winLogo img!" className="img--win"/>
      </div>
      
      <h1 className="main--cvtitle">Contact</h1>

      <a 
        href={cvPdf}
        title="open link in new tab"
        width="810px"
        height="800px"
        target="_blank"
        rel="noreferrer"
        className="pdf--caption">
          Curriculum Vitae
      </a>

    </div>
  );
}
