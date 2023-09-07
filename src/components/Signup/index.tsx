import {Component} from 'react'
import Cookies from 'js-cookie'
import {Navigate,RouterProviderProps} from 'react-router-dom'

import './index.css'

interface Props extends RouterProviderProps{
    
}

class Signup extends Component<any ,any>{
  state = {
    username: '',
    password: '',
    repassword: '',
    emailId:'',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({username: event.target.value})
  }

  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({password: event.target.value})
  }
  onChangeRePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({repassword: event.target.value})
  }
  onChangeEmailId = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({emailId: event.target.value})
  }

  onSubmitSuccess = (jwtToken: string) => {
    
   
  }

  onSubmitFailure = (errorMsg: string) => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async (event: any) => {
    event.preventDefault()
    const {username, password,emailId} = this.state
    const userDetails = {username, password,emailId,}
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

  renderRetypePasswordField  = () => {
    const {repassword} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          Re-Type PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={repassword}
          onChange={this.onChangeRePassword}
        />
      </>
    )
  }

  renderEmailIDField = () => {
    const {emailId} = this.state
    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL ID
        </label>
        <input
          type="email"
          id="email"
          className="password-input-field"
          value={emailId}
          onChange={this.onChangeEmailId}
        />
      </>
    )
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
        
         
        <form className="form-container" onSubmit={this.submitForm}>
          
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderRetypePasswordField()}</div>
          <div className="input-container">{this.renderEmailIDField()}</div>
          <button type="submit" className="login-button">
            Create Account
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Signup