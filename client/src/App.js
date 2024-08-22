import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { ChakraProvider } from '@chakra-ui/react'
import Task from './components/Task';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/tasks' element={<Task />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
