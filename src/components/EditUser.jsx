import { useState } from "react";

const EditUser = ({updaterUser, colaborador}) => {
  const [newName, setNewName] = useState("");
  const [newMail, setNewMail] = useState("");
  

  return (
    <div
      className="offcanvas offcanvas-end off-canvas"
      tabIndex="-1"
      id={"offcanvasRight" + colaborador.id}
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title display-6" id="offcanvasRightLabel">
          Modifica al colaborador
        </h5>
      </div>
      <div className="offcanvas-body d-flex flex-column align-items-center gap-2">
        <p className="m-0 pt-5">Nuevo nombre:</p>
        <input className="w-100" type="text" placeholder={colaborador.nombre} onChange={(e) => setNewName(e.target.value)} />
        <p className="m-0 pt-5">Nuevo Email</p>
        <input className="w-100" type="email" placeholder={colaborador.correo} onChange={(e) => setNewMail(e.target.value)} />
        <button className="btn button-color mt-5" onClick={() => updaterUser(colaborador.id, newName, newMail)}>Modificar</button>
      </div>
    </div>
  );
};

export default EditUser;
