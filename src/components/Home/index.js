import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'C', 'h', 'r', 'i', 's']
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    function animate() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
    animate();
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2>Full Stack Engineer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a href="https://docs.google.com/document/d/1WGIm-tNtsgZpTZbQlhyZzh06xIHsVxaU/edit?usp=sharing&ouid=112957097890241622768&rtpof=true&sd=true" rel="noreferrer" target="_blank" className="flat-button">
            VIEW RESUME
          </a>
        </div>
      </div>

      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Home
