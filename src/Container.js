import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import New from './new'
import List from './list'
import Detail from './detail'
import './Container.css'


function toggleNewItem(history) {
  const { pathname } = history.location
  if (pathname === '/') {
    history.push('/new')
  } else {
    history.push('/')
  }
}

class Container extends Component {
  constructor() {
    super()
    this.addItem = this.addItem.bind(this)
    this.state = {
      listItems: JSON.parse(localStorage.getItem('listItems')) || [], // eslint-disable-line no-undef
    }
  }

  addItem(name, email) {
    const newListItems = [{ name, email }].concat(this.state.listItems)
    localStorage.setItem('listItems', JSON.stringify(newListItems)) // eslint-disable-line no-undef
    this.setState({ listItems: newListItems })
  }

  render() {
    const addNewItemButton = withRouter(({ history }) => (
      <button
        className="btn btn-primary btn-block"
        onClick={() => toggleNewItem(history)}
      >
        Add a new item
      </button>
    ))

    const newWithRouter = withRouter(({ history }) => (
      <div>
        <New addItem={this.addItem} pushHistory={history.push} />
      </div>
    ))

    return (
      <div className="container">
        <div className="col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3 py-5">
          <div className="form-group">
            {addNewItemButton()}
          </div>
          <Route path="/new" component={newWithRouter} />
          <List listItems={this.state.listItems} />
          <Route path="/detail" component={Detail} />
        </div>
      </div>
    )
  }
}
export default Container
