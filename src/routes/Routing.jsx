import { Route, Routes } from 'react-router-dom';
import { COMMENTS, POSTS, USERS } from './routes';
import Users from '../pages/Users';
import UserPosts from '../pages/UserPosts';
import PostComments from '../pages/PostComments';

const Routing = () => {
  return (
    <Routes>
      <Route path={USERS} element={<Users />} />
      <Route path={POSTS} element={<UserPosts />} />
      <Route path={COMMENTS} element={<PostComments />} />
    </Routes>
  );
};

export default Routing;
