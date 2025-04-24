import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import AddCharacter from "./pages/AddCharacter";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/caracteres" element={<Characters />} />
          <Route path="/caracteres/:id" element={<CharacterDetail />} />
          <Route path="/caracteres/nuevo" element={<AddCharacter />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
