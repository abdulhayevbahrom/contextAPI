import About from "./About";
import "./App.css";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ studentName }] = useStateValue();
  const [{userInfo}] = useStateValue()
  return (
    <div className="app">
      <Login />
      <About/>
      <h1>{studentName}</h1>
      <h1>APP JS</h1>
      <h1>my name is {userInfo}</h1>

      
    </div>
  );
}

export default App;
