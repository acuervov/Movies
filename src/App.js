import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Favorites from './Components/Favorites/Favorites';
import Detail from './Components/Detail/Detail'
import Result from './Components/Result/Result'
import Landing from './Components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element={<Landing/>}/>
        <Route path = '/home/:pag' element={<Home/>}/>
        <Route path = '/favorites/:pag' element={<Favorites/>}/>
        <Route path = '/result/:pag' element={<Result/>}/>
        <Route path = '/detail/:id' element={<Detail/>}/>
      </Routes>
   </div>
  );
}

export default App;
