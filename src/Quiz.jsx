import { useState } from "react";

const Quiz = () => {
    const Q1 = "what's the biggest between in 60 or 20?";
    const Q2 = "What's the prime minister of india?";
    const Q3 = "What's the owner of microsoft?";
    const arr = [Q1, Q2, Q3];
    const [count, setCount] = useState(0);
    const [ans,setans]=useState("");
    const nextQ = () => {
        if (count < arr.length - 1) setCount(count + 1);
    }

    return (
        <>
            <div>
                <h1>{arr[count]}</h1><br></br><br></br>
                <input type="radio" value="30" checked /> A.30<br></br>
                <input type="radio" value="60" /> B.60<br></br>
                <input type="radio" value="20" /> C.20<br></br>
                <input type="radio" value="50" /> D.50<br></br>

                <button >Submit</button>
                <button onClick={nextQ}>Next question</button><br></br>

            </div>



        </>
    )
}

export default Quiz