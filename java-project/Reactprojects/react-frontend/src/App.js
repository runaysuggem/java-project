import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (

    <div>

     <HeaderComponent/>
     <Router>

    <div className="container">
      <Routes>
          <Route exact path="/" element={<ListEmployeeComponent/>}/>
          <Route path="/employees" element={<ListEmployeeComponent/>}/>
          <Route path="/add-employee" element={<CreateEmployeeComponent/>}/>
          <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
      </Routes>
    </div>

    </Router> 
    <FooterComponent/>

    </div>
  );
}

export default App;
