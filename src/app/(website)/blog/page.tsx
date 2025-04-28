


export default async function BlogPage() {



  return (
    <div className="mt-20 p-6" >
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="text-gray-600 mt-4">{`Welcome to my blog! Here you'll find articles on various topics.`}</p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Latest Posts</h2>
        {/* Add your blog posts here */}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Categories</h2>
        {/* Add your blog categories here */}
        <ul className="list-disc list-inside mt-2">
          <li className="text-gray-700">Web Development</li>
          <li className="text-gray-700">Design</li>
          <li className="text-gray-700">Technology</li>
          <li className="text-gray-700">Personal</li>
          <li className="text-gray-700">Travel</li>
        </ul>
      </div>
      <p>Coming soon</p>
    </div>
  );
}
