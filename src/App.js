import React from 'react'
import './app.css';
import { Navbar, Header, Brand} from './components';


const App = () => {
  return (
    <>
      <div className="header-section">
        <Navbar />
        <Header />
      </div>

      <div className="brand-section">
        <Brand />
      </div>
      
    </>
  )
}

export default App