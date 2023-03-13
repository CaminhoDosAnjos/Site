import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <div className="Menu-Topo">
          <ul className="Menu">
            <li>Home</li>
            <li>Fale Conosco</li>
            <li>Parceiros</li>
            <li>Entrar</li>
            <li>Criar Conta</li>
          </ul>
        </div>

        <div className="Logotipo">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" className="Search-Bar" placeholder="Do que você precisa?" />
          <ul className="Redes-Sociais">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Google</li>
            <li>Twitter</li>
          </ul>
        </div> */}











        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estamos construindo um novo site incrível! Em breve, estaremos de volta.
        </p>
        <a
          className="App-link"
          href="https://wa.me/5535997233493"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chama a gente no WhatsApp!
        </a>
      </header>
    </div>
  );
}

export default App;
