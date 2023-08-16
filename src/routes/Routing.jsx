import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Users from "../components/Users";

const Routing = () => {
  return (
    <Routes>
      <Route path={routes.USERS} element={<Users />} />
    </Routes>
  );
};

export default Routing;

