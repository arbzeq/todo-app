import { useState } from 'react'
import './App.css'

function App() {

    const [toDoItems, setTodoItems] = useState<string[]>([]);

    function onChangeCheckbox(event) {
        console.log(event);
    }

    return (

        <form>
            <input
                onChange={
                    (event) => {
                        console.log(event);
                        console.log(event.key);
                        console.log(event.currentTarget.value);
                        if (event.key == "Enter") {
                            setTodoItems(oldToDoItems => [...oldToDoItems, event.currentTarget.value])
                        }
                    )}
                placeholder="Add to ToDo items"
            />


            

            <ul>
                {
                    toDoItems.map((item, index) => (<li key={index}>
                        {item} <input id={"checkbox" + index} type="checkbox" onChange={(event) => (onChangeCheckbox(event))} />
                    </li>))
                }
            </ul>




        </form>
    )
}

export default App;
