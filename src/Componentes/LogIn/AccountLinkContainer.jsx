import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSesionContext } from "../../Context/SesionContext"

export const AccountLinkContainer = () => {

    const {log} = useSesionContext()

  return (
    <>
            {
                log?
                    <div className="cuenta">
                        <Link to="/cuenta">
                            <FontAwesomeIcon icon={faUser}/>
                        </Link>
                    </div>
                :
                    <div className="cuenta">
                        <Link to="/access">
                            <FontAwesomeIcon icon={faUser}/>
                        </Link>
                    </div>
            }
        </>
  )
}
