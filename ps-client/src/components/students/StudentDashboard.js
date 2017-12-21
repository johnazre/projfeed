import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux'

class StudentDashboard extends Component {
  render () {
    let { projects , history } = this.props
    let listOfProjects = projects.map(project => {
      return (
        <ListGroupItem
          key={project.id}
          className="text-left"
          tag="button"
          onClick={() => history.push(`/students/projects/${project.id}`)}
        >
          {project.name}
        </ListGroupItem>
      )
    })
    return (
      <Container>
        <Row style={{marginTop: 30}}>
          <Col md={{ size: 8, offset: 2 }}>
            <p style={{fontSize: '1.7em', marginBottom: 0}}>Which project would you like to see the feedback for?</p>
            <small>(Click on the corresponding project to proceed)</small>
            <ListGroup>
              {listOfProjects}
            </ListGroup>
          </Col>
        </Row>
        <Row style={{paddingTop: 30}}>
          <Col className="text-center">
            <h4>Alternatively, you can add a project</h4>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button color="primary" onClick={() => this.props.history.push('/students/projects/add')}>Add New Project</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  // TODO: Need to connect this with auth for the user's id to replace 1
  return {
    projects: state.projects.filter(project => project.author_id === 1)
  }
}

export default connect(mapStateToProps, null)(StudentDashboard)
