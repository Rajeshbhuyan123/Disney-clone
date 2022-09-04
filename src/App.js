import './App.css';
import Login from "./component/Login";
import Header from "./component/Header"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import Detail from './component/Detail';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
           <Routes>
              <Route path="/" element={<Login />}/>
              <Route path='/home' element={<Home />}/>
              <Route path="/detail/:id" element={<Detail />}/>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
