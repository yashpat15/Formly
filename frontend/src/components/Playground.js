import React, { useState } from "react";
import Form from "./Form";
import Code from "./Code";
import Preview from "./Preview";

const Playground = ({ isDarkMode }) => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      label: "Name",
      name: "text_abc123",
      type: "text",
      placeholder: "Enter your username",
      required: false,
      options: [],
    },
  ]);
  const [activeTab, setActiveTab] = useState("form");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Form Builder</h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("form")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "form" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Form
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "code" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Code
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "preview" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Preview
        </button>
      </div>
      {activeTab === "form" && (
        <Form
          formFields={formFields}
          setFormFields={setFormFields}
          isDarkMode={isDarkMode}
        />
      )}
      {activeTab === "code" && <Code formFields={formFields} />}
      {activeTab === "preview" && <Preview formFields={formFields} />}
    </div>
  );
};

export default Playground;
