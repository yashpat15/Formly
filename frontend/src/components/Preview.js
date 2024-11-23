import React, { useState } from "react";

const Preview = ({ formFields }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    formFields.forEach((field) => {
        if (field.required && !field.value) {
            validationErrors[field.name] = `${field.label} is required`;
        }
    });

    if (Object.keys(validationErrors).length === 0) {
        // Prepare form data for submission
        const data = formFields.map((field) => ({
            name: field.name,
            label: field.label,
            value: e.target[field.name]?.value || e.target[field.name]?.checked,
            required: field.required,
        }));

        try {
            const response = await fetch('http://127.0.0.1:8000/builder/submit-form/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.success) {
                alert('Form submitted successfully!');
            } else {
                setErrors(result.errors || { general: result.message });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({ general: 'An error occurred while submitting the form' });
        }
    } else {
        setErrors(validationErrors);
    }
};

  return (
    <div
      className="p-6 rounded-lg mx-auto"
      style={{
        maxWidth: "1100px",
        width: "90%",
        minWidth: "800px",
        backgroundColor: "#0D1117",
        borderColor: "#1F2937",
      }}
    >
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.id} className="mb-6">
            <div className="flex flex-col items-start">
              {/* Field Label */}
              <label
                className="block mb-1 text-lg font-medium text-white"
                htmlFor={field.name}
                style={{ textAlign: "left", width: "100%" }}
              >
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>

              {/* Field Input Rendering */}
              {field.type === "checkbox" || field.type === "radio" ? (
                field.options.map((option) => (
                  <div key={option.id} className="flex items-center mb-2">
                    <input
                      type={field.type}
                      id={`${field.name}_${option.value}`}
                      name={field.name}
                      value={option.value}
                      className="accent-blue-600"
                    />
                    <label
                      htmlFor={`${field.name}_${option.value}`}
                      className="ml-2 text-white"
                    >
                      {option.label || option.value} {/* Display label or value */}
                    </label>
                  </div>
                ))
              ) : field.type === "dropdown" ? (
                <select
                  id={field.name}
                  name={field.name}
                  className="w-full p-3 rounded-md border bg-gray-900 text-white"
                >
                  {field.options.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.label || option.value} {/* Ensure dropdown shows correct label */}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full p-3 rounded-md border bg-gray-900 text-white"
                />
              )}

              {/* Validation Error Display */}
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Preview;
