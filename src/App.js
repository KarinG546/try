import './App.css';
import {BrowserRouter,NavLink,Route,Routes} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/page1"} component={Page1}/>
          <Route path={"/page2"} component={Page2}/>
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
