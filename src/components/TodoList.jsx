import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { VStack, Text } from "@chakra-ui/react";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  // console.log("Todos:", todos);
  // console.log("Todos from store:", todos);
  return (
    <VStack p={4}>
      {/* {todos.map((todo) => {
        <TodoItem key={todo.id} todo={todo} />
      })} */}
      {todos.length === 0 ? (
        <Text>No tasks yet</Text>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </VStack>
  );
};

export default TodoList;
