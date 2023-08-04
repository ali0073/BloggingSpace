import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./Routes";
import Users from "../components/Users";
import UserPosts from "../components/UserPosts";

const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES.USERS} element={<Users />} />
      <Route path={`${ROUTES.USERS}/:id`} element={<UserPosts />} />
    </Routes>
  );
};

export default Routing;
