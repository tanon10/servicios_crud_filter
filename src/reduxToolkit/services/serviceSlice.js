import { createSlice } from "@reduxjs/toolkit/";

const init = [
  {
    id: "1",
    title: "Electricidad",
    description: "Sercivio Electrico a domicilio",
    servicio: "hogar",
  },
  {
    id: "2",
    title: "Ambulancia",
    description: "Sercivio traslado de pacientes",
    servicio: "salud",
  },
  {
    id: "3",
    title: "Mecanico en linea",
    description: "Ayudamos a tu carro",
    servicio: "autos",
  },
];
export const serviceSlice = createSlice({
  name: "services",
  initialState: init,
  reducers: {
    addService: (state, action) => {
      state.push(action.payload);
    },
    editService: (state, action) => {
      const { id, title, description, servicio } = action.payload;

      const serviceFound = state.find((service) => service.id === id);

      if (serviceFound) {
        serviceFound.title = title;
        serviceFound.description = description;
        serviceFound.servicio = servicio;
      }
    },
    deleteService: (state, action) => {
      const serviceFound = state.find(
        (service) => service.id === action.payload
      );
      if (serviceFound) {
        state.splice(state.indexOf(serviceFound), 1);
      }
    },
  },
});

export const { addService, editService, deleteService } = serviceSlice.actions;

export default serviceSlice.reducer;
