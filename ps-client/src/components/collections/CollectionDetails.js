import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, } from 'reactstrap'
import { connect } from 'react-redux'

class CollectionDetails extends Component {
  render () {
    let { history, projects, match } = this.props
    let listOfProjects = projects.map(project => {
      return (
        <Col key={project.id} md="3" style={{marginTop: 25}}>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardSubtitle>Author: {project.author}</CardSubtitle>
              <CardText>Description: {project.description}</CardText>
              <Button onClick={() => history.push(`/collections/${match.params.id}/projects/${project.id}`)}>Button</Button>
            </CardBody>
          </Card>
        </Col>
      )
    })
    return (
      <Container style={{marginTop: 20}}>
        <Row>
          {projects.length > 0
            ? listOfProjects
            : <h1>There are currently no projects in this collection. Click the back button to go back to the dashboard.</h1>}
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, null)(CollectionDetails)
