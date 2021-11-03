import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import { Todos } from "./Components/Todos";
import { AddTodo } from "./Components/AddTodo";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (inputs) => {
    let id;
    if (todos.length === 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    const myTodo = {
      id: id,
      title: inputs.title,
      desc: inputs.desc,
    }

    setTodos([...todos, myTodo]);
    //console.log(myTodo);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((e) => {
      return e.id !== id;
    }));
    //console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Todos App" searchBar={false} />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} deleteTodo={deleteTodo} /> 
              </>
            )
            }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>   
        </Switch> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
