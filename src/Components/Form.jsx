
import { useState } from "react";
import Envio from "./Envio";
import StyleForm from "../Styles/Form.module.css"

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
	direccion:""

  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) =>
    setUsuario({ ...usuario, nombre: event.target.value });

  const handleApellido = (e) =>
    setUsuario({ ...usuario, apellido: e.target.value });
  const handleDireccion = (e) =>
    setUsuario({ ...usuario, direccion: e.target.value });

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      usuario.nombre.trim().length > 3 && !usuario.nombre.startsWith(" ") &&
      usuario.apellido.trim().length > 5 &&
      usuario.direccion.trim().length >2
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
	  setShow(false);
    }
  };
  
  return (
    <>
      <form className={StyleForm.form} onSubmit={handleSumbit}>
        <label>Nombre</label>
        <input type="text" value={usuario.nombre} onChange={handleName} placeholder="Ingresa nombre" />
		<label>Apellido</label>
        <input
          type="text"
          value={usuario.apellido}
          onChange={handleApellido} placeholder="Ingresa apellido"
        />

        <label>Dirección</label>
        <input
          type="text"
          value={usuario.direccion}
          onChange={handleDireccion} placeholder="Ingresa direccion"
        />
        <button>Enviar</button>
      </form>
      
      {show && <Envio usuario={usuario} />}
      {error && (
        <p style={{ color: "red", backgroundColor: "black" }}>
          Por favor chequea que la información sea correcta
        </p>
      )}
    </>
  );
};

export default Form;