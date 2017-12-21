import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

export class AddCollection extends Component {
  render () {
    return (
      <Container className="main-wrapper">
        <Row>
          <Col className="text-center">
            <h2>Add Collection</h2>
          </Col>
        </Row>
        <Row style={{marginTop: '4vh', marginBottom: '10vh'}}>
          <Col lg={{ size: 6, offset: 3 }} style={{ border: '1px solid #c9c5c2', padding: 35}}>
            <Form>
              <FormGroup>
                <Label for="project-name">Collection Name (Required)</Label>
                <Input type="text" id="project-name" />
              </FormGroup>
              <Button
                color="primary"
                onClick={() => this.props.history.push('/dashboard')}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AddCollection
