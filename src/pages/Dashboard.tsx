import Card from "@components/card/Card";
import CardHeader from "@components/card/CardHeader";
import { CiMenuKebab } from "react-icons/ci";
import CardContent from "../components/card/CardContent";

const Dashboard = () => {
  return (
    <div className="bg-white flex flex-col gap-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Encabezado */}
      <div className="flex-col gap-2 p-6 ">
        <h1 className="text-3xl font-bold tracking-tight">Alfabeto Coreano</h1>
        <p className="text-muted-forground">... colocar algo ...</p>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <Card>
          <CardHeader title={"Titulo de la tarjeta"} icon={CiMenuKebab} />
          <CardContent>
            <h4>Texto exterior</h4>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
