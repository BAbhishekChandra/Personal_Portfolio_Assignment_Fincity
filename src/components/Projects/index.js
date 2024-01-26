import ProjectItem from '../ProjectItem'
import './index.css'

const Projects = props => {
  const {newList} = props

  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      {newList.map(eachProject => (
        <ProjectItem key={eachProject.id} projectDetails={eachProject} />
      ))}
    </div>
  )
}
export default Projects
