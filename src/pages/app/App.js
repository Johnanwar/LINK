import React from "react"
import { BrowserRouter as Router ,Switch, Route } from "react-router-dom"
import {ThemeProvider , createTheme } from '@material-ui/core';
 import '../../styles/scss/main.scss'

////////////// layout components
import Nav from"../../components/layout/nav/nav";
import Footer from "../../components/layout/footer/Footer"
//////////////pages
import Home from "../home/Home";
import NewsDetails from "../newsDetails/NewsDetails";
import News from "../news/News";

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
    fontFamily: 'Open-Sans',
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
       
          <Router >
           <Nav/> 
              <Switch>
                  <Route exact path="/" component={Home} />   
                  <Route exact path="/NewsDetails/:id" component={NewsDetails} /> 
                  <Route exact path="/News" component={News} />
         
            </Switch>  
            <Footer/>   
          </Router>
      </ThemeProvider>
    </div>
</>
    
  );
}

export default App;
 