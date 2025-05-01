import { useState } from "react";
import FloatingLabelInput from "../components/ui/FloatingLabelInput";

type CharacterForm = {
  char: string;
  name?: string;
  type: string;
  desc?: string;
  pronuntiation: string;
  charRomaji: string;
  nameRomaji?: string;
};

const characterInitialValue: CharacterForm = {
  char: "",
  charRomaji: "",
  pronuntiation: "",
  type: "",
};

const AddCharacter = () => {
  const [formData, setFomrData] = useState(characterInitialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFomrData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="bg-background flex flex-col gap-6 py-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Encabezado */}
      <div className="flex flex-col px-6">
        <h2 className="text-3xl font-bold tracking-tight">Crear caracter</h2>
        <p className="text-muted-forground">Ingresar la Información</p>
      </div>
      {/* Formulario */}
      <div className="px-6">
        <form>
          <FloatingLabelInput id="char" name="char" label="Caracter" value={formData.char} onChange={handleChange} />
          <FloatingLabelInput
            id="name"
            name="name"
            label="Nombre del Caracter"
            value={formData.name}
            onChange={handleChange}
          />
          <FloatingLabelInput
            id="nameRomaji"
            name="nameRomaji"
            label="Nombre en alfabeto latino"
            value={formData.nameRomaji}
            onChange={handleChange}
          />
          <FloatingLabelInput
            id="type"
            name="type"
            label="Tipo de caracter"
            value={formData.type}
            onChange={handleChange}
          />
          <FloatingLabelInput
            id="desc"
            name="desc"
            label="Descripción del caracter"
            value={formData.desc}
            onChange={handleChange}
          />
          <FloatingLabelInput
            id="pronuntiation"
            name="pronuntiation"
            label="Pronunciación del caracter"
            value={formData.pronuntiation}
            onChange={handleChange}
          />
          <FloatingLabelInput
            id="charRomaji"
            name="charRomaji"
            label="Caracter en alfabeto latino"
            value={formData.charRomaji}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default AddCharacter;
