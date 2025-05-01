import FloatingLabelInput from "../components/ui/FloatingLabelInput";

const AddCharacter = () => {
  return (
    <div className="bg-background flex flex-col gap-6 py-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Encabezado */}
      <div className="flex flex-col px-6">
        <h2 className="text-3xl font-bold tracking-tight">Crear caracter</h2>
        <p className="text-muted-forground">Ingresar la Información</p>
      </div>
      {/* Formulario */}
      <div>
        <form>
          <FloatingLabelInput id="char" label="Caracter" value="" onChange={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default AddCharacter;
