import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Form = ({ formFields, setFormFields, isDarkMode }) => {
  const handleAddField = () => {
    const newField = {
      id: Date.now(),
      label: "",
      name: `text_${Math.random().toString(36).substring(2, 8)}`,
      type: "text",
      placeholder: "",
      required: false,
      options: [],
    };
    setFormFields([...formFields, newField]);
  };

  const handleFieldTypeChange = (fieldId, type) => {
    setFormFields((prev) =>
      prev.map((field) =>
        field.id === fieldId
          ? {
              ...field,
              type,
              name: `${type}_${Math.random().toString(36).substring(2, 8)}`,
              options:
                type === "radio" || type === "checkbox" || type === "dropdown"
                  ? field.options.length === 0
                    ? [{ id: Date.now(), label: "Option 1", value: "option1" }]
                    : field.options
                  : [],
            }
          : field
      )
    );
  };

  const handleAddOption = (fieldId) => {
    setFormFields((prev) =>
      prev.map((field) =>
        field.id === fieldId
          ? {
              ...field,
              options: [
                ...field.options,
                {
                  id: Date.now(),
                  label: `Option ${field.options.length + 1}`,
                  value: `option${field.options.length + 1}`,
                },
              ],
            }
          : field
      )
    );
  };

  const handleDeleteOption = (fieldId, optionId) => {
    setFormFields((prev) =>
      prev.map((field) =>
        field.id === fieldId
          ? {
              ...field,
              options: field.options.filter((option) => option.id !== optionId),
            }
          : field
      )
    );
  };

  return (
    <div>
      {formFields.map((field) => (
        <div
          key={field.id}
          className={`p-6 rounded-lg border mx-auto ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
          style={{
            maxWidth: "1100px",
            width: "90%",
            minWidth: "800px",
          }}
        >
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm mb-1">Label</label>
              <input
                type="text"
                value={field.label}
                onChange={(e) =>
                  setFormFields((prev) =>
                    prev.map((f) =>
                      f.id === field.id ? { ...f, label: e.target.value } : f
                    )
                  )
                }
                className={`w-full p-3 rounded-md text-lg focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-black"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Type</label>
              <select
                value={field.type}
                onChange={(e) =>
                  handleFieldTypeChange(field.id, e.target.value)
                }
                className={`w-full p-3 rounded-md text-lg focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
                <option value="checkbox">Checkbox</option>
                <option value="radio">Radio</option>
                <option value="dropdown">Dropdown</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                value={field.name}
                readOnly
                className={`w-full p-3 rounded-md text-lg ${
                  isDarkMode
                    ? "bg-gray-900 text-gray-400"
                    : "bg-gray-100 text-gray-600"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Placeholder</label>
              <input
                type="text"
                value={field.placeholder}
                onChange={(e) =>
                  setFormFields((prev) =>
                    prev.map((f) =>
                      f.id === field.id
                        ? { ...f, placeholder: e.target.value }
                        : f
                    )
                  )
                }
                className={`w-full p-3 rounded-md text-lg focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-black"
                }`}
              />
            </div>
          </div>

          {(field.type === "checkbox" ||
            field.type === "radio" ||
            field.type === "dropdown") && (
            <div className="mb-4">
              <label className="block text-sm mb-2">Options</label>
              {field.options.map((option) => (
                <div
                  key={option.id}
                  className="grid grid-cols-2 gap-4 items-center mb-2"
                >
                  <input
                    type="text"
                    value={option.label}
                    onChange={(e) =>
                      setFormFields((prev) =>
                        prev.map((f) =>
                          f.id === field.id
                            ? {
                                ...f,
                                options: f.options.map((o) =>
                                  o.id === option.id
                                    ? { ...o, label: e.target.value }
                                    : o
                                ),
                              }
                            : f
                        )
                      )
                    }
                    placeholder="Option Label"
                    className={`w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-black"
                    }`}
                  />
                  <input
                    type="text"
                    value={option.value}
                    onChange={(e) =>
                      setFormFields((prev) =>
                        prev.map((f) =>
                          f.id === field.id
                            ? {
                                ...f,
                                options: f.options.map((o) =>
                                  o.id === option.id
                                    ? { ...o, value: e.target.value }
                                    : o
                                ),
                              }
                            : f
                        )
                      )
                    }
                    placeholder="Option Value"
                    className={`w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-black"
                    }`}
                  />
                  <button
                    onClick={() => handleDeleteOption(field.id, option.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleAddOption(field.id)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add Option
              </button>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <label className="text-sm">Required</label>
              <div
                className="relative inline-flex items-center cursor-pointer"
                onClick={() =>
                  setFormFields((prev) =>
                    prev.map((f) =>
                      f.id === field.id
                        ? { ...f, required: !f.required }
                        : f
                    )
                  )
                }
              >
                <input
                  type="checkbox"
                  checked={field.required}
                  readOnly
                  className="sr-only peer"
                />
                <div
                  className={`w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer ${
                    field.required ? "peer-checked:bg-blue-600" : ""
                  }`}
                ></div>
                <span
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    field.required ? "transform translate-x-5" : ""
                  }`}
                ></span>
              </div>
            </div>
            <button
              onClick={() =>
                setFormFields((prev) => prev.filter((f) => f.id !== field.id))
              }
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <button
          onClick={handleAddField}
          className="mt-6 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Form;
