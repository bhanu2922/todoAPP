import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todos/TodoSlice.js";
import { HStack, Text, Button, Checkbox } from "@chakra-ui/react";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <HStack>
      <Checkbox
        isChecked={TodoItem.compeleted}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <Text textDecoration={TodoItem.completed ? "line-through" : "none"}>
        {todo.text}
      </Text>
      <Button colorScheme="red" onClick={() => dispatch(deleteTodo(todo.id))}>
        Delete
      </Button>
    </HStack>
  );
};

export default TodoItem;
