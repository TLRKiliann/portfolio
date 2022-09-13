import Video from '../assets/videos/videos_vid.mp4';
import YouTube from 'react-youtube';
import '../styles/videos.scss';


export const Videos = () => {

  const opts = {
      height: '180',
      width: '330',
  };

  return (
    <div className="videos">

      <video className="video--portfolio" autoPlay>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="opacity--div">

        <h1 className="main--title">Videos</h1>

        <div className="videos--div">

          <div className="subdiv--videos">

            <h3 className="title--videos">Python</h3>

            <div className="allvideos--div">

              <div className="yt--video">
                <YouTube opts={opts}
                  videoId="nBl_i7DGV24"
                  className="YouTube--video"
                  />
                <h4>SSH & SCP + MySQL & pymysql</h4>
                <p>Application made with python3-tkinter
                  with connection server-client.</p>
                <a
                  href="https://github.com/TLRKiliann/timetrack"
                  rel="noreferrer"
                  target="_blank">GitHub repository</a>
              </div>

              <div className="yt--video">
                <YouTube opts={opts}
                  videoId="fJ4on0hSitI"
                  className="YouTube--video"
                  />
                <h4>PHP & Python3</h4>
                <p>Retrieve data from requests on server 
                  PHP with python3 (LAN).</p>
                <a
                  href="https://github.com/TLRKiliann/timetrack"
                  rel="noreferrer"
                  target="_blank">GitHub repository</a>
              </div>

              <div className="yt--video">
                <YouTube opts={opts}
                  videoId="4AgdvHHU95U"
                  className="YouTube--video"
                  />
                <h4>Python3-tkinter GUI app</h4>
                <p>Treatments</p>
                <a
                  href="https://github.com/TLRKiliann/timetrack"
                  rel="noreferrer"
                  target="_blank">GitHub repository</a>
              </div>

            </div>

          </div>

          <hr style={{
            marginTop: "60px",
            marginBottom: "20px",
            width: "50%",
            color: "grey"
          }}/>

          <div className="subdiv--videos">

            <h3 className="title--videos">Javacript</h3>

            <div className="allvideos--div">

              <div className="yt--video">
                <YouTube opts={opts}
                  videoId="xzJERsvW6Ts"
                  className="YouTube--video"
                  />
                <h4>Scroll and click with Javascript</h4>
                <p>Change background with click or scroll.
                  HTML - CSS - JS</p>
                <a
                  href="https://github.com/TLRKiliann/timetrack"
                  rel="noreferrer"
                  target="_blank">GitHub repository</a>
              </div>

              <div className="yt--video">
                <YouTube opts={opts}
                  videoId="uHL0K4QXir4"
                  className="YouTube--video"
                  />
                <h4>Unicode(ASCII) keybord events</h4>
                <p>Unicode with event keybord & click in Javacript.</p>
                <a
                  href="https://github.com/TLRKiliann/"
                  rel="noreferrer"
                  target="_blank">GitHub repository</a>
              </div>

              <div className="yt--video">
                <YouTube opts={opts}
                  videoId="-6CSkkjEmBk"
                  className="YouTube--video"
                  />
                <h4>Animation Buttons</h4>
                <p>When user click that generate simultanously actions.
                  great demo !</p>
                <a
                  href="https://github.com/TLRKiliann/timetrack"
                  rel="noreferrer"
                  target="_blank">GitHub repository</a>
              </div>

            </div>

          </div>

          <hr style={{
            marginTop: "60px",
            marginBottom: "20px",
            width: "50%",
            color: "grey"
          }}/>

          <div className="subdiv--videos">

            <h3 className="title--videos">React</h3>

            <div className="allvideos--div">

              <div className="yt--video">
                <YouTube opts={opts}
                  videoId="iYtVlNlXSoo"
                  className="YouTube--video"
                  />
                <h4>MERN stack e-commerce</h4>
                <p>Front & Backend application with login & signup.<br/>
                  (TypeScript, Bootstrap5, Sass, Mongoose, API)<br/>
                  (read description below the video on yt).
                </p>
                <a
                  href="https://github.com/TLRKiliann/typescript-e-commerce"
                  rel="noreferrer"
                  target="_blank">GitHub repository</a>
              </div>

              <div className="yt--video">
                <YouTube opts={opts}
                  videoId="ImK_LimwiGY"
                  className="YouTube--video"
                  />
                <h4>API with axios & json</h4>
                <p>API.</p>
                <a
                  href="https://github.com/TLRKiliann/"
                  rel="noreferrer"
                  target="_blank">GitHub repository</a>
              </div>

              <div className="yt--video">
                <YouTube opts={opts}
                  videoId="j8OhzhDGnRE"
                  className="YouTube--video"
                  />
                <h4>Todo with TypeScript & Drag'n Drop</h4>
                <p>Very good educationnal practices with TypeScript
                  and to learn how to isolate components in React.
                  DND is a bonus !
                </p>
                <a
                  href="https://github.com/TLRKiliann/todo-typescript"
                  rel="noreferrer"
                  target="_blank">GitHub repository</a>
              </div>

            </div>

          </div>

          <hr style={{
            marginTop: "60px",
            marginBottom: "20px",
            width: "50%",
            color: "grey"
          }}/>

          <div className="subdiv--videos">

            <h3 className="title--videos">React</h3>

            <div className="allvideos--div">

              <section>
                Videos
              </section>

              <section>
                Videos2
              </section>

              <section>
                Videos3
              </section>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
