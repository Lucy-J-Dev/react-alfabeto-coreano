import Card from "../components/card/Card";
import CardContent from "../components/card/CardContent";
import CardHeader from "../components/card/CardHeader";
import CardTitle from "../components/card/CardTitle";

type CharacterItemDetail = {
  id: number;
  char: string;
  name: string;
  type: string;
  desc: string;
  pronuntiation?: string;
  charRomaji?: string;
  nameRomaji?: string;
  img?: string;
  audios?: string[];
};

const characterDetailData: CharacterItemDetail = {
  id: 1,
  char: "ㄱ",
  name: "기역",
  type: "Consonante",
  desc: "Consonante básica",
  pronuntiation: "/gu/ /k/",
  charRomaji: "g",
  nameRomaji: "Giyeok",
};

const CharacterDetail = () => {
  return (
    <div className=" bg-background flex flex-col gap-6 py-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Encabezado */}
      <div className="px-6">Pagina en construcción</div>

      {/* Contenido */}
      <div className="flex flex-col bg-pink-200 px-6 gap-6 md:flex-row">
        <Card>
          <CardHeader>
            <CardTitle>Información del caracter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="pl-2 mt-2">
              <div className="flex gap-2">
                <p className="font-bold">Nombre del caracter: </p>
                <p>{characterDetailData.name}</p>
              </div>
              {characterDetailData.nameRomaji && (
                <div className="flex gap-2">
                  <p className="font-bold">Nombre en alfabeto latino:</p>
                  <p>{characterDetailData.nameRomaji}</p>
                </div>
              )}
              <div className="flex gap-2">
                <p className="font-bold">Tipo del caracter: </p>
                <p>{characterDetailData.type}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Descripción del caracter: </p>
                <p>{characterDetailData.desc}</p>
              </div>
              {characterDetailData.pronuntiation && (
                <div className="flex gap-2">
                  <p className="font-bold">Pronunciación del caracter:</p>
                  <p>{characterDetailData.pronuntiation}</p>
                </div>
              )}
              {characterDetailData.charRomaji && (
                <div className="flex gap-2">
                  <p className="font-bold">Caracter en alfabeto latino:</p>
                  <p>{characterDetailData.charRomaji}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <Card>Hola</Card>
      </div>
    </div>
  );
};

export default CharacterDetail;
