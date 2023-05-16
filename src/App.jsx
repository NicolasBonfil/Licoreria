import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./hojas-de-estilo/estilos.css"
import {CartContextProvider } from './Context/CartContext'


import { ItemListContainer } from './Componentes/ItemList/ItemListContainer'
import { ItemDetailContainer } from './Componentes/ItemDetail/ItemDetailContainer'
import { LoginContainer } from './Componentes/LogIn/LoginContainer'
import { SignUpContainer } from './Componentes/SignUp/SignUpContainer'
import { CuentaContainer } from './Componentes/Cuenta/CuentaContainer'
import { SesionContextProvider } from './Context/SesionContext'
import { Footer } from './Componentes/Footer/Footer'
import { ContactoContainer } from './Componentes/Contacto/ContactoContainer'
import { PreguntasFrecuentes } from './Componentes/PreguntasFrecuentes/PreguntasFrecuentes'
import { CheckoutContainer } from './Componentes/Checkout/CheckoutContainer'


function App() {
  return (
	<SesionContextProvider>
		<CartContextProvider>
			<Router>
				
				<Routes>
					<Route path='/' element = {<ItemListContainer/>}/>
					<Route path='/categoria/:cid' element = {<ItemListContainer/>}/>
					<Route path='/detail/:pid' element = {<ItemDetailContainer/>}/>



					<Route path='/access' element = {<LoginContainer/>}/>
					<Route path='/signup' element = {<SignUpContainer/>}/>
					<Route path='/cuenta' element = {<CuentaContainer/>}/>

					<Route path='/checkout' element = {<CheckoutContainer/>}/>

					<Route path='/contacto' element = {<ContactoContainer/>}/>
					<Route path='/preguntas-frecuentes' element = {<PreguntasFrecuentes/>}/>

					<Route path='*' element = {<Navigate to="/"/>}/>
				</Routes>
				
				<Footer/>
				
			</Router>
		</CartContextProvider>
	</SesionContextProvider>
  )
}

export default App
