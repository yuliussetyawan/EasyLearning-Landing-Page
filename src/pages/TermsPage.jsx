import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TermsDescription from "../components/TermsConditon/TermsCondition";
import TopNavigation from "../components/TopNavigation/TopNavigation";

class TermsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Terms & Condition"/>
        <PageTop pagetitle = "Terms & Condition"/>
        <TermsDescription/>
        <Footer />
      </Fragment>
    );
  }
}

export default TermsPage;
