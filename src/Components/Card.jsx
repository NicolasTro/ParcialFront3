import StyleCard from "../Styles/Card.module.css"

function Card({ usuario }) {	

	const { nombre, apellido, direccion } = usuario;
	return (
		<div className={StyleCard.contenedor}>
			<h3>Nombre: {nombre}</h3>
			<h3>Apellido: {apellido}</h3>
			<h3>Dirección: {direccion}</h3>      
		</div>
	);
}

export default Card;
