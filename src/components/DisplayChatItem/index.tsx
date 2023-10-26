import './index.css'
type propstype={
    
     id: string,
      MsgData: string,
      category: string
      
    }



const DisplayChatItem = (props: propstype) => {
    const {id,MsgData,category}=props
    const showFromMsg=category==="From"
    const showToMSg=category==="To"
    return(
<>  
 {   showFromMsg &&(
<div className="msg-to-chatbot-container">
  <span className="msg-to-chatbot">{MsgData}</span>
  </div>)}
  {showToMSg &&(
  <div className="msg-from-chatbot-container">
  <p className="msg-from-chatbot"><span>{MsgData}</span></p>
  </div >) }
  
</>)
}

export default DisplayChatItem