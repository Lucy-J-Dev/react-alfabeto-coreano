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
          <div className="bg-amber-300 relative">
            <input
              className="bg-pink-200 peer h-12 w-full border-b-2 border-primary text-foreground placeholder-transparent focus:outline-none  focus:border-accent "
              type="text"
              id="char"
              placeholder=" "
            />
            <label
              className="absolute left-0 top-3 text-muted-forground text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-accent "
              htmlFor="char"
            >
              Caracter
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCharacter;
