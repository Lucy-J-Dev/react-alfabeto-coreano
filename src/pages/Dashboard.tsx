import { CiMenuKebab } from "react-icons/ci";
import CardContent from "../components/card/CardContent";
import Card from "../components/card/Card";
import CardHeader from "../components/card/CardHeader";
import CardTitle from "../components/card/CardTitle";
import { useEffect, useState } from "react";
import { getSummary } from "../services/api";
import { Summary } from "../utils/types";
// import { DashboardItem } from "../utils/types";
import { Content } from "../utils/types";

const Dashboard = () => {
  const [dataSummary, setDataSummary] = useState<Summary>({ title: "", summary: "", content: [] });
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    setLoading(true);
    const handleCallGetSumaryApi = async () => {
      try {
        const data = await getSummary();
        setDataSummary(data);
        console.log(data);
      } catch (error) {
        setMessageError(error.message);
      } finally {
        setLoading(false);
      }
    };
    handleCallGetSumaryApi();
  }, []);

  return (
    <div className="bg-white flex flex-col gap-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {loading ? (
        <p>Cargando</p>
      ) : (
        <div>
          {/* Encabezado */}
          <div className="flex flex-col gap-2 p-6 ">
            <h2 className="text-3xl font-bold tracking-tight">{dataSummary.title}</h2>
            <p className="text-muted-foreground">{dataSummary.summary}</p>
          </div>

          {/* Contenido */}
          <div className="flex flex-col p-6 gap-4">
            {dataSummary.content.map((item, index) => (
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
                  <p className="text-base text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
