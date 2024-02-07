import blogPosts from "../data/blog.json";

const HomePageBak = () => {
  const blogPostByTemplate = blogPosts.map((post) => {
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
          <p>{post.desc}</p>
        </div>
      </div>
    );
  });

  console.log(blogPostByTemplate);

  return (
    <div className="m-10">
      <h4 className="text-2xl font-semibold mb-5">Latest posts</h4>

      {blogPostByTemplate}
      {/* <div className="bg-white p-10 rounded flex items-center space-x-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png"
          alt="React Logo"
          className="w-20"
        />
        <div className="space-y-1">
          <h4 className="text-xl font-semibold">
            Anbu is preparing ReactJS Course Material!
          </h4>
          <p>He is delaying for last few decades!</p>
        </div>
      </div> */}
    </div>
  );
};

export default HomePageBak;
