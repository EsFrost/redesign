"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

type FormField = "Όνομα" | "Επώνυμο" | "Email" | "Τηλέφωνο" | "Μήνυμα";

interface FormData {
  Όνομα: string;
  Επώνυμο: string;
  Email: string;
  Τηλέφωνο: string;
  Μήνυμα: string;
}

type FormErrors = {
  [K in FormField]: boolean;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Όνομα: "",
    Επώνυμο: "",
    Email: "",
    Τηλέφωνο: "",
    Μήνυμα: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    Όνομα: false,
    Επώνυμο: false,
    Email: false,
    Τηλέφωνο: false,
    Μήνυμα: false,
  });

  const [showError, setShowError] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {
      Όνομα: formData.Όνομα.trim() === "",
      Επώνυμο: formData.Επώνυμο.trim() === "",
      Email: formData.Email.trim() === "",
      Τηλέφωνο: formData.Τηλέφωνο.trim() === "",
      Μήνυμα: formData.Μήνυμα.trim() === "",
    };
    setErrors(newErrors);
    setShowError(Object.values(newErrors).some((error) => error));

    if (!Object.values(newErrors).some((error) => error)) {
      console.log("Form submitted:", formData);
      setFormData({
        Όνομα: "",
        Επώνυμο: "",
        Email: "",
        Τηλέφωνο: "",
        Μήνυμα: "",
      });
      setShowError(false);
    }
  };

  return (
    <section className="bg-[#f5f5f5] flex flex-col justify-center items-center py-12">
      <div className="p-6 max-w-3xl w-full shadow-md">
        <div className="flex justify-center items-center gap-4 px-4 lg:px-0">
          <div className="border border-[#e9a257] h-0 w-12"></div>
          <h3 className="text-3xl text-[#e9a257]">Επικοινωνήστε μαζί μας!</h3>
          <div className="border border-[#e9a257] h-0 w-12"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {(["Όνομα", "Επώνυμο", "Email", "Τηλέφωνο"] as const).map(
              (field) => (
                <div key={field} className="relative mb-4">
                  <input
                    type={field === "Email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className={`peer h-10 w-full border-b-2 ${
                      errors[field] ? "border-red-500" : "border-gray-300"
                    } text-gray-900 placeholder-transparent focus:outline-none focus:border-[#d6a36c]`}
                    placeholder={field}
                  />
                  <label
                    htmlFor={field}
                    className={`absolute left-0 -top-3.5 ${
                      errors[field] ? "text-red-500" : "text-gray-600"
                    } text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
                  >
                    {field}
                  </label>
                </div>
              )
            )}
          </div>
          <div className="relative mb-4">
            <textarea
              id="Μήνυμα"
              name="Μήνυμα"
              value={formData.Μήνυμα}
              onChange={handleInputChange}
              rows={4}
              className={`peer w-full border-2 ${
                errors.Μήνυμα ? "border-red-500" : "border-gray-300"
              } rounded p-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#d6a36c]`}
              placeholder="Μήνυμα"
            ></textarea>
            <label
              htmlFor="Μήνυμα"
              className={`absolute left-2 -top-3 ${
                errors.Μήνυμα ? "text-red-500" : "text-gray-600"
              } text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm bg-[#f5f5f5] px-1`}
            >
              Μήνυμα
            </label>
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
            Όλα τα πεδία είναι απαραίτητα
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-col md:flex-row bg-white rounded-md">
        <div className="border-r-0 md:border-r border-[#d6a36c]">
          <div className="py-12 text-center px-12">
            <h4 className="text-3xl">Έδρα</h4>
            <div className="border-t border-[#d6a36c] h-0 w-full mt-1"></div>
            <p className="mt-4 text-gray-600">Όνομα υπέυθυνου</p>
            <p className="text-gray-600">Όνομα πόλης</p>
            <p className="mt-4 text-gray-600">Τηλέφωνο επικοινωνίας</p>
          </div>
        </div>
        <div className="border-[#d6a36c]">
          <div className="py-12 text-center px-12">
            <h4 className="text-3xl ">Υπεύθυνος</h4>
            <div className="border-t border-[#d6a36c] h-0 w-full mt-1"></div>
            <p className="mt-4 text-gray-600">Όνομα υπέυθυνου</p>
            <p className="text-gray-600 mt-4">Τηλέφωνο επικοινωνίας</p>
            <p className="text-gray-600">Email επικοινωνίας</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-center items-center gap-4 px-4 lg:px-0">
          <div className="border border-[#e9a257] h-0 w-12"></div>
          <h3 className="text-3xl text-[#e9a257]">Photo & Video Experts</h3>
          <div className="border border-[#e9a257] h-0 w-12"></div>
        </div>
        <div className="px-4 max-w-3xl md:px-0">
          <p className="mt-4">
            Παρακάτω θα βρείτε τον λογαριασμό τράπεζας στον οποίο μπορείτε να
            κάνετε κατάθεση της προκαταβολής (30% του συμφωνηθέντος ποσού) για
            να κατοχυρώσετε το πακέτο που έχετε επιλέξει.
          </p>
          <p className="mt-6">
            <span className="font-bold">Ονοματεπώνυμο:</span> όνομα εταιρείας
          </p>
          <p>
            <span className="font-bold">Αριθμός Λογαριασμού:</span>{" "}
            00000000000000000000
          </p>
          <p>
            <span className="font-bold">IBAN:</span> ΧΧ0000000000000000000000000
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
