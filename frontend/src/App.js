import { useState, useMemo, useEffect } from "react"
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import About from './pages/OurTeam'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "theme"
import { CssBaseline, useMediaQuery } from '@material-ui/core';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [dark, setDark] = useState(false)
  useEffect(() => {
    setDark(prefersDarkMode)
  }, [prefersDarkMode])
  const appTheme = useMemo(
    () =>
      theme(dark),
    [dark],
  );

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Router>
        <NavBar setDark={setDark} dark={dark} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createPost" exact component={CreatePost} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App
