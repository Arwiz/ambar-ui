/** @format */

import React, { useState } from "react";

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-md  mt-3" style={{ maxWidth: "100%" }}>
      <div className="flex mb-4">
        {children.map((child, index) => (
          <div
            key={index}
            className={`${
              index === activeTab
                ? "bg-gray-200 text-gray-800"
                : "bg-gray-100 text-gray-500"
            } py-2 px-4 rounded-l focus:outline-none focus:shadow-outline columns-3 `}
          >
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{ minWidth: " 100px" }}
            >
              {child.props.label}
            </button>
          </div>
        ))}
      </div>
      <div>
        {children.map((child, index) => (
          <div
            key={index}
            className={`${
              index === activeTab ? "block" : "hidden"
            } bg-white p-4 rounded-b`}
          >
            {child.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

const TabPane = ({ label, children }) => {
  return <div>{children}</div>;
};

export { Tab, TabPane };
