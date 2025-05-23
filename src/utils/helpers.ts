import { CharacterForm, FormErrors } from "./types";

export const validate = (formData: CharacterForm) => {
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
