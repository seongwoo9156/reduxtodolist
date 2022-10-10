import "./App.css";
import TodoList from "./components/pages/TodoList";
import GlobalStyled from "./components/GlobalStyled/GlobalStyled";

function App() {
  return (
    <>
      <GlobalStyled></GlobalStyled>
      <TodoList></TodoList>
    </>
  );
}

export default App;
