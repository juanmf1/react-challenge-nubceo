import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import axios from "axios";
import Context from "./context/Context";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [bands, setBands] = useState([]);
  const [sort, setSort] = useState("id");
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/bands?_sort=${sort}`
      )
      .then((response) => setBands(response.data));
  }, [sort]);

  return (
    <Context.Provider value={{ bands, token, setToken }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {token ? <Home setSort={setSort} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">{token ? <Redirect to="/" /> : <Login />}</Route>
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
