import {Component} from 'react'

import "./index.css"
import {FaHeart} from "react-icons/fa"
let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
class LetsChat extends Component<any,any>{
    state={
        userInput: "",
        userOutput: ""
    }
    onChangeUserInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({userInput: event.target.value})
    }
    
    onSubmitSuccess = (output: string) => {
    this.setState({userOutput: output})
    this.onDisplayChat()
    }
    onDisplayChat=()=>{

    
    const {userInput,userOutput} = this.state
    return(
        <>
          
      <div className="msg-to-chatbot-container">
        <span className="msg-to-chatbot">{userInput}</span>
        </div>
        <div className="msg-from-chatbot-container">
        <span className="msg-from-chatbot">{userOutput}</span>
        </div >
       
        
         
        
      </>
    
    )
    }
  
    onSubmitFailure = (output: string) => {
      
      this.setState({userOutput: output})
    }

    submitForm = async (event: React.MouseEvent<HTMLButtonElement> ) => {
        
        const {userInput} = this.state
        const url = 'https://nvv1v521t4.execute-api.eu-north-1.amazonaws.com/Prod/userrequest'
        const options = {
          method: 'POST',
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "text/plain"
},
          //headers: {
            //"Content-Type": "text/plain"
          //},
          body: JSON.stringify({
            usermessage: userInput
        })
        }
        const response = await fetch(url, options)
        console.log(response)
        const data = await response.json()
        console.log(data)
        if (response.ok === true) {
          this.onSubmitSuccess(data.output)
        } else {
          this.onSubmitFailure(data.error_msg)
        }
      }

    render(){
        const {userInput,userOutput}=this.state
        return(
            <div className='login-form-container'>
            <div className="form-container">
        <h1 className="chatbot-heading">Meet our Chatbot</h1>
        <img className="image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-bot-img.png" />
        <div className="chat-container" >{this.onDisplayChat()}</div>
        <div className="d-flex flex-row justify-content-end">
            <img className="image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-boy-img.png" />
        </div>
        <div className="d-flex flex-row justify-content-center fixed-bottom">
            <input className="user-input" value={userInput}
          onChange={this.onChangeUserInput}/>
            <button   className="send-msg-btn" onClick={this.submitForm}>
               <FaHeart/>
            </button>
        </div>
    </div>
    </div>
        )
    }

}

export default LetsChat