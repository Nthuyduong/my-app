import './App.css';
import React from "react";
import {
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import Layout from '../src/component/layout/layout';
import Login from '../src/component/login/login';
import Register from '../src/component/login/register';
import Home from '../src/component/home/home';

function App() {
  return (
    <Router>
            <Layout>
                <Route path="/home/login" component={Login}></Route>
                <Route path="/home/register" component={Register}></Route>
            </Layout>
    </Router>
  );
}

export default App;
