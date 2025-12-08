import React from "react";
import { useState } from "react";

const Task4 = () => {
    const [item, setitem] = useState("");
    const [items, setitems] = useState([]);



    // const handleadd = (val) => {
    //     if (item == "") return;
    //     setitem(val);
    //     setitems([...items, item]);
    //     setitem("")
    //     console.log(items);

    // }

    // const handledelete = (index) => {
    //     const filtered = items.filter((_, i) => { i != index });
    //     setitems(filtered)
    // }

    // const clearAll = () => {
    //     setitems([]);
    // }
    return (
        <>

            {/* Enter task: <input type="text" onChange={(e) => { handleadd(e.target.value) }} /><br></br><br></br>
            <button onClick={handleadd}>Add items</button>  <br></br>  <br></br>
            <button onClick={clearAll}>Clear All</button>

            <ul>
                {items.map((val, index) => {
                    return (
                        <li key={index}>{val}
                            <button onClick={handledelete}>Delete</button>
                        </li>
                    )
                })}
            </ul>

            <ul>
                <li>he he ha ha ho ho</li>
            </ul>
 */}


        </>
    )
}

export default Task4