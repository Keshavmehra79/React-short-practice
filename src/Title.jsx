import { useEffect, useState } from "react"

const Title=()=>{
    const [text,changetitle]=useState(null);

    useEffect(()=>{
        document.title= text || "Typing something....." ;

    },[text])
return(
    <>
    <h1>Update Title</h1>
    <input type="text" onChange={(e)=>{changetitle(e.target.value)}}/>
    
    </>
)
}
export default Title