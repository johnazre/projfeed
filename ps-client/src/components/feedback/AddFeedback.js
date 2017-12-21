import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

class AddFeedback extends Component {
  render () {
    return (
      <Container className="main-wrapper">
        <Row style={{marginTop: '10vh', marginBottom: '10vh'}}>
          <Col lg={{ size: 6, offset: 3 }} style={{ border: '1px solid #c9c5c2', padding: 35, boxShadow: "3px 3px 47px 0px rgba(0,0,0,0.5)"}}>
            <Form>
              <FormGroup>
                <Label for="project-name">Project Name (Required)</Label>
                <Input type="text" id="project-name" />
              </FormGroup>
              <FormGroup>
                <Label for="github_url">Github Repo URL (Required)</Label>
                <Input type="text" id="github_url" />
              </FormGroup>
              <FormGroup>
                <Label for="hosted-url">Hosted URL</Label>
                <Input type="text" id="hosted-url" />
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

export default AddFeedback
