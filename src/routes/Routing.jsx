import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Users from "../components/Users";
import UserPosts from "../components/UserPosts";

const Routing = () => {
  return (
    <Routes>
      <Route path={routes.USERS} element={<Users />} />
      <Route path={`${routes.USERS}/:id`} element={<UserPosts />} />
    </Routes>
  );
};

export default Routing;

