import { useState } from "react";
import baseColaboradores from "./dataBase/dataBase";
import Table from "./components/Table";
import SearchUser from "./components/SearchUser";
import AddUser from "./components/AddUser";
import swal from "sweetalert";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      swal("ERROR", "Uno de los campos esta en blanco", "error");
    } else {
      const newColaborador = {
        id: Date.now(),
        nombre: name,
        correo: email,
      };
      setListColaborador((prev) => [...prev, newColaborador]);
    }
  };

  const handleDelete = (id) => {
    setListColaborador(
      listColaborador.filter((colaborador) => colaborador.id !== id)
    );
  };

  const updaterUser = (id, newName, newMail) => {
    if (newName === "" || newMail === "") {
      swal("ERROR", "Uno de los campos esta en blanco", "error");
    } else {
      const newColaborador = { id: id, nombre: newName, correo: newMail };
      setListColaborador(
        listColaborador.map((colaborador) =>
          colaborador.id === id ? newColaborador : colaborador
        )
      );
    }
  };

  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [listColaborador, setListColaborador] = useState(baseColaboradores);

  return (
    <section className="p-2 mt-3">
      <h1 className="text-center pb-5">Lista de colaboradores</h1>
      <div className="d-flex gap-2 mb-2">
        <SearchUser onChange={(e) => setSearch(e.target.value)} />
        <AddUser
          onSubmit={handleSubmit}
          onChangeName={(e) => setName(e.target.value)}
          onChangeMail={(e) => setEmail(e.target.value)}
        />
      </div>
      <Table
        updaterUser={updaterUser}
        search={search}
        info={listColaborador}
        deleteColaborador={handleDelete}
      ></Table>
    </section>
  );
};

export default App;
