import React from 'react';
import axios from 'axios';
import {
  Route,
  Routes
} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Header } from './components'
import { Home, Cart } from './Pages';
import { setPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch()

  // window.test = () => {
  //   axios.get('http://localhost:3001/pizzas?_order=desc&_sort=price').then(({ data }) => {
  //     dispatch(setPizzas(data.pizzas))
  //   })
  // }
  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }, [])


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}
export default App
