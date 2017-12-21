import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import { connect } from 'react-redux'

class ProjectDetails extends Component {

  render () {
    console.log('props', this.props);
    let feedbackList = this.props.feedbacks.map(feedback => {
      return (
        <tr key={feedback.id}>
          <th scope="row">{feedback.id}</th>
          <td style={{width: '15%'}}>{feedback.author}</td>
          <td>{feedback.cool_fb}</td>
          <td>{feedback.warm_fb}</td>
        </tr>
      )
    })
    return (
      <Container style={{marginTop: 30}}>
        <Row>
          <Col>
            <p>
              {this.props.project && <img src={this.props.project.img_url} alt="project screenshot"/>}
            </p>
            <p><b>Project Name:</b> {this.props.project && this.props.project.name}</p>
            <p><b>Project Description:</b> {this.props.project && this.props.project.description}</p>
            <p><b>Author:</b> {this.props.project && this.props.project.author}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Cool Feedback</th>
                  <th>Warm Feedback</th>
                </tr>
              </thead>
              <tbody>
                {feedbackList}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    project: state.projects.filter(project => project.id === +props.match.params.id)[0],
    feedbacks: state.feedbacks.filter(feedback => feedback.project_id === +props.match.params.id)
  }
}

export default connect(mapStateToProps, null)(ProjectDetails)
