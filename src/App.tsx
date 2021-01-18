import { Register } from "./component/form/Register/Register";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Register}/>
    </Router>
  )
}

export default App;
