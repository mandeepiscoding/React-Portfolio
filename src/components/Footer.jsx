import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'

export default function Footer() {
    return (
        <footer>
        <a href="https://www.linkedin.com/in/mandeepiscoding" target="_blank">
          {/* <img id='linkedin' src={linkedin}></img> */}
          <div id='linkedin'></div>
        </a>
        <a href="https://github.com/mandeepiscoding" target="_blank">
          {/* <img id='github' src={github}></img> */}
          <div id='github'></div>
        </a>
      </footer>
    );
  }