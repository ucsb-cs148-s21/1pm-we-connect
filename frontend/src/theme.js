import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
const theme = (dark) => createMuiTheme({
  palette: {
    type: dark ?  "dark" : "light",
    primary: {
      main: teal[600],
    },
    secondary: {
      main: green[500],
    },
    // background: {
    //   default: teal[200],
    //   // set the paper theme to slightly lighter than the default background
    //   paper: teal[100]
    // }
  },

});
export default theme
