import { CiMenuKebab } from "react-icons/ci";
import CardContent from "../components/card/CardContent";
import Card from "../components/card/Card";
import CardHeader from "../components/card/CardHeader";
import CardTitle from "../components/card/CardTitle";

type DashboardItem = {
  title: string;
  count: number;
  desc: string;
};

const dashboardData: DashboardItem[] = [
  {
    title: "Total de caracteres",
    count: 40,
    desc: "Cantidad total de caracteres que hay registrados en la aplicación.",
  },
  {
    title: "Vocales",
    count: 21,
    desc: "10 vocales basicas y 11 vocales compuestas.",
  },
  {
    title: "Consonantes",
    count: 19,
    desc: "14 consonantes basicas y 5 consonantes dobles.",
  },
];

const Dashboard = () => {
  return (
    <div className="bg-white flex flex-col gap-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Encabezado */}
      <div className="flex flex-col gap-2 p-6 ">
        <h2 className="text-3xl font-bold tracking-tight">Alfabeto Coreano</h2>
        <p className="text-muted-forground">... colocar algo ...</p>
      </div>

      {/* Contenido */}
      <div className="flex flex-col p-6 gap-4">
        {dashboardData.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <div className="bg-primary p-1.5 cursor-pointer rounded-md shadow-md hover:shadow-lg active:scale-95 transition-all duration-300">
                <CiMenuKebab className="h-6 w-6 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-4xl font-semibold text-accent">{item.count}</p>
              </div>
              <p className="text-base text-muted-forground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
