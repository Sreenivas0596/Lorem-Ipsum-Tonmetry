// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="light-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
              <ul className="list-container">
                <Link to="/" className="link">
                  <li> Home </li>
                </Link>
                <Link to="/about" className="link">
                  <li> About</li>
                </Link>
              </ul>
              <button
                type="button"
                onClick={toggleTheme}
                className="button"
                testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                />
              </button>
            </div>
          ) : (
            <div className="dark-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
              />
              <ul className="list-container">
                <Link to="/" className="link">
                  <li> Home </li>
                </Link>
                <Link to="/about" n className="link">
                  <li> About</li>
                </Link>
              </ul>
              <button
                type="button"
                onClick={toggleTheme}
                className="button"
                testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
