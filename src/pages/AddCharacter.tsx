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

type FormErrors = {
  [key: string]: string;
};

const AddCharacter = () => {
  const [formData, setFomrData] = useState(characterInitialValue);

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFomrData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formData);

    console.log("Datos del caracter:", formData);
  };

  const validate = (formData: CharacterForm) => {
    const newErrors: FormErrors = {};

    if (!formData.char.trim()) newErrors.char = "El caracter es obligatorio";

    // if (!formData.caracter.trim()) newErrors.caracter = "El carácter es obligatorio.";
    // else if (formData.caracter.length > 1) newErrors.caracter = "Solo se permite 1 carácter.";

    // if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    // else if (formData.nombre.length < 2) newErrors.nombre = "El nombre debe tener al menos 2 caracteres.";
    // else if (formData.nombre.length > 50) newErrors.nombre = "Máximo 50 caracteres.";

    // if (!formData.pronunciacion.trim()) newErrors.pronunciacion = "La pronunciación es obligatoria.";

    // if (formData.descripcion.length > 100)
    //   newErrors.descripcion = "La descripción debe tener máximo 100 caracteres.";

    // return newErrors;
  };

  return (
    <div className="bg-background flex flex-col gap-6 py-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Encabezado */}
      <div className="flex flex-col px-6">
        <h2 className="text-3xl font-bold tracking-tight">Crear caracter</h2>
        <p className="text-muted-foreground">Ingresar la Información</p>
      </div>
      {/* Formulario */}
      <div className="px-6">
        <form onSubmit={handleSubmit}>
          <FloatingLabelInput
            id="char"
            name="char"
            label="Caracter"
            value={formData.char}
            onChange={handleChange}
            required
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
            label="Tipo de caracter"
            value={formData.type}
            onChange={handleChange}
            required
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
            label="Pronunciación del caracter"
            value={formData.pronuntiation}
            onChange={handleChange}
            required
            minLength={1}
            maxLength={10}
            error={errors.pronuntiation}
          />
          <FloatingLabelInput
            id="charRomaji"
            name="charRomaji"
            label="Caracter en alfabeto latino"
            value={formData.charRomaji}
            onChange={handleChange}
            required
            minLength={1}
            maxLength={2}
            error={errors.charRomaji}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default AddCharacter;
