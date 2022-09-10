import cvPdf from '../assets/files/cv_final.pdf';
import '../styles/cv.scss';

export const Curriv = () => {
  return (
    <div className="cv">
      
      <h1 className="main--cvtitle">Curriculum Vitae</h1>
    

      <iframe 
        src={cvPdf}
        title="frame"
        width="810px"
        height="800px"
        className="pdf--caption">
      </iframe>
    </div>
  );
}
