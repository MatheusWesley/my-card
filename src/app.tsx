import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function App() {
  return (
    <div className="card">
      <img src="https://github.com/MatheusWesley.png" />
      <div>
        <h2>Matheus Wesley</h2>
        <h3>Full Stack Studant</h3>
        <p>Crio apps com React e Vue, e atualmente tenho estudado muito frontend.</p>
      </div>
      <a href="https://github.com/MatheusWesley" target="_blank">
      <FontAwesomeIcon icon={faGithub}/>
      </a>
    </div>
  )
}

