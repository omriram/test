import React, { Component } from "react";
import Header from "./components/header/header.component";
import ItemToReplaceList from "./components/item-to-replace-list/item-to-replace-list.component";
import Footer from "./components/footer/footer.component";
import itemsObject from "./assets/jsonFormat";
import AdditionalItemList from "./components/additional-item-list/additional-item-list.component";
import { Router, Route, Switch } from "react-router-dom";

import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataObj: {},
      showAdditionalItems: false,
      additionalItems: [],
      currentItemCode: "",
      chosenItems: new Map(),
    };
  }

  onShowAdditionalItemsClick = (additionalItems = null, itemCode = null) => {
    let { currentItemCode } = this.state;

    if (itemCode !== currentItemCode && itemCode !== null) {
      /* save the current item code */
      this.setState({ currentItemCode: itemCode });
    }

    /* if (closeWindow) {
      const chosenItemsCpy = new Map();
      for (var itemCode in chosenItems) {
        chosenItemsCpy[itemCode] = chosenItems[itemCode];
      }

      delete chosenItemsCpy[itemCode];
      this.setState({ chosenItems: chosenItemsCpy });
    } */
    this.setState((state) => ({
      showAdditionalItems: !state.showAdditionalItems,
      additionalItems,
    }));
  };

  onRemoveChosenItemClick = (itemCode) => {
    const { chosenItems } = this.state;
    let chosenItemsCpy = new Map();
    for (let itemCode of chosenItems.keys()) {
      chosenItemsCpy.set(itemCode, chosenItems.get(itemCode));
    }
    chosenItemsCpy.delete(itemCode);
    this.setState({ chosenItems: chosenItemsCpy });
  };

  onAdditionalItemClick = (chosenItemCode) => {
    const { chosenItems, currentItemCode } = this.state;
    let chosenItemsCpy = new Map();
    for (let itemCode of chosenItems.keys()) {
      chosenItemsCpy.set(itemCode, chosenItems.get(itemCode));
    }

    chosenItemsCpy.set(currentItemCode, chosenItemCode);
    this.setState((state) => ({
      chosenItems: chosenItemsCpy,
      showAdditionalItems: !state.showAdditionalItems,
    }));
  };

  componentDidMount() {
    this.setState({ dataObj: itemsObject });
  }

  render() {
    const {
      dataObj,
      showAdditionalItems,
      additionalItems,
      chosenItems,
    } = this.state;
    const isDataReceivedFromServer = Object.keys(dataObj).length > 0;
    let returnedComponent,
      subComponent,
      submitMsg = "";

    if (isDataReceivedFromServer) {
      if (showAdditionalItems) {
        subComponent = (
          <AdditionalItemList
            additionalItems={additionalItems}
            onShowAdditionalItemsClick={this.onShowAdditionalItemsClick}
            onAdditionalItemClick={this.onAdditionalItemClick}
          />
        );
      } else {
        subComponent = (
          <ItemToReplaceList
            items={dataObj.Items}
            chosenItems={chosenItems}
            onShowAdditionalItemsClick={this.onShowAdditionalItemsClick}
            onRemoveChosenItemClick={this.onRemoveChosenItemClick}
          />
        );
      }

      if (chosenItems.size > 0) {
        submitMsg = `אשר החלפת ${chosenItems.size} פריטים`;
      } else {
        submitMsg = `לא מעוניין להחליף`;
      }

      returnedComponent = (
        <React.Fragment>
          <Header
            lastName={dataObj.LastName}
            firstName={dataObj.FirstName}
            msg={dataObj.Message}
          />
          {subComponent}
          <Footer submitMsg={submitMsg} />
        </React.Fragment>
      );
    } else {
      returnedComponent = <span>loading..</span>;
    }
    return <div className="container">{returnedComponent}</div>;
  }
}

export default App;
