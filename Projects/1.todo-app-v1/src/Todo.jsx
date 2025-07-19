import "bootstrap/dist/css/bootstrap.min.css";
import "./components/TodoStyle.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoOutput1 from "./components/TodoOutput/TodoOutput1";
import TodoOutput2 from "./components/TodoOutput/TodoOutput2";
import TodoOutput3 from "./components/TodoOutput/TodoOutput3";

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
