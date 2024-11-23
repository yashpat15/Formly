import React from "react";

const Code = ({ formFields }) => {
  return (
    <div>
      <pre className="bg-gray-800 text-white p-4 rounded-lg">
        {JSON.stringify(formFields, null, 2)}
      </pre>
    </div>
  );
};

export default Code;
