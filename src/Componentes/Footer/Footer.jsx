import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
	<div className="container">
		<div className="row">
			<div className="footer-col">
				<h4>Ayuda</h4>
				<ul>
					<li>
						<Link>
							Envíos
						</Link>
					</li>
					<li>
						<Link>
							Devoluciones
						</Link>
					</li>
					<li>
						<Link>
							Contactanos
						</Link>
					</li>
				</ul>
			</div>
			<div className="footer-col">
				<h4>Productos</h4>
				<ul>
					<li>
						<Link to="/categoria/cervezas">
							Cervezas
						</Link>
					</li>
					<li>
						<Link to="/categoria/vinos">
							Vinos
						</Link>
					</li>
					<li>
						<Link to="categoria/whisky">
							Whisky
						</Link>
					</li>
				</ul>
			</div>
			<div className="footer-col">
				<h4>Seguinos!</h4>
				<div className="social-links">
					<a href="https://www.instagram.com/" target="blank">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href="https://www.facebook.com/" target="blank">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href="https://www.twitter.com/" target="blank">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
			</div>
		</div>
	</div>
  )
}
