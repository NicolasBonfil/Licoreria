import { Item } from "./Item"

export const ItemList = ({productos}) => {
	return (
		<div className="contenedor">

			<div className="container-productos">
				{
					productos.map((producto) =>
						<Item key={producto.id} producto={producto}/>
					)
				}
			</div>
		</div>
	)
}