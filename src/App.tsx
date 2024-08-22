import { ChangeEvent, SyntheticEvent, useState } from 'react'
import './App.css'


function App() {

    const [toDoItems, setToDoItems] = useState<string[]>([]);

    
    function handleCheckbox(event: ChangeEvent) {
        console.log(event);
        console.log(toDoItems);
        let listID = Number((event.currentTarget as HTMLInputElement).id);
        console.log(listID);
        /*
        if(event.target.checked){
            setToDoItems((toDoItems) => (toDoItems.filter((_, index) => {return index != listID })));
        }
        */
    }

    function handleRemoval(event) {
        console.log(event);
        console.log(toDoItems);
        let listID = Number((event.currentTarget as HTMLInputElement).id);
        console.log(listID);
        setToDoItems((toDoItems) => (toDoItems.filter((_, index) => {return index != listID })));
    }

    

    
    const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        
        if(event.key == "Enter"){
            setToDoItems((toDoItems) => {return [...toDoItems, (event.target as HTMLInputElement).value]});
        }
    };

    /*
     />
    */
    return (

        <form id="myToDoForm" onSubmit={e => {e.preventDefault();}}>
            <input id="myInput" onKeyDown={handleInput} placeholder="Add to ToDo items" />


            <ul>
                {
                    toDoItems.map((item, index) => {
                        return <li key={index} >
                            {item}
                            
                            <input id={String(index)} type="checkbox" onChange={(event) => (handleCheckbox(event))}  />
                            <button id={String(index)} onClick={(event) => (handleRemoval(event))} />
                            
                        </li>
                    })
                }
            </ul>

        </form>
    )
}

export default App;
