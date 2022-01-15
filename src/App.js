import logo from './logo.svg';
import './App.css';

function Header(){
  return (
          <header>
              <nav className="nav">
                  <img src={logo} className="nav-logo" /><h1 className='logo-text'>ReactFacts</h1>
                  <div className="nav-items">
                    <h3>React Course - Project 1</h3>
                  </div>
              </nav>
          </header>
  )
}

function Footer(){
  return (
  <footer className="footer">
      <small>© 2022 NSKY80 development. All rights reserved.</small>
  </footer>
  )
}

function MainContent(){
  return (
      <div className='body-items'>
          <h1>Fun facts about React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </div>
  )
}

export default function Page() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}