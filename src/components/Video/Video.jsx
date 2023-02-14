import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Col, Container, Modal, Row, Button } from "react-bootstrap";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'

export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  // close and open the video player
  modalClose = () => this.setState({ show: false });
  modalOpen = () => this.setState({ show: true });
  render() {
    return (
      <div>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Our Videos</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12} className="videoText">
            <p className="text-justify serviceDescription">
                Hi! I'm Yulius Setyawan. I'm a web developer with a serious love for
                teaching I am a founder of easy Learning and a passionate
                Web Developer and Programmer.<br></br>
                <br></br>I am working online and have created several successful websites running on the internet. I
                try to create a project-based course that helps you to learn
                professionally and make you fell as a complete developer. easy
                learning exists to help you succeed in life.<br></br>
                <br></br>
                Each course has been hand-tailored to teach a specific skill. I
                hope you agree! Whether you’re trying to learn a new skill from
                scratch or want to refresh your memory on something you’ve
                learned in the past, you’ve come to the right place.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} className="videoCard">
              <FontAwesomeIcon
                icon={faVideoSlash}
                onClick={this.modalOpen}
                className="iconProject"
              />
              <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Player>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    <BigPlayButton position="center"/>
                  </Player>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.modalClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
