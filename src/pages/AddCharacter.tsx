// Imports
import { useEffect, useState } from "react";
import FloatingLabelInput from "../components/ui/FloatingLabelInput";
import { CharacterForm, CharacterType, FormErrors } from "../utils/types";
import { createCharacter, getCharacterTypes } from "../services/api";
import { validate } from "../utils/helpers";

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
  const [characterTypes, setCharacterTypes] = useState<CharacterType[]>([]);

  // Effectos
  useEffect(() => {
    setLoading(true);
    const handleCallGetCharacterTypesApi = async () => {
      try {
        const data = await getCharacterTypes();
        setCharacterTypes(data);
        console.log(data);
      } catch (error) {
        setMessageError(error.message);
      } finally {
        setLoading(false);
      }
    };
    handleCallGetCharacterTypesApi();
  }, []);

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
      setMessage(`Su caracter ${formData.char} fue creado con el id: ${response.id}`);
      setFormData(characterInitialValue);
    } catch (error) {
      console.log(error);
      setMessageError(`Su caracter no fue creado ${error.message}`);
    } finally {
      setLoading(false);
    }
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
        <div className="flex flex-2">
          {message && <p className="text-green-400 text-2xl">{message}</p>}
          {messageError && <p className="text-red-500 text-2xl">{messageError}</p>}
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
          {/* aqui poner el select para el tipo */}
          <div>
            <label htmlFor="type">
              <select name="type" id="type">
                <option value="">Seleccione un tipo</option>
                {characterTypes.map((type) => (
                  <option key={type.name} value={type.name}>
                    {type.displayname}
                  </option>
                ))}
              </select>
            </label>
          </div>
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
              className="bg-primary text-forground px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 hover:font-semibold active:scale-95 transition-all duration-300 ease-in-out cursor-pointer"
              disabled={loading}
              type="submit"
            >
              {loading ? "Cargando..." : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCharacter;
