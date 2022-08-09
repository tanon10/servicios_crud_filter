import Form from "../../components/Form";
import List from "../../components/List";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3">Servicios</h1>

      <Navbar />

      <div className="row">
        <div
          className="col-8"
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
        >
          <List />
        </div>

        <div className="col-4">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
