import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todos/TodoSlice.js";
import { HStack, Button, Checkbox } from "@chakra-ui/react";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <HStack>
      <Checkbox
        isChecked={TodoItem.compeleted}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <p>{todo.text}</p>
      <Button colorScheme="red" onClick={() => dispatch(deleteTodo(todo.id))}>
        Delete
      </Button>
    </HStack>
  );
};

export default TodoItem;
