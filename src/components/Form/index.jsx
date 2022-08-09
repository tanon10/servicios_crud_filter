import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addService,
  editService,
} from "../../reduxToolkit/services/serviceSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {
  const [service, setService] = useState({
    title: "",
    description: "",
    servicio: "",
  });

  const services = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setService({
      title: "",
      description: "",
      servicio: " ",
    });
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editService({ ...service }));
    } else {
      dispatch(
        addService({
          ...service,
          id: uuid(),
        })
      );
    }
    handleReset();
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setService(services.find((service) => service.id === params.id));
    }
  }, [services, params.id]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-body">
          <h3>Servicio</h3>
          <h5>Nombre</h5>
          <input
            required
            type="text"
            placeholder="Ingrese el servicio"
            className="form-control mt-3 mb-3"
            name="title"
            value={service.title || ""}
            onChange={handleChange}
          />
          <h5>Descripcion</h5>
          <input
            required
            type="text"
            placeholder="Descripcion del servicio"
            className="form-control mt-3 mb-3"
            name="description"
            value={service.description || ""}
            onChange={handleChange}
          />

          <h5>Categorias:</h5>
          <select
            className="form-select mt-3 mb-3"
            aria-label="Default select example"
            onChange={handleChange}
            name="servicio"
          >
            <option selected value=" ">
              Selecciona la categoria
            </option>
            <option value="autos">Autos</option>
            <option value="salud">Salud</option>
            <option value="hogar">Hogar</option>
          </select>
        </div>

        <div className="card-footer">
          <button type="submit" className="btn btn-outline-success m-1">
            Grabar
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="btn btn-outline-danger m-1"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
