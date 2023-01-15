import EditUser from "./EditUser";

const Table = ({ updaterUser, search, info, deleteColaborador }) => {
  const infoList = info
    .filter((colaborador) =>
      colaborador.nombre.toLowerCase().includes(search.trim().toLowerCase())
    )
    .map((colaborador) => (
      <tr key={colaborador.id}>
        <th scope="row">{colaborador.id}</th>
        <td>{colaborador.nombre}</td>
        <td>{colaborador.correo}</td>
        <td>
          <button
            className="btn text-success p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target={"#offcanvasRight" + colaborador.id}
            aria-controls="offcanvasRight"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => deleteColaborador(colaborador.id)}
            className="btn text-danger p-0 ms-1"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
        <td>
          <EditUser updaterUser={updaterUser} colaborador={colaborador}/>
        </td>
      </tr>
    ));
  return (
    <table className="table table-hover table-primary table-striped table-text-shadow">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col" colSpan="2">
            Control
          </th>
        </tr>
      </thead>
      <tbody>{infoList}</tbody>
    </table>
  );
};

export default Table;
