import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from 'react-loaders'
import { MapContainer, TileLayer } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function animate() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
    animate()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_3zf9ogi', 'template_djetb8o', form.current, 'UBPaWUnmCOtwJYEXB')
      .then(
        () => {
          alert('Message successfully sent!')
          navigate('/', { replace: true })
        },
        () => {
          alert('Sorry, failed to send. If problem persists, please reach out to chrisdowd1996@gmail.com')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Please don't hesitate to contact me using the below form for employment oppurtunities or
            freelance inquiries.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Chris Dowd,
          <br />
          St. Louis, MO
          <br />
          <span>chrisdowd1996@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[38.6270, -90.5258]} zoom={9}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Contact
