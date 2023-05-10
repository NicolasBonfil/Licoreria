import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="row">
			<div className="footer-item col d-flex justify-content-center">
				<ul style={{display: "flex", flexDirection: "column", color: "white"}}>
				<li className="footer-title">
					<Link to="/">
						PRODUCTOS
					</Link>
				</li>
				<li className="footer-link">
					<Link to="/categoria/cervezas">
							CERVEZAS
					</Link>
				</li>
				<li className="footer-link">
					<Link to="/categoria/vinos">
                        VINOS
                    </Link>
				</li>
				<li className="footer-link">
					<Link to="/categoria/whisky">
                        WHISKY
                    </Link>
				</li>
				</ul>
			</div>
			<div className="footer-item col d-flex justify-content-center">
				<ul style={{display: "flex", flexDirection: "column", color: "white"}}>
					<li className="footer-title">Ayuda</li>
					<li className="footer-link">3</li>
					<li className="footer-link">3</li>
					<li className="footer-link">3</li>
				</ul>
			</div>
			<div className="footer-item col d-flex justify-content-center">
				<ul style={{display: "flex", flexDirection: "column", color: "white"}}>
					<li className="footer-title">Redes</li>
					<li className="footer-link">
						<a href="" style={{display: "flex", alignItems: "center", columnGap: 5}}>
							<FontAwesomeIcon icon={faInstagram} />
							<p>Instagram</p>
						</a>
					</li>
					<li className="footer-link">
						<a href="" style={{display: "flex", alignItems: "center", columnGap: 5}}>
							<FontAwesomeIcon icon={faFacebook} />
							<p>Facebook</p>
						</a>
					</li>
					<li className="footer-link">
						<a href="" style={{display: "flex", alignItems: "center", columnGap: 5}}>
							<FontAwesomeIcon icon={faTwitter} />
							<p>Twitter</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
    </div>
  )
}
