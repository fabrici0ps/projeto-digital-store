import { Link } from "react-router";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="container-layout">
      <div className="flex flex-col gap-3 items-center justify-center h-screen">
        <h1 className="text-4xl text-center font-bold text-gray-800">Página não disponível no momento</h1>
        <Link to={"/"}>
          <Button title="Ir para home" className="bg-primary px-6" />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;