"use client";
import React, { useState } from "react";

type Option = {
  id: number;
  text: string;
  value: number;
};

type OptionsType = {
  [key: string]: Option[];
};

const options: OptionsType = {
  Γάμος: [
    { id: 1, text: "Βίντεο Γάμου", value: 200 },
    { id: 2, text: "Φώτογράφηση", value: 200 },
    { id: 3, text: "Drone", value: 150 },
    { id: 4, text: "Next Day", value: 300 },
    { id: 5, text: "Προετοιμασία Νύφης", value: 200 },
    { id: 6, text: "Προετοιμασία Γαμπρού", value: 200 },
    { id: 7, text: "Pre wedding", value: 300 },
    { id: 8, text: "Κέντρο (3 ώρες)", value: 200 },
    { id: 9, text: "Site Γάμου", value: 200 },
  ],
  Βάπτιση: [
    { id: 10, text: "Βίντεο Βάπτισης", value: 200 },
    { id: 11, text: "Φώτογράφηση", value: 200 },
    { id: 12, text: "Drone", value: 150 },
    { id: 13, text: "Baby Shooting", value: 250 },
    { id: 14, text: "Κέντρο (3 ώρες)", value: 200 },
    { id: 15, text: "Site Βάπτισης", value: 200 },
  ],
  Εκδήλωση: [
    { id: 16, text: "Βίντεο Εκδήλωσης", value: 300 },
    { id: 17, text: "Φώτογράφηση", value: 250 },
    { id: 18, text: "Drone", value: 200 },
    { id: 19, text: "Live Streaming", value: 300 },
    { id: 20, text: "Μοντάζ", value: 100 },
  ],
};

type ErrorsType = {
  options: boolean;
  fields: boolean[];
};

const DynamicForm: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("Γάμος");
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [sum, setSum] = useState<number>(0);
  const [inputValues, setInputValues] = useState<string[]>(["", "", ""]);
  const [errors, setErrors] = useState<ErrorsType>({
    options: false,
    fields: [false, false, false],
  });
  const [showError, setShowError] = useState<boolean>(false);

  const handleButtonClick = (button: string): void => {
    setActiveButton(button);
    setSelectedOptions([]);
    setSum(0);
    setErrors({ options: false, fields: [false, false, false] });
    setShowError(false);
  };

  const handleCheckboxChange = (option: Option): void => {
    const newSelectedOptions = selectedOptions.includes(option.id)
      ? selectedOptions.filter((id) => id !== option.id)
      : [...selectedOptions, option.id];

    setSelectedOptions(newSelectedOptions);
    setSum(
      newSelectedOptions.reduce((acc, id) => {
        const selectedOption = options[activeButton].find(
          (opt) => opt.id === id
        );
        return acc + (selectedOption ? selectedOption.value : 0);
      }, 0)
    );
    setErrors({ ...errors, options: false });
  };

  const handleInputChange = (index: number, value: string): void => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    const newErrors = { ...errors };
    newErrors.fields[index] = false;
    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newErrors: ErrorsType = {
      options: selectedOptions.length === 0,
      fields: inputValues.map((value) => value.trim() === ""),
    };
    setErrors(newErrors);
    setShowError(newErrors.options || newErrors.fields.some((field) => field));

    if (!newErrors.options && !newErrors.fields.some((field) => field)) {
      // Form is valid, you can submit or process the data here
      setSelectedOptions([]);
      setSum(0);
      setInputValues(["", "", ""]);
      setShowError(false);
    }
  };

  return (
    <section
      className="bg-[#f5f5f5] flex justify-center pb-12 pt-4"
      id="package"
    >
      <div className="p-6 max-w-3xl w-full shadow-md">
        <div className="space-x-4 md:space-x-12 mb-6 text-center">
          {Object.keys(options).map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className={`px-4 py-2 rounded ${
                activeButton === button
                  ? "bg-[#d6a36c] text-white hover:bg-[#be9060] transition-all duration-300"
                  : "bg-gray-400 text-white hover:bg-[#d6a36c] transition-all duration-300"
              }`}
            >
              {button}
            </button>
          ))}
        </div>

        <div
          className={`mb-6 ${
            errors.options ? "border-2 border-red-500 p-2 rounded" : ""
          }`}
        >
          {options[activeButton].map((option) => (
            <label key={option.id} className="flex items-center space-x-3 mb-3">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleCheckboxChange(option)}
                className="form-checkbox h-5 w-5 !text-[#d6a36c] !border-[#d6a36c] rounded !focus:ring-[#d6a36c]"
              />
              <span className="text-gray-700 font-medium">{option.text}</span>
              <span className="text-gray-500">- {option.value}.00 €</span>
            </label>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold">Σύνολο: {sum}.00 €</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-0 md:gap-4">
            {["Ονοματεπώνυμο", "Email", "Τηλέφωνο"].map((field, index) => (
              <div key={index} className="relative mb-4">
                <input
                  type="text"
                  id={`field-${index + 1}`}
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className={`peer h-10 w-full border-b-2 ${
                    errors.fields[index] ? "border-red-500" : "border-gray-300"
                  } text-gray-900 placeholder-transparent focus:outline-none focus:border-[#d6a36c]`}
                  placeholder={field}
                />
                <label
                  htmlFor={`field-${index + 1}`}
                  className={`absolute left-0 -top-3.5 ${
                    errors.fields[index] ? "text-red-500" : "text-gray-600"
                  } text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                >
                  {field}
                </label>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="bg-[#d6a36c] text-white py-2 px-4 rounded hover:bg-[#be9060] transition duration-200 flex mx-auto"
          >
            Αποστολή
          </button>
        </form>
        {showError && (
          <p className="mt-2 text-red-500 text-center">
            Όλα τα πεδία είναι απαραίτητα.
          </p>
        )}
      </div>
    </section>
  );
};

export default DynamicForm;
