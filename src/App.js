import './App.css';
// import History from './Conponents/History';
// import HomePage from './Conponents/HomePage';
import Navbar from './Conponents/Navbar';
// import Product from './Conponents/Product';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>App Page</h1>
      {
        console.log("shubham")
      }
      {/* <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/history' element={<History/> } />
      </Routes> */}
    </div>
  );
}

export default App;
