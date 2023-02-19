import { AddList } from "../";
import "./App.scss";

const App = () => {
  return (
    <main className="app">
      <div className="container">
        <div className="app_title">
          <h1>To Do List by Davron Raimjonov</h1>
        </div>
        <AddList />
      </div>
    </main>
  );
};

export default App;
