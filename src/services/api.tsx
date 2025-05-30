import { CharacterForm } from "../utils/types";

export const createCharacter = async (formData: CharacterForm) => {
  try {
    const response = await fetch("https://hangul-api-lucy-j-dev.azurewebsites.net/api/v1/jamos", {
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
      let errorMessage = "";

      Object.entries(result.errors).forEach(([field, message]) => {
        message.forEach((msg) => {
          errorMessage = errorMessage + " " + msg;
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
    const response = await fetch("https://hangul-api-lucy-j-dev.azurewebsites.net/api/v1/general/types");
    const result = await response.json();
    if (!response.ok) {
      throw new Error("");
    }
    return result;
  } catch (error) {
    throw new Error("No fue posible obtener los tipos");
  }
};

export const getSummary = async () => {
  try {
    const response = await fetch("https://hangul-api-lucy-j-dev.azurewebsites.net/api/v1/general/summary");
    const result = await response.json();
    if (!response.ok) {
      throw new Error("");
    }
    return result;
  } catch (error) {
    throw new Error("No fue posible obtener resumenes");
  }
};

export const getCharacters = async () => {
  try {
    const response = await fetch("https://hangul-api-lucy-j-dev.azurewebsites.net/api/v1/jamos");
    const result = await response.json();
    if (!response.ok) {
      throw new Error("");
    }
    return result;
  } catch (error) {
    throw new Error("No fue posible obtener los caracteres");
  }
};
