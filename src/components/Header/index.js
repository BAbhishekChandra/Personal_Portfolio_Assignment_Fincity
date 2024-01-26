import './index.css'

const Header = () => {
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId)
    section.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <nav className="header-container">
      <h1 className="name-heading">Madelyn Torff</h1>
      <ul className="list-container">
        <li className="list-item">
          <button
            className="custom-button"
            type="button"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="custom-button"
            type="button"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="custom-button"
            type="button"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
