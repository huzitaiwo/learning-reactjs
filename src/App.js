import "./App.css";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

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
