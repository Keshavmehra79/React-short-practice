import React, { useState } from 'react'

function Formhandle() {
    const [input, setName] = useState({});

    const handleschange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setName(values => ({ ...values, [name]: value }))
    }

    const handlesubmit = () => {
        console.log(input);
    }
    return (<>
        Enter name: <input type="text" name="name" onChange={handleschange} />
        <br />
        Enter city : <input type="text" name="city" onChange={handleschange} />
        <br />
        Enter fees: <input type="text" name="fees" onChange={handleschange} />
        <br />
        Enter class: <input type="text" name="class" onChange={handleschange} />
        <br />
        <button onClick={handlesubmit}>submit</button>

    </>
    )
}

export default Formhandle