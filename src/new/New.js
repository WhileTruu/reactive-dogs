import React, { Component, PropTypes } from 'react'

class New extends Component {
  constructor(props) {
    super(props)
    this.isNameValid = this.isNameValid.bind(this)
    this.isEmailValid = this.isEmailValid.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.isValid = this.isValid.bind(this)
    this.state = {
      name: '',
      email: '',
      error: {
        name: '',
        email: '',
      },
    }
  }


  onNameChange(event) {
    this.isNameValid(event.target.value)
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.isEmailValid(event.target.value)
    this.setState({ email: event.target.value })
  }

  isNameValid(name) {
    if (!name.length) {
      this.setState({
        error: { ...this.state.error, name: 'Please enter a name.' },
      })
      return false
    }
    this.setState({
      error: { ...this.state.error, name: '' },
    })
    return true
  }

  isEmailValid(email) {
    if (!email.length) {
      this.setState({
        error: { ...this.state.error, email: 'Please enter an email address.' },
      })
      return false
    }
    this.setState({
      error: { ...this.state.error, email: '' },
    })
    return true
  }

  isValid() {
    if (!this.isNameValid(this.state.name)) {
      return false
    } else if (!this.isEmailValid(this.state.email)) {
      return false
    } else if (!this.state.email.includes('@')) {
      this.setState({
        error: { ...this.state.error, email: 'An email address must include an "@" sign.' },
      })
      return false
    }
    return true
  }

  addItem() {
    if (this.isValid()) {
      this.props.addItem(this.state.name, this.state.email)
      this.props.pushHistory('/')
    }
  }

  render() {
    const { name, email, error } = this.state
    const renderButtons = (
      <div>
        <button
          className="btn btn-danger"
          onClick={() => this.props.pushHistory('/')} // eslint-disable-line
        >
          {name.length || email.length ? 'Cancel' : 'Close'}
        </button>
        <button
          className="btn btn-success ml-2"
          onClick={this.addItem}
        >
          Add
        </button>
      </div>
    )
    return (
      <div>
        <div className={`form-group ${error.name.length ? 'has-danger' : ''}`}>
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter a name..."
            onChange={this.onNameChange}
          />
          <div className="form-control-feedback">
            {error.name}
          </div>
        </div>
        <div className={`form-group ${error.email.length ? 'has-danger' : ''}`}>
          <label htmlFor="emailInput">Email</label>
          <input
            type="email"
            className="form-control"
            id="address"
            placeholder="Enter an email address..."
            onChange={this.onEmailChange}
          />
          <div className="form-control-feedback">
            {error.email}
          </div>
        </div>
        <div className="form-inline justify-content-end">
          {renderButtons}
        </div>
      </div>
    )
  }
}

New.propTypes = {
  addItem: PropTypes.func.isRequired,
  pushHistory: PropTypes.func.isRequired,
}

export default New
