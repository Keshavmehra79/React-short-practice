import { useState } from "react";

const TaskToDo = () => {

    const [about, setAbout] = useState("");
    const [allText, setAllText] = useState([]);

    const handleDelete = (index) => {
        const filtered = allText.filter((_, i) => i !== index);
        setAllText(filtered);
    };

    const addData = (e) => {
        about.trim();
        if (about === "") return;
        setAllText([...allText, about])
    }

    const deleteData = () => {
        setAllText([]);
    }

    return (
        <>
            <h1>TO DO</h1>

            <label htmlFor="">Enter About Your Self</label><br />
            <textarea rows={10}  type="text" onChange={(e) => setAbout(e.target.value)} /> <button onClick={addData}>Add</button>

            <ul>
                {allText.map((val, index) => (
                    <li key={index}>
                        {val}
                        <button
                            onClick={() => handleDelete(index)}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={deleteData}>Erase All</button>

        </>
    )
}

export default TaskToDo;