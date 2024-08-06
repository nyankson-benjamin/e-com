import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
   <div>
<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-500 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        Go back to the homepage
      </Link>
    </div>
   </div>
  );
};

export default NotFound;
