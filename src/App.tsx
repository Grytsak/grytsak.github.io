import React from 'react'
import logo from './logo.svg'
import './assets/scss/common.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

library.add(fab, fas);

function App() {
  return (
    <div>
      <header>
        <MainMenu />
        <Hero />
      </header>
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
