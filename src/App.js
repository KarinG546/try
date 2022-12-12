import './App.css';
import {BrowserRouter,NavLink, Route, Routes} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Home from "./Home";

function App() {

    const links = [{to: "/", text: "Home Page"},
        {to: "/page1", text: "Go To Page1"},
        {to: "/page2", text: "Go To Page2"}]
    const activeMenuClass = ({isActive}) => (isActive? "active-menu": "");
  return (
    <div>
      <BrowserRouter>
          <ul>
              {
                  links.map((link)=> {
                      return (
                          <li>
                              <NavLink to={link.to}>{link.text}</NavLink>
                          </li>
                      )
                  })
              }
          </ul>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/page1"} element={<Page1/>}/>
          <Route path={"/page2"} element={<Page2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
