import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'
import { connect } from 'react-redux'

class CollectionDetails extends Component {
  render() {
    let { history, projects, match } = this.props
    let listOfProjects = projects.map(project => {
      return (
        <Col key={project.id} md="3" style={{ marginTop: 25 }}>
          <Card>
            <CardImg
              top
              width="100%"
              src={project.img_url}
              alt="Card image cap"
              style={{ height: 150 }}
            />
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardSubtitle>Author: {project.author}</CardSubtitle>
              <CardText>Description: {project.description}</CardText>
              <Button
                color="primary"
                onClick={() =>
                  history.push(
                    `/collections/${match.params.id}/projects/${project.id}`
                  )
                }
              >
                Leave Feedback
              </Button>
            </CardBody>
          </Card>
        </Col>
      )
    })
    return (
      <Container style={{ marginTop: 20 }}>
        <Row>
          {projects.length > 0 ? (
            listOfProjects
          ) : (
            <h1>
              There are currently no projects in this collection. Click the back
              button to go back to the dashboard.
            </h1>
          )}
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    projects: state.projects.filter(
      project => project.collection_id === Number(props.match.params.id)
    )
  }
}

export default connect(mapStateToProps, null)(CollectionDetails)
