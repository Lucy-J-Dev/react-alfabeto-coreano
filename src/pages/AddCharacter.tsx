// Imports
import { useState } from "react";
import FloatingLabelInput from "../components/ui/FloatingLabelInput";

// Tipos y constantes
type CharacterForm = {
  char: string;
  name?: string;
  type: string;
  desc?: string;
  pronuntiation: string;
  charRomaji: string;
  nameRomaji?: string;
};

type FormErrors = {
  [key: string]: string;
};

const characterInitialValue: CharacterForm = {
  char: "",
  charRomaji: "",
  pronuntiation: "",
  type: "",
};

// Componente
const AddCharacter = () => {
  // Estados
  const [formData, setFormData] = useState(characterInitialValue);
  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);

  // Effectos

  // Funciones
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Datos del caracter:", formData);
    await handleCallApi(formData);
  };

  const handleCallApi = async (formData: CharacterForm) => {
    setLoading(true);
    setMessageError("");
    setMessage("");

    try {
      const response = await createCharacter(formData);
      setMessage("Su caracter formData.char fue creado con el id: response.id");
      setFormData(characterInitialValue);
    } catch (error) {
      console.log(error);
      setMessageError("Su caracter no fue creado");
    } finally {
      setLoading(false);
    }
  };

  const createCharacter = async (formData: CharacterForm) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/jamos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          character: formData.char,
          type: formData.type,
          pronunciation: formData.pronuntiation,
          characterRomaji: formData.charRomaji,
          name: formData.name,
          nameRomaji: formData.nameRomaji,
          description: formData.desc,
        }),
      });
      const result = await response.json();
      console.log("Api: ", result);
      if (!response.ok) {
        throw new Error(result.message || `Error ${response.status}: ${response.statusText}`);
      }
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const validate = (formData: CharacterForm) => {
    const newErrors: FormErrors = {};

    if (!formData.char.trim()) newErrors.char = "El caracter es obligatorio";
    else if (formData.char.length > 1) newErrors.char = "Solo se permite 1 carácter.";

    if (!formData.type.trim()) newErrors.type = "El tipo de caracter es obligatorio.";
    else if (formData.type.length < 1 || formData.type.length > 20)
      newErrors.type = "El tipo de caracter debe tener máximo 20 caracteres.";

    if (!formData.pronuntiation.trim()) newErrors.pronuntiation = "La pronunciación del caracter es obligatorio.";
    else if (formData.pronuntiation.length < 1 || formData.pronuntiation.length > 40)
      newErrors.pronuntiation = "La pronunciación del caracter debe tener máximo 40 caracteres.";

    if (!formData.charRomaji.trim()) newErrors.charRomaji = "El caracter en alfabeto latino es obligatorio.";
    else if (formData.charRomaji.length < 1 || formData.charRomaji.length > 2)
      newErrors.charRomaji = "El caracter en alfabeto latino debe tener al menos 2 caracteres.";

    return newErrors;
  };

  // Vista o HTML con JS de react
  return (
    <div className="bg-background flex flex-col gap-6 py-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Encabezado */}
      <div className="flex flex-row">
        <div className="flex flex-col  flex-1 px-6">
          <h2 className="text-3xl font-bold tracking-tight">Crear caracter</h2>
          <p className="text-muted-foreground">Ingresar la Información</p>
        </div>
        <div className="flex flex-1">
          {message && <p className="text-green-400 text-4xl">{message}</p>}
          {messageError && <p className="text-red-500 text-4xl">{messageError}</p>}
        </div>
      </div>
      {/* Formulario */}
      <div className="px-6">
        <form onSubmit={handleSubmit}>
          <FloatingLabelInput
            id="char"
            name="char"
            label="* Caracter"
            value={formData.char}
            onChange={handleChange}
            minLength={1}
            maxLength={1}
            error={errors.char}
          />
          <FloatingLabelInput
            id="name"
            name="name"
            label="Nombre del Caracter"
            value={formData.name}
            onChange={handleChange}
            minLength={1}
            maxLength={5}
            error={errors.name}
          />
          <FloatingLabelInput
            id="nameRomaji"
            name="nameRomaji"
            label="Nombre en alfabeto latino"
            value={formData.nameRomaji}
            onChange={handleChange}
            minLength={1}
            maxLength={10}
            error={errors.nameRomaji}
          />
          <FloatingLabelInput
            id="type"
            name="type"
            label="* Tipo de caracter"
            value={formData.type}
            onChange={handleChange}
            minLength={1}
            maxLength={20}
            error={errors.type}
          />
          <FloatingLabelInput
            id="desc"
            name="desc"
            label="Descripción del caracter"
            value={formData.desc}
            onChange={handleChange}
            minLength={1}
            maxLength={40}
            error={errors.desc}
          />
          <FloatingLabelInput
            id="pronuntiation"
            name="pronuntiation"
            label="* Pronunciación del caracter"
            value={formData.pronuntiation}
            onChange={handleChange}
            minLength={1}
            maxLength={40}
            error={errors.pronuntiation}
          />
          <FloatingLabelInput
            id="charRomaji"
            name="charRomaji"
            label="* Caracter en alfabeto latino"
            value={formData.charRomaji}
            onChange={handleChange}
            minLength={1}
            maxLength={2}
            error={errors.charRomaji}
          />

          <div className=" flex justify-end align-center mt-8">
            <button
              className="bg-primary text-forground px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 hover:font-semibold active:scale-95 transition-all duration-300 ease-in-out"
              type="submit"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCharacter;
