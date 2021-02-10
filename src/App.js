import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from "./views/Search";
import Home from "./views/Home";
import  {Switch,Route} from "react-router-dom";
import  Provider, {MyContext}  from "./provider/index"

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
      <Provider>
       <Switch>
         <Route exact path={"/"} render={() => (
             <MyContext.Consumer>
                 {context => <Home {...context} /> }
                 </MyContext.Consumer>
             )}
         />
         <Route exact path={"/search"} render={() => (
             <MyContext.Consumer>
                 {context => <Search {...context} /> }
             </MyContext.Consumer>
         )} />
       </Switch>
      </Provider>
      </div>
    )
  }
}

export default BooksApp
