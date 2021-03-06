import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert
} from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../../actions/auth'

export class Signup extends Component {
  state = {
    isValid: true,
    passwordClasses: 'form-control'
  }
  userSignup = user => {
    console.log('user', user)
    if (user.password !== user.verify_password) {
      this.setState({ 
        passwordClasses: this.state.passwordClasses + ' is-invalid',
        isValid: false
      })
    } else {
      this.props.userSignup(user, this.props.history)
    }
  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form onSubmit={this.props.handleSubmit(this.userSignup)}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Field
                  name="name"
                  component="input"
                  className="form-control"
                  type="text"
                  id="name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Field
                  name="email"
                  component="input"
                  className="form-control"
                  type="email"
                  id="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Field
                  name="password"
                  component="input"
                  className={this.state.passwordClasses}
                  type="password"
                  id="password"
                  valid={this.state.isValid}
                />
              </FormGroup>
              <FormGroup>
                <Label for="verify_password">Verify Password</Label>
                <Field
                  name="verify_password"
                  component="input"
                  className={this.state.passwordClasses}
                  type="password"
                  id="verify_password"
                  valid={this.state.isValid}
                />
                { !this.state.isValid ? <Alert color="danger">Passwords do not match</Alert> : null}
              </FormGroup>
              <FormGroup>
                <Label for="school">School</Label>
                <Field
                  name="school_id"
                  component="select"
                  className="form-control"
                  type="select"
                  id="school"
                >
                  <option />
                  {this.props.schools.map(school => (
                    <option key={school.id} value={school.id}>
                      {school.name}
                    </option>
                  ))}
                </Field>
              </FormGroup>
              <FormGroup>
                <Label for="role">Are you a student or a staff member?</Label>
                <Field
                  component="select"
                  name="role_id"
                  className="form-control"
                >
                  <option value="1">Student</option>
                  <option value="2">Staff</option>
                </Field>
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

Signup = reduxForm({
  // a unique name for the form
  form: 'signup-form'
})(Signup)

function mapStateToProps(state, props) {
  return {
    schools: state.schools
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
