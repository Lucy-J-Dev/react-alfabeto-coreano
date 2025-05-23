import { CharacterForm } from "../utils/types";

export const createCharacter = async (formData: CharacterForm) => {
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
