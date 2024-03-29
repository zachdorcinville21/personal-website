import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './components/Main/Main';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import { GlobalStyle } from './global.styled';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
