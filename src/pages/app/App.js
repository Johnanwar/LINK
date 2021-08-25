import React from "react"
import { BrowserRouter as Router ,Switch, Route } from "react-router-dom"
import {ThemeProvider , createTheme } from '@material-ui/core';
import {NewsProvider} from '../../contexts/NewsState'
//////////////pages
import Home from "../home/Home"
import NewsDetails from "../newsDetails/NewsDetails"
import News from "../news/News"

const theme = createTheme({
  direction: 'ltr',
  palette: {
    primary: {
      main: "#0F3294",
    },
    secondary: {
      main: "#13BEFF",
    },
    
    background: {
      default: "#f4f5fd"
    },
  },
  typography: {
    fontFamily: 'Markazi',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
 })


function App({}) {
  return (
    <>
    <div
    className="App"><ThemeProvider theme={theme}>
         <NewsProvider>
          <Router >
              <Switch>
                  <Route exact path="/" component={Home} />   
                  <Route exact path="/NewsDetails/:id" component={NewsDetails} /> 
                  <Route exact path="/News" component={News} />
         
            </Switch>     
          </Router>
       </NewsProvider> 
      </ThemeProvider>
    </div>
</>
    
  );
}

export default App;
