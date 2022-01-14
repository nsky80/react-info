// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import logo from './logo.svg';
import './App.css';

function Header(){
  return (
          <header>
              <nav className="nav">
                  <img src={logo} className="nav-logo" />
                  <ul className="nav-items">
                      <li>
                          Pricing
                      </li>
                      <li>
                          About
                      </li>
                      <li>
                          Contact
                      </li>
                  </ul>
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
      <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I wanted to complete my Full Stack development course</li>
              <li>I think, it's awesome, yes.</li>
          </ol>
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