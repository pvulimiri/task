import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
// import Layout from './components/Layout';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Help from './components/Help';
import FilteredExercises from './components/FilteredExcercises';
import About from './components/About';
// import { createContext } from 'react';

// export const valueSelected = createContext()

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route element={<NavBar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Home/>}/>
        <Route path='/:type' element={<FilteredExercises/>}/>
      </Route>
      <Route path='/help' element={<Help/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
