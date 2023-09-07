import {Component} from 'react'
import Cookies from 'js-cookie'
import {Navigate,RouterProviderProps,Link} from 'react-router-dom'

import './index.css'

interface Props extends RouterProviderProps{
    
}

class Login extends Component<any ,any>{
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({username: event.target.value})
  }

  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = (jwtToken: string) => {
    
   
  }

  onSubmitFailure = (errorMsg: string) => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = ''
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Navigate to="/" />
    }
    return (
      <div className="login-form-container">
        
        <div>
        <form className="form-container" onSubmit={this.submitForm}>
          
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
           <div className="create-container">
            <p className="crate-ele" >Don't have an account ?</p>
            <Link className="nav-link" to="/Signup">Create an account</Link>
        </div>
        </div>
      </div>
    )
  }
}

export default Login