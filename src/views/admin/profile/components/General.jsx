import Card from "components/card";
import React from "react";

const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Exercise 7: Combining Functions
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
          Write a function that takes a list of numbers, squares each number, 
          filters out the even squares, and then calculates the sum of the 
          remaining values using map, filter, and reduce functions.
        </p>
      </div>
      {/* Cards */}

      <div className="mt-2 mb-8 w-full">
        <p className="px-2 text-base font-medium text-navy-700 dark:text-white">
          Example
        </p>

      </div>
    </Card>
  );
};

export default General;
