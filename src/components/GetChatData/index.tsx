import {Component,SetStateAction,Dispatch} from 'react'
import {v4 as uuidv4} from 'uuid'

class GetChatData extends Component{

    onSubmitSuccess = (data: any) => {
        data =JSON.parse(data)
      //let [[bot,user]]=data
      //console.log(bot)
      //console.log(data[0])
      for (let i=0 ;i<=data[0].length;i++){
        const newMsg = {
          id: uuidv4(),
          MsgData: data[0][i],
          category: "To"
          
        }
        this.setState((prevState: any)  => ({
          chatbotMsgList: [...prevState.chatbotMsgList, newMsg],
          
          
        }))
        const newMsg1 = {
          id: uuidv4(),
          MsgData: data[1][i],
          category: "From"
          
        }
        this.setState((prevState: any)  => ({
          chatbotMsgList: [...prevState.chatbotMsgList, newMsg1],
          
          
        }))

          
        }
        
    }
      
    submitForm=async()=>{   
    let id_url=window.location.href.split("=");
        //console.log(id_url)
        //var access_token=
        const id_array=id_url[1].split("&"[0])
        const id_token=id_array[0]
        const url = 'https://nvv1v521t4.execute-api.eu-north-1.amazonaws.com/Prod/userrequest'
        
        const options = {
          
         headers: {
          Authorization: `Bearer ${id_token}`,
          //eyJraWQiOiJINTZETnpOWWppdlwvQ3R6ZWlyTFJROVVTZFFBVVBmRllzK0NmKzJqS0pjST0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiV2xCbTdMU1l5azhFZHpuTnREZGJBdyIsInN1YiI6Ijc0YmYwNDQwLTcwYTctNGMzNS1hNzg4LTI1YzIyNmU3MmFmNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZsTnFtSkw1QSIsImNvZ25pdG86dXNlcm5hbWUiOiI3NGJmMDQ0MC03MGE3LTRjMzUtYTc4OC0yNWMyMjZlNzJhZjYiLCJhdWQiOiIzbTR0cDljcGQ0aW4wMzBzNTh1b3FqODRuYSIsImV2ZW50X2lkIjoiNjgwMzdmODItNjk2My00MTdjLWE2NjUtY2NkYTlmZjNkYWI0IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTU2MzQxMzQsImV4cCI6MTY5NTYzNzczNCwiaWF0IjoxNjk1NjM0MTM0LCJqdGkiOiIxZjkzZTBhMy1jNDYwLTRhNzYtOGQzZC1mYzgyYzI3ZmQwMjciLCJlbWFpbCI6InZpbmF5LmtvbW1hMThAZ21haWwuY29tIn0.PLJCs35JadeVbe1qiOjCrlM0ieq0c8Cmeun_HZwLQ0ms1aR4eFFJZZ7K-SU6djZJqoiZz1BsBxJYaeBSzHdGeYE5DofhuT_EHu3v2sXu3wvVKirb9EWcS3F3huwt-SkRxs5l-Jjcx31wpo-r_Bh52eWrnrlFd4zDLMhwZa2svTCecVHB9ITO27TDbPVA73_FhOt9GZ-PkFACEx9U6pv9TouzNg5B8lZ1mTB9-oGyD5FUurnv3mS5cZhJ-EGCWLrGweZDXy3YhaOrP8QtEda8UQ7tTbJdXDbzf9eqIvfd5hHX53DcoRclHVw1oHjzG82fxkiMCAD5hrMr5DaoBQ3T1w",
         },
         method: 'GET',
        }
        const response = await fetch(url, options)
        //console.log(response)
        const data = await response.json()
        console.log(data)
        if (response.ok === true) {
          this.onSubmitSuccess(data.body)
        } else {
          //this.onSubmitFailure(data.error_msg)
        }
    }
    

    render(){

        return(
            <>
            {this.submitForm}
            </>
        )
    }
}

export default GetChatData
