import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

export class Signup extends Component {

  handleSubmit = () => {

  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{marginTop: '10vh', marginBottom: '10vh'}}>
          <Col lg={{ size: 6, offset: 3 }} style={{ border: '1px solid #c9c5c2', padding: 35, boxShadow: "3px 3px 47px 0px rgba(0,0,0,0.5)"}}>
            <Form>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" id="username" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" id="password" />
              </FormGroup>
              <FormGroup>
                <Label for="school">School</Label>
                <Input type="select" id="school">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="role">Are you a student or a staff member?</Label>
                <Input type="select" id="role">
                  <option>Student</option>
                  <option>Staff</option>
                </Input>
              </FormGroup>
              <Button color="primary" onClick={() => this.props.history.push('/dashboard')}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup