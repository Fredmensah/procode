import "./styles/main.scss";
import { Provider } from "react-redux";
import store from "./store";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
