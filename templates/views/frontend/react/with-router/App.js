import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import styles from './App.module.css'

function App (props) {
  return (
    <div className={styles['App']}>
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
