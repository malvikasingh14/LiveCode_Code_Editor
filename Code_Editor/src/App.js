import "./App.css";
import Landing from "./components/Landing";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import {Toaster} from 'react-hot-toast';


function App() {
  return <>
  <div>
    <Toaster position='top-center' 
    toastOptions={{
      success:{
        theme: {
          primary: '#000',
        }

    }}}></Toaster>
  </div>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Landing/:roomId' element={<Landing/>}></Route>
    </Routes>
  </BrowserRouter>
</>
}

export default App;
