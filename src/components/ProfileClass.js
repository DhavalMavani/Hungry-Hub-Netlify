// Profile.js

import React from 'react';

const Profile = ({ name, username, bio, avatarUrl }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <img
        src={"https://lh3.googleusercontent.com/a-/AOh14GjjUe4YxyBDhLDiNgHzbBWqrzGAx3Z-mLj6-rUdaw?height=180&width=180"}
        alt={`${"Dhaval"}'s avatar`}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{"Dhaval Mavani"}</h2>
      {/* <p className="text-sm text-gray-700 mt-2">{"hjbsd"}</p> */}

      {/* Links Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Connect with me</h3>
        <div className="flex items-center space-x-2">
          <a
            href="https://www.linkedin.com/in/dhaval-mavani-a593571bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://github.com/DhavalMavani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
