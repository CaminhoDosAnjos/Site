import Container from 'react-bootstrap/Container';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
  return (
    <div className="container-fluid vw-100 vh-100 d-flex align-items-center justify-content-center text-center under_construction">
      <div className="row">
        <div className="col-md-12">
          <h1>Nosso site está em construção.</h1>
          <h3>Siga-nos nas Redes Sociais e fique por dentro!</h3>

          <a href="https://www.facebook.com/araucariaecoturpg" rel="noreferrer" target={'_blank'}><FontAwesomeIcon icon={brands('facebook')} /></a>
          <a href="https://www.instagram.com/caminhodosanjosmg/" rel="noreferrer" target={'_blank'}><FontAwesomeIcon icon={brands('instagram')} /></a>
          <a href="https://goo.gl/maps/Cty39K2UcL9Lr6Q59" rel="noreferrer" target={'_blank'}><FontAwesomeIcon icon={brands('google')} /></a>
          <a href="https://www.youtube.com/channel/UCHZmJCtwPLat38yoGg_zwqQ" rel="noreferrer" target={'_blank'}><FontAwesomeIcon icon={brands('youtube')} /></a>

        </div>
      </div>
    </div>
  );
}

export default App;
