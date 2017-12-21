import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFeedback } from '../../actions/feedbacks'

class ProjectDetails extends Component {

  addFeedback = (feedback) => {
    let { proj_id, coll_id } = this.props.match.params
    // Parse the url param from a string to a number with the "+" next to the variable
    feedback.project_id = +proj_id
    // TODO: Connect with auth to get user's user_id
    feedback.author_id = 1
    this.props.addFeedback(feedback, this.props.history, coll_id)
  }

  render () {
    console.log('props', this.props);
    return (
      <Container style={{marginTop: 30}}>
        <Row>
          <Col>
            <p>
              { this.props.project && <img src={this.props.project.img_url} alt="project screenshot"/> }
            </p>
            <p><b>Project Name:</b> {this.props.project && this.props.project.name}</p>
            <p><b>Project Description:</b> {this.props.project && this.props.project.description}</p>
            <p><b>Author:</b> {this.props.project && this.props.project.author}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={this.props.handleSubmit(this.addFeedback)}>
              <FormGroup>
                <Label for="exampleText">Warm Feedback</Label>
                <Field className="form-control" name="warm_fb" component="textarea" type="textarea" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Cool Feedback</Label>
                <Field className="form-control" name="cool_fb" component="textarea" type="textarea" id="exampleText" />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

ProjectDetails = reduxForm({
  // a unique name for the form
  form: 'project-details'
})(ProjectDetails)

function mapDispatchToProps(dispatch) {
  return {
    addFeedback: bindActionCreators(addFeedback, dispatch),
  }
}

function mapStateToProps(state, props) {
  return {
    project: state.projects.filter(project => project.id === +props.match.params.proj_id)[0]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
