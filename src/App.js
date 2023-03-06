import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="contact">
      <img src="IMG.jpg" alt="poza profil"></img>
      <h3>CONTACT</h3>
        <ul>
          <li>Phone
            <p>+40756 87 55 00</p>
          </li>
          <li>Email 
           <p>balajelandrea@yahoo.com</p> 
          </li>
          <li>Address
            <p>Cluj-Napoca, jud Cluj</p>
          </li>
        </ul>
    </div>
    
    <div className='about'>
      <h1>NAN ANDREA</h1>
      <div>
        <h3>ABOUT ME</h3>
        <p>Sunt o persoana energica, cu o gandire analitica, axata pe performanta.<br/>
        Cele mai mari calitati ale mele sunt seriozitatea si perseverenta.<br/>
        Sunt o persoana care se adapteaza foarte repede in colective noi si imi place munca in echipa.
        
          </p>
        <h3>EDUCATION</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <h3>WORK EXPERIENCE</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
      </div>
    </div>
    </div>
  );
}

export default App;
