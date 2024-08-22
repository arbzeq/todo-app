import { useState } from 'react'
import './App.css'


function App() {

    const [toDoItems, setToDoItems] = useState<string[]>([]);

    /*
    function handleCheckbox(event) {
        console.log(event);
        console.log(toDoItems);
        if(event.target.checked){
            
        }
    }
    */

    
    const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        
        console.log("event:", event);
        console.log("event.target: ", event.target);

        console.log("event.currentTarget.value: ", event.currentTarget.value);
        if(event.key == "Enter"){
            setToDoItems((toDoItems) => {return [...toDoItems, event.currentTarget.value]});
        }
    };

    /*
    <input id={"checkbox" + index} type="checkbox" onChange={(event) => (handleCheckbox(event))} />
    */
    return (

        <form id="myToDoForm" onSubmit={e => {e.preventDefault();}}>
            <input id="myInput" onKeyDown={handleInput} placeholder="Add to ToDo items" />


            <ul>
                {
                    toDoItems.map((item, index) => (
                    <li key={index}> {item} </li>))
                }
            </ul>

        </form>
    )
}

export default App;
