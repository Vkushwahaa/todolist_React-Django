import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  

  return (
    <Router>
      <div className="container-dark">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<TodoList />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
