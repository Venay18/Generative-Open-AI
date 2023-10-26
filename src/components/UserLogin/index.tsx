import {Component} from "react"
import {Link} from "react-router-dom"
import "./index.css"

 const UserLogin = ()=>{
    
    return(
        <div className="login-form-container">
        <div className="form-container">
           
            <h1 className="heading">Welcome to Chat Bot</h1>
            <p className="para">Lets login into our Chat Bot </p>
           
            <Link to="https://userlogin.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=3m4tp9cpd4in030s58uoqj84na&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fletschat"
            > <button className="login-button">Login</button></Link>

            </div>
            </div>
       
    )


    
 }

 export default UserLogin