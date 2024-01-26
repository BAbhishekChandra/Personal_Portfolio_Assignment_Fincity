import {RiInstagramFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'
import {PiCopyrightLight} from 'react-icons/pi'

import './index.css'

const Contact = () => (
  <div className="contact-container">
    <ul className="contact-icons-container">
      <li className="icon-list-item">
        <RiInstagramFill size={35} />
      </li>
      <li className="icon-list-item">
        <FaLinkedin size={32} />
      </li>
      <li className="icon-list-item">
        <IoIosMail size={38} />
      </li>
    </ul>
    <p className="copyright-paragraph">
      Copyright <PiCopyrightLight /> 2024. All rights reserved.
    </p>
  </div>
)

export default Contact
