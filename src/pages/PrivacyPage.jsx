import React, { Component } from 'react'
import { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription';
import TopNavigation from '../components/TopNavigation/TopNavigation';


class PrivacyPage extends Component {
  render() {
    return (
      <Fragment>
      <TopNavigation title="Privacy Policy"/>
      <PageTop pageTitle = "Privacy Policy"/>
      <PrivacyDescription/>
      <Footer/>  
      </Fragment>
    )
  }
}

export default PrivacyPage
