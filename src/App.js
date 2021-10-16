import imageSrc from './imageInSrc.png';
import './Style.css';

function App() {

  return (
 
<div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Zouzou</h1>
          <br />
          <img src={imageSrc} alt="lala"/>
          <br />
          <img src="imageInPublic.png" alt="lala"/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
  );
}

export default App;
