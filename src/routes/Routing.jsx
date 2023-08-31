import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Users from '../pages/Users';
import UserPosts from '../pages/UserPosts';
import PostComments from '../pages/PostComments';

const Routing = () => {
  return (
    <Routes>
      <Route path={routes.USERS} element={<Users />} />
      <Route path={routes.POSTS} element={<UserPosts />} />
      <Route path={routes.COMMENTS} element={<PostComments />} />
    </Routes>
  );
};

export default Routing;
