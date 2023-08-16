import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProctectedRoute from './components/ProctectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProctectedRoute exact path="/" component={Home} />
    <ProctectedRoute exact path="/products" component={Products} />
    <ProctectedRoute exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
