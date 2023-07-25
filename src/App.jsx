import React, { Component } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
