import {Component,SetStateAction,Dispatch} from 'react'
import DisplayChatItem from "../DisplayChatItem"
import {v4 as uuidv4} from 'uuid'
import "./index.css"
import {FaTelegramPlane} from "react-icons/fa"

import DisplayOutputMsg from '../DisplayOutputMsg'
import { Interface } from 'readline'
import { redirect ,Navigate} from 'react-router-dom'

type eachItem={
     
  id: string,
  MsgData: string,
  category: string
  
} 
type stateType={
  chatbotMsgList: [],
  userInput: string,
  outputMsg: string


}

let initalchatbotMsgList: eachItem[]= [] ;
const onGetSubmitSuccess=async ()=>{
  let id_url=window.location.href.split("=");
  console.log(id_url)
  //var access_token=
  let id_array=id_url[1].split("&"[0])
  let id_token=id_array[0]
  
  const url = 'https://nvv1v521t4.execute-api.eu-north-1.amazonaws.com/Prod/userrequest'
  const options1={
    headers: {
      Authorization: `Bearer ${id_token}`,
      //eyJraWQiOiJINTZETnpOWWppdlwvQ3R6ZWlyTFJROVVTZFFBVVBmRllzK0NmKzJqS0pjST0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiV2xCbTdMU1l5azhFZHpuTnREZGJBdyIsInN1YiI6Ijc0YmYwNDQwLTcwYTctNGMzNS1hNzg4LTI1YzIyNmU3MmFmNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZsTnFtSkw1QSIsImNvZ25pdG86dXNlcm5hbWUiOiI3NGJmMDQ0MC03MGE3LTRjMzUtYTc4OC0yNWMyMjZlNzJhZjYiLCJhdWQiOiIzbTR0cDljcGQ0aW4wMzBzNTh1b3FqODRuYSIsImV2ZW50X2lkIjoiNjgwMzdmODItNjk2My00MTdjLWE2NjUtY2NkYTlmZjNkYWI0IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTU2MzQxMzQsImV4cCI6MTY5NTYzNzczNCwiaWF0IjoxNjk1NjM0MTM0LCJqdGkiOiIxZjkzZTBhMy1jNDYwLTRhNzYtOGQzZC1mYzgyYzI3ZmQwMjciLCJlbWFpbCI6InZpbmF5LmtvbW1hMThAZ21haWwuY29tIn0.PLJCs35JadeVbe1qiOjCrlM0ieq0c8Cmeun_HZwLQ0ms1aR4eFFJZZ7K-SU6djZJqoiZz1BsBxJYaeBSzHdGeYE5DofhuT_EHu3v2sXu3wvVKirb9EWcS3F3huwt-SkRxs5l-Jjcx31wpo-r_Bh52eWrnrlFd4zDLMhwZa2svTCecVHB9ITO27TDbPVA73_FhOt9GZ-PkFACEx9U6pv9TouzNg5B8lZ1mTB9-oGyD5FUurnv3mS5cZhJ-EGCWLrGweZDXy3YhaOrP8QtEda8UQ7tTbJdXDbzf9eqIvfd5hHX53DcoRclHVw1oHjzG82fxkiMCAD5hrMr5DaoBQ3T1w",
     },
     method: 'GET'

  }
  const getResponse=await fetch(url,options1)
  console.log(getResponse)
  const getdata = await getResponse.json()
  console.log(getdata)
  if(getdata=="The incoming token has expired"){
    <Navigate to=
    "https://userlogin.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=3m4tp9cpd4in030s58uoqj84na&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fletschat"
   />
  }
  let data=[[],[]]
  if(getdata.body){
  data =JSON.parse(getdata.body)
  }
  //let [[bot,user]]=data
  //console.log(bot)
  //console.log(data[0])
  for (let i=0 ;i<data[0].length;i++){
    const newMsg = {
      id: uuidv4(),
      MsgData: data[1][i],
      category: "From"
      
    }
    initalchatbotMsgList.push(newMsg)
    const newMsg1 = {
      id: uuidv4(),
      MsgData: data[0][i],
      category: "To"
      
    }
    initalchatbotMsgList.push(newMsg1)

  }
}
onGetSubmitSuccess()

class LetsChat extends Component{
  
  
  
