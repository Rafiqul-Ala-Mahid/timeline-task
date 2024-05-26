/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Post = ({ post, user }) => {
    console.log(post)
    console.log(user)
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg my-6 transition transform hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
          {user.name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="text-lg font-semibold text-blue-700">{user.name}</p>
          <p className="text-sm text-gray-500">User Email: {user.email}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <p className="text-right text-gray-400 text-sm">Post ID: {post.id}</p>
    </div>
  );
};

export default Post;
