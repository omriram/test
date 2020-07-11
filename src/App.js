import React, { Component } from "react";
import Header from "./components/header/header.component";
import ItemToReplaceList from "./components/item-to-replace-list/item-to-replace-list.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Header
          lastName={"רווה"}
          firstName={"עמית"}
          msg={"לצערנו מספר פריטים לא קיימים אנא בחר מהפריטים החליפיים"}
        />
        <ItemToReplaceList />
        <Footer />
      </div>
    );
  }
}

export default App;
