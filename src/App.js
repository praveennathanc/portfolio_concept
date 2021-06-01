import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './Component/Home';
import dummy from './Component/dummy'

function App() {
  return (
    <div className="App">
   <Router>
    

     <Switch>
        <Route exact path='/' component={Home}/>
       <Route path="/dummy" component={dummy}/>
     </Switch>
   </Router>
    </div>
  );
}

export default App;
