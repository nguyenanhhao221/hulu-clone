import React from 'react';

const NoContent = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
      <h2 className="text-center text-3xl font-extrabold">
        No Content Available!
      </h2>
      <p className="text-center text-xl">
        Please choose a different Genre or Category
      </p>
    </div>
  );
};

export default NoContent;
