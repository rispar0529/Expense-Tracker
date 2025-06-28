import React from 'react';

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4 space-x-6"> {/* You might want to add a class here for the legend container */}
      {payload.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center space-x-2"> {/* Class for each legend item */}
          <div
            className="w-2.5 h-2.5 rounded-full" // Class for the color indicator div
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="text-xs text-gray-700 font-medium"> {/* Class for the legend text */}
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;