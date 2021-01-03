import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import "./Todo.css";

function Todo({ todos }) {
  return (
    <ul>
      {todos.length &&
        todos.map(todo => (
          <List key={todo} className="todo__list">
            <ListItem>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText primary={todo} secondary="Deadline ⏰" />
            </ListItem>
          </List>
        ))}
      {/* <li key={todo}>{todo}</li> */}
    </ul>
  );
}

export default Todo;
