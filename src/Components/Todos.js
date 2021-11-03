import React from 'react';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto",
    }

    return (
        <div className="container" style={myStyle}>
            <h2 className="my-3">Todos List</h2>
            {
                props.todos.length === 0 ? "No records found.":  
                props.todos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <h4>{todo.title}</h4>
                            <p>{todo.desc}</p>
                            
                            <button className="btn btn-sm btn-danger" onClick={()=>{props.deleteTodo(todo.id)}}>Delete</button>

                            <hr/> 
                        </div>
                    )
                })
            } 
        </div>
    )
}