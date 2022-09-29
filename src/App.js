
import './App.css';
import Header from './Components/Header/Header';
import Busqueda from './Components/Busuqueda/Busqueda';
import {Link, BrowserRouter, Route, Routes} from "react-router-dom"
import Player from './Components/Player/Player';
import Video from './Components/Video/Video';


function App() {



  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header titulo="Music Web-app"/>
      <ul className='nav bg-dark ' >
        <li><Link className='nav-link' to="Player" alt="">Player</Link></li>
        <li><Link className='nav-link' to="Video" alt="">Video</Link></li>
      </ul>
      <Busqueda />
      
      <main className="container">
        <Routes>
        <Route exact path="Player" element={<Player/>}></Route>
        <Route exact path="Video" element={<Video/>}></Route>
        </Routes>
    

    </main>
   </BrowserRouter>

  );
}

export default App;
