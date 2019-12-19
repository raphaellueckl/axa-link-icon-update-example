import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  // AXAButton,
  // AXAButtonLink,
  // AXACarousel,
  // AXACheckbox,
  // AXAFieldSet,
  // AXARadio,
  // AXAIcon,
  // AXAInputFile,
  // AXAInputText,
  AXALink
  // AXAText,
  // AXATextarea,
  // AXACookieDisclaimer,
  // AXADatepicker,
  // AXADropdown,
  // AXAFooterSmall,
  // AXAPolicyFeatures,
  // AXAPolicyFeaturesItem,
  // AXAFileUpload,
  // // AXAPopup,
  // AXATopContentBar,
  // AXACommercialHeroBanner,
  // AXAContainer,
  // AXAFooter,
  // AXATable,
  // AXATableSortable,
  // AXATestimonials
} from "./plib-importer";

class App extends React.Component {
  state = { icon: "document" };

  setIcon = newIcon => {
    this.setState({ icon: newIcon });
  };

  // setTimeout(() => {
  // icon = "document";
  // }, 4000);

  text = "This is hello world";

  render() {
    return (
      <AXALink
        href="https://axa.ch/en/private-customers.html"
        variant="icon"
        icon={this.state.icon}
        onClick={() => {
          this.setIcon("download");
        }}
      >
        {this.text}
      </AXALink>
    );
  }
}

export default App;
