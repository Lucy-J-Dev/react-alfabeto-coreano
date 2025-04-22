import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import Card from "../components/card/Card";
import CardHeader from "../components/card/CardHeader";
import CardTitle from "../components/card/CardTitle";
import CardContent from "../components/card/CardContent";

type CharacterItem = {
  id: number;
  char: string;
  name: string;
  type: string;
  desc: string;
};

const charactersData: CharacterItem[] = [
  { id: 1, char: "ㄱ", name: "Giyeok", type: "Consonant", desc: "Basic consonant" },
  { id: 2, char: "ㄴ", name: "Nieun", type: "Consonant", desc: "Basic consonant" },
  { id: 3, char: "ㄷ", name: "Digeut", type: "Consonant", desc: "Basic consonant" },
  { id: 4, char: "ㄹ", name: "Rieul", type: "Consonant", desc: "Basic consonant" },
  { id: 5, char: "ㅁ", name: "Mieum", type: "Consonant", desc: "Basic consonant" },
  { id: 6, char: "ㅂ", name: "Bieup", type: "Consonant", desc: "Basic consonant" },
  { id: 15, char: "ㅏ", name: "A", type: "Vowel", desc: "Basic vowel" },
  { id: 16, char: "ㅑ", name: "Ya", type: "Vowel", desc: "Basic vowel" },
];

const Characters = () => {
  return (
    <div className="bg-background flex flex-col gap-6  py-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Encabezado */}
      <div className="flex flex-col px-6">
        <h2 className="text-3xl font-bold tracking-tight">Caracteres</h2>
        <p className="text-muted-forground">Busca y manipula los caracteres del alfabeto Coreano</p>
      </div>

      {/* Sección de buscar y boton crear */}
      <div className="px-6 flex gap-6">
        <div className="bg-background flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 shadow-sm flex-1 ">
          <IoSearch className="w-6 h-6 text-gray-500" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Buscar..."
            className="outline-none w-full bg-transparent text-sm text-gray-700 ring-offset-background"
          />
        </div>

        <Link
          to="/caracteres/nuevo"
          className="bg-primary text-forground flex items-center justify-center gap-2 px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 hover:font-semibold active:scale-95 transition-all duration-300 ease-in-out"
        >
          <LuPlus />
          <span>Crear caracter</span>
        </Link>
      </div>

      {/* Lista de caracteres */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
        {charactersData.map((character) => (
          <Link
            className="hover:scale-105 hover:bg-primary/50 transition-all duration-300 ease-initial"
            key={character.id}
            to={`/caracteres/${character.id}`}
          >
            <Card>
              <CardHeader>
                <CardTitle>{character.char}</CardTitle>
                <span className="text-sm font-bold text-accent">{character.type}</span>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{character.name}</p>
                <p className="italic text-muted-forground">{character.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Characters;
