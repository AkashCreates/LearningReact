import "bootstrap/dist/css/bootstrap.min.css";
import "./components/TodoStyle.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import { TodoOutput1, TodoOutput2, TodoOutput3 } from "./components/TodoOutput";

const TodoApp = () => {
  return (
    <div className="container py-5">
      <TodoHeader />
      <TodoInput />
      <TodoOutput1 />
      <TodoOutput2 />
      <TodoOutput3 />
    </div>
  );
};

export default TodoApp;
