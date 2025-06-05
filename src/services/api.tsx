import { CharacterForm } from "../utils/types";

const URL = "https://hangul-api-lucy-j-dev.azurewebsites.net"; // TODO: Recuperar informacion desde variables de entorno

export const createCharacter = async (formData: CharacterForm) => {
  try {
    const response = await fetch(`${URL}/api/v1/jamos`, {
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
    if (!response.ok) {
      let errorMessage = "";

      const errors = result.errors as Record<string, string[]>;

      Object.entries(errors).forEach(([, message]) => {
        message.forEach((msg: string) => {
          errorMessage += ` ${msg}`;
        });
      });
      throw new Error(errorMessage || `Error ${response.status}: ${response.statusText}`);
    }
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCharacterTypes = async () => {
  try {
    const response = await fetch(`${URL}/api/v1/general/types`);
    const result = await response.json();
    if (!response.ok) {
      throw new Error("");
    }
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("No fue posible obtener los tipos");
    }
  }
};

export const getSummary = async () => {
  try {
    const response = await fetch(`${URL}/api/v1/general/summary`);
    const result = await response.json();
    if (!response.ok) {
      throw new Error("");
    }
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("No fue posible obtener resumenes");
    }
  }
};

export const getCharacters = async () => {
  try {
    const response = await fetch(`${URL}/api/v1/jamos`);
    const result = await response.json();
    if (!response.ok) {
      throw new Error("");
    }
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("No fue posible obtener los caracteres");
    }
  }
};
