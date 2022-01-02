import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import { useFetch } from './hooks/useFetch';

// styles
import "./App.css";

// page components
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h2>My Articles</h2>

          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
