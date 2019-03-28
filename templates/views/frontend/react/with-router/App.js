import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App (props) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          render={props => <Home {...props} />}
        />
        <Route
          exact
          path='/about'
          render={props => <About {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App
