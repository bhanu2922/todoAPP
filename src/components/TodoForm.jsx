import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/TodoSlice.js";
import { Input, Button, Box } from "@chakra-ui/react";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };
  // console.log("Submitted:", text);

  return (
    <>
      <Box p={4}>
        <form onSubmit={handleSubmit}>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a new Task"
          />
          <Button type="submit" colorScheme="teal" ml={2}>
            Add Task
          </Button>
        </form>
      </Box>
    </>
  );
};

export default TodoForm;
