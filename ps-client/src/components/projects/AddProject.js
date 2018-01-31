import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Container, Row, Col } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addProject } from '../../actions/projects'

class AddProject extends Component {
  addProject = project => {
    project.author_id = this.props.user_id
    project.collection_id = +project.collection_id
    this.props.addProject(project, this.props.history)
  }

  render() {
    let collectionList = this.props.collections.map(collection => {
      return (
        <option key={collection.id} value={collection.id}>
          {collection.name}
        </option>
      )
    })
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
            <Form onSubmit={this.props.handleSubmit(this.addProject)}>
              <FormGroup>
                <Label for="project-name">Project Name (Required)</Label>
                <Field
                  name="name"
                  component="input"
                  className="form-control"
                  type="text"
                  id="project-name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Field
                  name="description"
                  component="textarea"
                  className="form-control"
                  type="text"
                  id="description"
                />
              </FormGroup>
              <FormGroup>
                <Label for="collection">Collection (Required)</Label>
                <Field
                  name="collection_id"
                  component="select"
                  className="form-control"
                  type="text"
                  id="project-name"
                >
                  <option />
                  {collectionList}
                </Field>
              </FormGroup>
              <FormGroup>
                <Label for="github_url">Github Repo URL (Required)</Label>
                <Field
                  name="github_url"
                  component="input"
                  className="form-control"
                  type="text"
                  id="github_url"
                />
              </FormGroup>
              <FormGroup>
                <Label for="hosted_url">Hosted URL</Label>
                <Field
                  name="hosted_url"
                  component="input"
                  className="form-control"
                  type="text"
                  id="hosted-url"
                />
              </FormGroup>
              <FormGroup>
                <Label for="img_url">Screenshot Image</Label>
                <Field
                  name="img_url"
                  component="input"
                  className="form-control"
                  type="text"
                  id="img_url"
                />
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

AddProject = reduxForm({
  // a unique name for the form
  form: 'add_project'
})(AddProject)

function mapDispatchToProps(dispatch) {
  return {
    addProject: bindActionCreators(addProject, dispatch)
  }
}

function mapStateToProps(state, props) {
  return {
    collections: state.collections.filter(
      collection => collection.school_id === state.auth.user.school_id
    ),
    user_id: state.auth.user.id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProject)
