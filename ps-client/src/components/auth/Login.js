import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Container, Row, Col } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../../actions/auth'

export class Login extends Component {

  submitLogin = (creds) => {
    this.props.userLogin(creds, this.props.history)
  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{marginTop: '15vh'}}>
          <Col lg={{ size: 6, offset: 3 }} style={{ border: '1px solid #c9c5c2', padding: 35, boxShadow: "3px 3px 47px 0px rgba(0,0,0,0.5)"}}>
            <Form onSubmit={this.props.handleSubmit(this.submitLogin)}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Field className="form-control" name="email" component="input" type="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Field className="form-control" name="password" component="input" type="password" id="password" />
              </FormGroup>
              <Button type="submit" color="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

Login = reduxForm({
  // a unique name for the form
  form: 'loginform'
})(Login)

function mapDispatchToProps(dispatch) {
  return {
    userLogin: bindActionCreators(userLogin, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Login)
