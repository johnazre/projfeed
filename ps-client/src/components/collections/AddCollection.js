import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Container, Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCollection } from '../../actions/collections'

export class AddCollection extends Component {
  addCollection = (collection) => {
    // TODO: Connect with auth to get user's school id
    collection.school_id = 1

    this.props.addCollection(collection, this.props.history)
  }
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
            <Form onSubmit={this.props.handleSubmit(this.addCollection)}>
              <FormGroup>
                <Label for="name">Collection Name (Required)</Label>
                <Field name="name" component="input" className="form-control" type="text" id="name" />
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

AddCollection = reduxForm({
  // a unique name for the form
  form: 'add-collection'
})(AddCollection)

function mapDispatchToProps(dispatch) {
  return {
    addCollection: bindActionCreators(addCollection, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(AddCollection)