  state={
        chatbotMsgList: initalchatbotMsgList,
        
        //[{id: '1',userInput: "hi",category: "to"},{id: '2',userInput: "hi",category: "to"}],
        userInput: "",
        outputMsg: ""
    }
    onChangeUserInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
      //this.onGetSubmitSuccess()
        this.setState({userInput: event.target.value})
    }
    // onGetSubmitSuccess=(data: any)=>{
    //   data =JSON.parse(data)
    //   //let [[bot,user]]=data
    //   //console.log(bot)
    //   //console.log(data[0])
    //   for (let i=0 ;i<=data[0].length;i++){
    //     const newMsg = {
    //       id: uuidv4(),
    //       MsgData: data[0][i],
    //       category: "To"
          
    //     }
    //     this.setState((prevState: any)  => ({
    //       chatbotMsgList: [...prevState.chatbotMsgList, newMsg],
          
          
    //     }))
    //     const newMsg1 = {
    //       id: uuidv4(),
    //       MsgData: data[1][i],
    //       category: "From"
          
    //     }
    //     this.setState((prevState: any)  => ({
    //       chatbotMsgList: [...prevState.chatbotMsgList, newMsg1],
          
          
    //     }))

    //   }
      // for (let i=0 ;i<=data[1].length;i++){
      //   const newMsg = {
      //     id: uuidv4(),
      //     MsgData: data[1][i],
      //     category: "From"
          
      //   }
      //   this.setState((prevState: any)  => ({
      //     chatbotMsgList: [...prevState.chatbotMsgList, newMsg],
          
          
      //   }))

      // }
      //console.log("Vinay")

    
    
    onSubmitSuccess = (output: string) => {
      output=output.replaceAll("\\n", "\n");
      //replace("\n","<br/>")
      const newMsg = {
        id: uuidv4(),
        MsgData: output,
        category: "To"
        
      }
      this.setState((prevState: stateType)  => ({
        chatbotMsgList: [...prevState.chatbotMsgList, newMsg],
        outputMsg: ''
        
      }))
    
    
    }

    onDisplayChat=()=>{
    let {userInput,outputMsg,chatbotMsgList} = this.state
    //outputMsg=outputMsg.replace("\\n", "\n")
  
    type eachItemType={
     
      id: string,
      MsgData: string,
      category: string
      
    }
    
    return(
      <>
      {chatbotMsgList.map((eachItem: eachItemType) => (
        <DisplayChatItem
          key={eachItem.id}
          id={eachItem.id}
          MsgData={eachItem.MsgData}
          category={eachItem.category}
          
          
          
        />))}
        
        </>
          
     
    
    )
    }
  
    onSubmitFailure = (output: string) => {
      
      this.setState({userOutput: output})
    }

    submitForm = async (event: React.MouseEvent<HTMLButtonElement> ) => {
      type stateType={
        chatbotMsgList: []
        
      }
        const {userInput} = this.state
        const newMsg = {
          id: uuidv4(),
          MsgData: userInput,
          category: "From"
          
        }
        this.setState((prevState: stateType)  => ({
          chatbotMsgList: [...prevState.chatbotMsgList, newMsg],
          userInput: ''
          
        }))
        let id_url=window.location.href.split("=");
        //console.log(id_url)
        //var access_token=
        let id_array=id_url[1].split("&"[0])
        let id_token=id_array[0]
        
        const url = 'https://nvv1v521t4.execute-api.eu-north-1.amazonaws.com/Prod/userrequest'

        const options = {
          
         headers: {
          Authorization: `Bearer ${id_token}`,
          //eyJraWQiOiJINTZETnpOWWppdlwvQ3R6ZWlyTFJROVVTZFFBVVBmRllzK0NmKzJqS0pjST0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiV2xCbTdMU1l5azhFZHpuTnREZGJBdyIsInN1YiI6Ijc0YmYwNDQwLTcwYTctNGMzNS1hNzg4LTI1YzIyNmU3MmFmNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZsTnFtSkw1QSIsImNvZ25pdG86dXNlcm5hbWUiOiI3NGJmMDQ0MC03MGE3LTRjMzUtYTc4OC0yNWMyMjZlNzJhZjYiLCJhdWQiOiIzbTR0cDljcGQ0aW4wMzBzNTh1b3FqODRuYSIsImV2ZW50X2lkIjoiNjgwMzdmODItNjk2My00MTdjLWE2NjUtY2NkYTlmZjNkYWI0IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTU2MzQxMzQsImV4cCI6MTY5NTYzNzczNCwiaWF0IjoxNjk1NjM0MTM0LCJqdGkiOiIxZjkzZTBhMy1jNDYwLTRhNzYtOGQzZC1mYzgyYzI3ZmQwMjciLCJlbWFpbCI6InZpbmF5LmtvbW1hMThAZ21haWwuY29tIn0.PLJCs35JadeVbe1qiOjCrlM0ieq0c8Cmeun_HZwLQ0ms1aR4eFFJZZ7K-SU6djZJqoiZz1BsBxJYaeBSzHdGeYE5DofhuT_EHu3v2sXu3wvVKirb9EWcS3F3huwt-SkRxs5l-Jjcx31wpo-r_Bh52eWrnrlFd4zDLMhwZa2svTCecVHB9ITO27TDbPVA73_FhOt9GZ-PkFACEx9U6pv9TouzNg5B8lZ1mTB9-oGyD5FUurnv3mS5cZhJ-EGCWLrGweZDXy3YhaOrP8QtEda8UQ7tTbJdXDbzf9eqIvfd5hHX53DcoRclHVw1oHjzG82fxkiMCAD5hrMr5DaoBQ3T1w",
         },
         method: 'POST',

//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//             "Access-Control-Allow-Headers": "Content-Type",
//             "Content-Type": "text/plain"
// },
          //headers: {
            //"Content-Type": "text/plain"
          //},
          body: JSON.stringify({
            usermessage: userInput
        })
        }
        
        
        const response = await fetch(url, options)
        //console.log(response)
        const data = await response.json()
        
        console.log(data)
        if (response.ok === true) {
          this.onSubmitSuccess(data.body)
        } else {
          this.onSubmitFailure(data.error_msg)
        }
      }
  

    render(){
        const {userInput}=this.state
        const enabled = userInput.length > 0
        //this.submitForm(enabled)
        return(
            <div className='login-form-container'>
         
        <h1 className="chatbot-heading">Meet our Chatbot</h1>
        <img className="image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-bot-img.png" />
        <div className="chat-container" >{this.onDisplayChat()}</div>
        <div className="d-flex flex-row justify-content-end">
            <img className="image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-boy-img.png" />
        </div>
        <div className="d-flex flex-row justify-content-center fixed-bottom">
            <input className="user-input" placeholder="Type here" value={userInput}
          onChange={this.onChangeUserInput}/>
            <button disabled={!enabled}  className="send-msg-btn" onClick={this.submitForm}>
               <FaTelegramPlane/>
            </button>
        </div>
        
    </div>
   
        )
    }

}

export default LetsChat