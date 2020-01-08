import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList.js";
import SerchBar from "../SearchBar/SearchBar.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SerchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
