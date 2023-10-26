import './index.css'
type propstype={
    
     id: string,
      userInput: string,
      
    }



const DisplayOutputMsg = (props: propstype) => {
    const {id,userInput}=props
    return(
<>          

  <div className="msg-from-chatbot-container">
  <p className="msg-from-chatbot"><span>{userInput}</span></p>
  </div > 
</>)
}

export default DisplayOutputMsg