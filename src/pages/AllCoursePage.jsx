import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';


export class AllCoursePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="All course"/>
        <PageTop pagetitle="All course"/>
        <AllCourses/>
        <Footer/>
      </Fragment>
    )
  }
}

export default AllCoursePage
