import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'
import { connect } from 'react-redux'

class StaffDashboard extends Component {
  render() {
    let { collections, history } = this.props
    let listOfCollections = collections.map(collection => {
      return (
        <ListGroupItem
          key={collection.id}
          className="text-left"
          tag="button"
          onClick={() => history.push(`/collections/${collection.id}`)}
        >
          {collection.name}
        </ListGroupItem>
      )
    })
    return (
      <Container>
        <Row style={{ marginTop: 30 }}>
          <Col md={{ size: 8, offset: 2 }}>
            <p style={{ fontSize: '1.7em', marginBottom: 0 }}>
              Which collection of projects will you leave feedback on?
            </p>
            <small>(Click on the corresponding collection to proceed)</small>
            <ListGroup>{listOfCollections}</ListGroup>
          </Col>
        </Row>
        <Row style={{ paddingTop: 30 }}>
          <Col className="text-center">
            <h4>Alternatively, you can add a collection of projects</h4>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button
              color="primary"
              onClick={() => this.props.history.push('/collections/add')}
            >
              Add New Collection
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  // Connect with auth to get user's id and parse the result to an object so the id can be accessed
  let schoolId = JSON.parse(localStorage.getItem('user')).user.school_id

  return {
    collections: state.collections.filter(
      collection => collection.school_id === Number(schoolId)
    )
  }
}

export default connect(mapStateToProps, null)(StaffDashboard)
