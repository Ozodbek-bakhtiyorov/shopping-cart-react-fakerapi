import Header from "./components/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/cart' component={Cart}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
