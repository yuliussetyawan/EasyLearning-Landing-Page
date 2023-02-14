import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5 text-center">
              <div className="social-container">
                <h2 className="footerName">Follow Us</h2>
                <a href="" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName ">Address</h2>
              <p className="footerDescription">
                6522 Baltimore National Pike CatonsVille, Califonia USA{" "}
                <br></br>
                <FontAwesomeIcon icon={faEnvelope} /> Email : Support@ele.com
                <br></br>
                <FontAwesomeIcon icon={faPhone} /> Phone : 434343434<br></br>
              </p>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Information</h2>
              <Link className="footerLink" to="/about">About Me</Link> <br/>
              <Link className="footerLink" to="/about">Company Profile</Link> <br/>
              <Link className="footerLink" to="/contact">Contact Us</Link> <br/>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Policy</h2>
              <Link className="footerLink" to="/refund">Refund Policy</Link> <br/>
              <Link className="footerLink" to="/terms">Terms and Conditions </Link> <br/>
              <Link className="footerLink" to="/privacy">Privacy Policy</Link> <br/>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="copyrightSection text-center">
        <a className="copyrightlink" href="#">© Copyright 2016 by easy Learning, All Rights Reserved</a> 

        </Container>


      </Fragment>
    );
  }
}

export default Footer;
