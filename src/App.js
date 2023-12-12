import logo from './logo.svg';
import './App.css';
import Variable from './topics/Variable';
import Events from './topics/Events';
import SetState from './topics/SetState';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import DynamicStyleClass from './topics/DynamicStyleClass';
import DyanamicElement from './topics/DyanamicElement';
import Customer from './topics/Customer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/variables">variables</Link> 
              </li>
              <li className="nav-item">
               <Link className="nav-link active" to="/events">Events</Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/setState">Events</Link>  
              </li> 
              <li className="nav-item">
                <Link className="nav-link active" to="/dynamicStyleClass">Dynamic Css</Link>  
              </li> 
              <li className="nav-item">
                <Link className="nav-link active" to="/dynamicElement">Dynamic Element</Link>  
              </li> 
              <li className="nav-item">
                <Link className="nav-link active" to="/customer">Customer</Link>  
              </li> 
            </ul>
          </div>
        </nav>
        <Routes>
          {/* Default Route */}
          <Route path='/' element={<Variable />} ></Route>

          <Route path='/variables' element={<Variable></Variable>}></Route>
          <Route path='/events' element={<Events></Events>}></Route>
          <Route path='/customer' element={<Customer></Customer>}></Route>
          <Route path='/setState' element={<SetState></SetState>}></Route>
          <Route path='/dynamicStyleClass' element={<DynamicStyleClass></DynamicStyleClass>}></Route>
          <Route path='/dynamicElement' element={<DyanamicElement></DyanamicElement>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
