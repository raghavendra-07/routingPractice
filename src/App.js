import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const App = () => (
  <div className="app-con">
    <BrowserRouter>
      <div className="responsive-con">
        <Header className="main-con" />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </div>
)

export default App
