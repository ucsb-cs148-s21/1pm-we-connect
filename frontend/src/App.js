import { useState } from "react"
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import About from './pages/About'
import Help from './pages/Help'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "theme"
import { CssBaseline, useMediaQuery } from '@material-ui/core';

function App() {
  const [dark, setDark] = useState(true)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return (
    <ThemeProvider theme={theme(prefersDarkMode && dark)}>
      <CssBaseline/>
      <Router>
        <NavBar setDark={setDark} dark={dark} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createPost" exact component={CreatePost} />
          <Route path="/about" exact component={About} />
          <Route path="/help" exact component={Help} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App
