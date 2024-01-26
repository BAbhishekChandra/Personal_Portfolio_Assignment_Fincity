import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  console.log(projectDetails)
  const {projectName, projectLink, description} = projectDetails

  return (
    <div className="project-item-container">
      <div className="project-content-container">
        <h1 className="project-name">{projectName}</h1>
        <p className="description">{description}</p>
        <button className="view-button" type="button">
          View Project
        </button>
      </div>
      <div className="project-image-container">
        <img className="project-image" src={projectLink} alt={projectName} />
      </div>
    </div>
  )
}

export default ProjectItem
