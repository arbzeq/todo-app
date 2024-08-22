import { ChangeEvent, SyntheticEvent, useState } from 'react'
import './App.css'


function App() {

    const [toDoItems, setToDoItems] = useState<string[]>([]);

    
    function handleCheckbox(event: ChangeEvent) {
        let targetElement = (event.target as HTMLInputElement);
        console.log(event);
        console.log(toDoItems);
        let listID = Number(targetElement.id);
        console.log(listID);
        
        if(targetElement.checked){
            targetElement.parentElement.classList.add("lineThrough"); 
        }else{
            targetElement.parentElement.classList.remove("lineThrough");
        }
        
    }

    function handleRemoval(event: ChangeEvent) {
        console.log(event);
        console.log(toDoItems);
        let targetElement = (event.target as HTMLInputElement);
        
        let listID = Number(targetElement.id);
        console.log(listID);
        setToDoItems((toDoItems) => (toDoItems.filter((_, index) => {return index != listID })));
    }

    

    
    const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        
        if(event.key == "Enter"){
            setToDoItems((toDoItems) => {return [...toDoItems, (event.target as HTMLInputElement).value]});
        }
    };
    /*
    
    */ 

    return (

        <form id="myToDoForm" onSubmit={e => {e.preventDefault();}}>
            <input id="myInput" onKeyDown={handleInput} placeholder="Add to ToDo items" />


            <ul>
                {
                    toDoItems.map((item, index) => 
                        (<li key={index} >
                            {item} <input id={String(index)} type="checkbox" onChange={(event) => (handleCheckbox(event))}  />
                            <button type="button" id={String(index)} onClick={handleRemoval} >Remove item</button>
                        </li>
                    ))
                }
            </ul>

        </form>
    )
}

export default App;
