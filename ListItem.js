import React from "react";
import "./ListItem.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 

function ListItems(props) {
const items = props.items
const toDos = items.map(toDo => 
            {
                return <div className="list" key={toDo.key}>
                            <p>
                                <input type="text" id={toDo.key} value={toDo.text}
                                onChange = {(e) => {
                                    props.setUpdate(e.target.value,toDo.key)}}/>
                                <span>
                                    <FontAwesomeIcon className="faicons" icon="trash"
                                        onClick = { () => { props.deleteItem(toDo.key) }}/>
                                </span>
                            </p>
                        </div>
                })
            
            return (
                <div> {toDos} </div>
            )                  
        }

export default ListItems



















// function ListItems(props) {
//     const Todos=props.Todo;
//     const listItems = Todos.map(todo =>
//         {
//             return <div className="list" key={todo.key}>
//                 <p>{todo.text}
//                 <span>
//                     <FontAwesomeIcon 
//                     className="faicons" 
//                     icon="trash"
//                     onClick = { () => {
//                         props.deleteItem(todo.key)
//                     }}
//                     />
//                 </span>
//                 </p>
                
             
//             </div>
//         })
        
//         return(
//             <div>{listItems}</div>
//         )
// }

// export default ListItems
















// function ListItem(props) {

//     const items=props.items;
//     const listItems= items.map(item =>
//         {
//             return <div className="list" key="item.key">
//                 <p>{item.text}</p>
//             </div>
//         })

//     return( 
//         <div>{listItems}</div>
//     )

// }

// export default ListItem