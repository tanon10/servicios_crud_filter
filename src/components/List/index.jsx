import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteService } from "../../reduxToolkit/services/serviceSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const List = () => {
  const [servicios, setServicios] = useState([]);

  const services = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const params = useParams();

  const handleDelete = (id) => {
    dispatch(deleteService(id));
  };

  useEffect(() => {
    const servicio = params.servicios ?? "";

    if (servicio === "") {
      setServicios(services);
    } else {
      setServicios(services.filter((s) => s.servicio === servicio));
    }
  }, [services, params.servicios]);

  return (
    <>
      {servicios.map((service) => (
        <div
          className="card col"
          key={service.id}
          style={{ width: "16rem", height: "16rem" }}
        >
          <div className="card-body">
            <h5 className="car-title">{service.title}</h5>
            <span className="badge text-bg-primary">{service.servicio}</span>
            <p className="card-text">{service.description}</p>
          </div>
          <div className="card-footer">
            <Link
              to={
                params.servicios
                  ? `/servicio/${service.servicio}/${service.id}`
                  : `/${service.id}`
              }
              className="btn text-primary text-decoration-none"
            >
              Editar
            </Link>

            <button
              className="btn btn-light text-primary"
              onClick={() => handleDelete(service.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default List;
