import React, { Component } from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import BodyBuilder from "../src/Containers/BodyBuilder/BodyBuilder";
class App extends Component {

  render() {
    return (
      <Layout>
        <BodyBuilder/>
      </Layout>
    );
  }
}

export default App;
