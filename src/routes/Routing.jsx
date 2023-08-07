import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./Routes";
import Users from "../components/Users";

const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES.USERS} element={<Users />} />
    </Routes>
  );
};

export default Routing;
