import Card from "./Card";
import StyleEnvio from "../Styles/Envio.module.css"

const Envio = ({ usuario }) => {
	return (
		<div className={StyleEnvio.contenedor}>
			<br></br>
			<Card usuario={usuario} />
			<p>Datos cargados correctamente</p>
		</div>
	);
};

export default Envio;
