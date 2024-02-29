import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { BlogContext } from "../../contexts/BlogContext";

const ManageBlog = () => {
  const { user } = useContext(UserContext);
  const { posts, setPost } = useContext(BlogContext);

  console.log(posts, setPost);

  return (
    <div className="space-y-4">
      Products for Mr. {user.userName} user! <br />
    </div>
  );
};

export default ManageBlog;
