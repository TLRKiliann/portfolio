import cvPdf from '../assets/files/cv_final.pdf';
import winLogo from '../assets/images/win_logo.jpg';
import '../styles/cv.scss';

export const Curriv = () => {
  return (
    <div className="cv">

      <div className="div--win">
        <img src={winLogo} alt="no winLogo img!" className="img--win"/>
      </div>
      
      <h1 className="main--cvtitle">Curriculum Vitae</h1>

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
