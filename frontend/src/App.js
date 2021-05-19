import "./App.css"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/createPost" exact component={CreatePost} />
            </Switch>
        </Router>
    )
}

export default App
