import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from './Container'
import './index.css'

ReactDOM.render(
  <Router>
    <Container />
  </Router>,
  document.getElementById('root') // eslint-disable-line no-undef, comma-dangle
)
