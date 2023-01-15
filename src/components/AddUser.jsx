const AddUser = ({ onSubmit, onChangeName, onChangeMail }) => {
  return (
    <div className="w-50 text-center">
      <button
        className="btn button-color"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Añadir colaborador
      </button>
      <div
        className="offcanvas offcanvas-top off-canvas"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title display-4" id="offcanvasTopLabel">
            Añadir colaborador
          </h5>
        </div>
        <div className="offcanvas-body">
          <form onSubmit={onSubmit} className="d-flex gap-2 flex-column">
            <div className="d-flex justify-content-center gap-2">
              <div className="w-25">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={onChangeName}
                />
              </div>
              <div className="w-25">
                <label className="form-label">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={onChangeMail}
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn button-color">
                Añadir
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
