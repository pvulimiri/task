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
      <Route path='/task/login' element={<Login/>}/>
      <Route element={<NavBar/>}>
        <Route path='/task/' element={<Home/>}/>
        <Route path='/task/about' element={<About/>}/>
        <Route path='/task/services' element={<Home/>}/>
        <Route path='/task/:type' element={<FilteredExercises/>}/>
      </Route>
      <Route path='/task/help' element={<Help/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
