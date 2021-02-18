import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Login from "./Login.js";
import 'antd/dist/antd.css';
const  Main=()=>{
    return(
        <div>
           <Router>
               <Route path="/login"  component={Login}></Route>
           </Router>
        </div>
    )
}
export default Main