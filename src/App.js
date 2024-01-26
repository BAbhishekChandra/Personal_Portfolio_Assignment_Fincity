import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'

const ProjectList = [
  {
    id: uuidv4(),
    projectName: 'Project Name',
    projectLink:
      'https://res.cloudinary.com/dl1iui8u1/image/upload/v1706116322/yoga-poster_h9b9hv.png',
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example',
  },
  {
    id: uuidv4(),
    projectName: 'Project Name',
    projectLink:
      'https://res.cloudinary.com/dl1iui8u1/image/upload/v1706116348/calender_vi3lhk.png',
    description:
      'What was your role, your deliverables, if the project was personal, freelancing',
  },
  {
    id: uuidv4(),
    projectName: 'Project Name',
    projectLink:
      'https://res.cloudinary.com/dl1iui8u1/image/upload/v1706116356/cup_fkwfom.png',
    description:
      'You can also add in the description the type of the project, if it was for web, mobile, electron.',
  },
]

class App extends Component {
  state = {newList: ProjectList}

  listCallBackMethod = datalist => {
    this.setState(prevState => ({newList: [...prevState.newList, datalist]}))
  }

  scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({behavior: 'smooth'})
    }
  }

  render() {
    const {newList} = this.state

    return (
      <div className="app-container">
        <Header />
        <section id="about">
          <Profile
            callBackMethod={this.listCallBackMethod}
            scrollToProjects={this.scrollToProjects}
          />
        </section>
        <section id="projects">
          <Projects newList={newList} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    )
  }
}
export default App
