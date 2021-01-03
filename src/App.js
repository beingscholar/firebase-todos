import { firebase } from "@firebase/app";
import "@firebase/firestore";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    db.collection("todos")
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        /* snapshot.docs.map(doc => {
        setTodos({ task_id: doc.id,task: doc.data().task})
      }); */
        setTodos(snapshot.docs.map(doc => doc.data().task));
      });
  }, []);

  const addTodo = event => {
    event.preventDefault();
    db.collection("todos").add({
      task,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setTodos([...todos, task]);
    setTask("");
  };

  const setInput = event => {
    setTask(event.target.value);
    setIsDisable(false);
    if (todos.indexOf(event.target.value) >= 0) {
      setIsDisable(true);
    }
  };

  return (
    <div className="App">
      <h1>Hello Being Scholar 🚀!</h1>
      <FormControl>
        <InputLabel>✅ Write a Todo</InputLabel>
        <Input type="text" value={task} onChange={event => setInput(event)} />
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={addTodo}
        disabled={isDisable || !task}
      >
        Add Todo
      </Button>
      <Todo todos={todos} />
    </div>
  );
}

export default App;
