import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  console.log("Home todos:", todos);

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Home;
