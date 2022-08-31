import React, {useState, useEffect} from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default function App {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: []
  //   };
  //   this.addTodo = this.addTodo.bind(this);
  //   this.toggleCompleted = this.toggleCompleted.bind(this);
  // }
  const [todos, setTodos] = useState([])

    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
useEffect(() => {
  //fetch function
  const getAllTodos = async () => {
    const allTodosArray = await fetch('/api/todos')
    setTodos(allTodosArray)
  }

  //call get funct
  getAllTodos()
    .catch(err => console.alert(`An error has occured: ${err}`))
}, [])

  addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * Do not mutate the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
   // fetch function
   const addNewTodo = async (toDo) => {
    const req = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(toDo)
    }
    const savedTodo = await fetch('/api/todos', req)
    setTodos([...todos, savedTodo])
   }
   addNewTodo(newTodo)
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={addTodo}/>
            <TodoList todos={todos} toggleCompleted={toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
