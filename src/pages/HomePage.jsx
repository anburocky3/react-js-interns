import { useContext, useEffect } from "react";
import { BlogContext } from "../contexts/BlogContext";

const HomePage = () => {
  const { posts, setPosts } = useContext(BlogContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();

      setPosts(postJson.posts);
      console.log(postJson);
    };

    fetchPosts();
  }, []);

  const blogPostByTemplate = posts.map((post) => {
    return (
      <div
        className="bg-white p-10 rounded flex items-center space-x-10 mb-3"
        key={post.id}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png"
          alt="React Logo"
          className="w-20"
        />
        <div className="space-y-1">
          <h4 className="text-xl font-semibold">{post.title}</h4>
          <p>{post.body}</p>
          <div className="flex items-center gap-x-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  fill="currentColor"
                  d="m15 10l-.74-.123a.75.75 0 0 0 .74.873zM4 10v-.75a.75.75 0 0 0-.75.75zm16.522 2.392l.735.147zM6 20.75h11.36v-1.5H6zm12.56-11.5H15v1.5h3.56zm-2.82.873l.806-4.835l-1.48-.247l-.806 4.836zm-.92-6.873h-.214v1.5h.213zm-3.335 1.67L8.97 8.693l1.248.832l2.515-3.773zM7.93 9.25H4v1.5h3.93zM3.25 10v8h1.5v-8zm16.807 8.54l1.2-6l-1.47-.295l-1.2 6zM8.97 8.692a1.25 1.25 0 0 1-1.04.557v1.5c.92 0 1.778-.46 2.288-1.225zm7.576-3.405A1.75 1.75 0 0 0 14.82 3.25v1.5a.25.25 0 0 1 .246.291zm2.014 5.462c.79 0 1.38.722 1.226 1.495l1.471.294A2.75 2.75 0 0 0 18.56 9.25zm-1.2 10a2.75 2.75 0 0 0 2.697-2.21l-1.47-.295a1.25 1.25 0 0 1-1.227 1.005zm-2.754-17.5a3.75 3.75 0 0 0-3.12 1.67l1.247.832a2.25 2.25 0 0 1 1.873-1.002zM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M8 10v10"
                ></path>
              </g>
            </svg>
            {post.reactions}

            {post.tags.map((tag, index) => (
              <div
                key={`tags-${tag}-${index}`}
                className="px-2 py-0 rounded bg-green-500 text-white"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });

  console.log(blogPostByTemplate);

  return (
    <div className="m-10">
      <h4 className="text-2xl font-semibold mb-5">Latest posts</h4>

      {blogPostByTemplate}
    </div>
  );
};

export default HomePage;
