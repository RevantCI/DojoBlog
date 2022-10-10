import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
     <div className="content">
      
        <Switch>
          <Route path="/">
          <Home />
          </Route> 
        </Switch>
      
           </div>
    </div>
  );
}

export default App;
