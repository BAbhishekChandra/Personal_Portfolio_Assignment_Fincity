import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class Profile extends Component {
  state = {
    projectName: '',
    projectLink: '',
    description: '',
    renderProjectList: [],
  }

  callThisMethod = () => {
    const {renderProjectList} = this.state
    const {callBackMethod} = this.props
    callBackMethod(renderProjectList)
  }

  onClickProjectsSection = () => {
    const {scrollToProjects} = this.props
    scrollToProjects()
  }

  addNewProjectItemToList = projectDetails => {
    this.setState(
      {
        renderProjectList: projectDetails,
      },
      this.callThisMethod,
    )
  }

  clearFormElementsValue = () => {
    this.setState({projectName: '', projectLink: '', description: ''})
  }

  addProjectForm = event => {
    event.preventDefault()
    const {projectName, projectLink, description} = this.state
    const projectDetails = {id: uuidv4(), projectName, projectLink, description}
    this.addNewProjectItemToList(projectDetails)
    this.clearFormElementsValue()
  }

  onChangeProjectName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeProjectLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  render() {
    const {projectId: projectName, projectLink, description} = this.state

    return (
      <>
        <div className="main-container">
          <div className="content-container">
            <p className="job-title">UI/UX DESIGNER</p>
            <h1 className="person-name">Hello, my name is Madelyn Torff</h1>
            <p className="personal-description">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </p>
            <div className="buttons-container">
              <button
                className="projects-button"
                type="button"
                onClick={this.onClickProjectsSection}
              >
                Projects
              </button>
              <button className="linkedin-button" type="button">
                Linkedin
              </button>
            </div>
          </div>
          <div className="form-container">
            <form
              className="add-project-form-container"
              onSubmit={this.addProjectForm}
            >
              <h1 className="add-project">Add Project</h1>
              <label className="label-element" htmlFor="projectName">
                Project Name
              </label>
              <input
                className="input-element"
                type="text"
                id="projectName"
                value={projectName}
                onChange={this.onChangeProjectName}
              />
              <label className="label-element" htmlFor="projectLink">
                Project Link
              </label>
              <input
                className="input-element"
                type="text"
                id="projectLink"
                value={projectLink}
                onChange={this.onChangeProjectLink}
              />
              <label className="label-element" htmlFor="description">
                Description
              </label>
              <textarea
                className="input-element-textarea"
                type="textarea"
                id="description"
                rows="10"
                cols="50"
                value={description}
                onChange={this.onChangeDescription}
              >
                {description}
              </textarea>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Profile
