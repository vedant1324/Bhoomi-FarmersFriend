import React, { useState, useEffect } from "react";
import axios from "axios";
import htmlReactParser from "html-react-parser";
import nitrogenIcon from "../assets/InputIcons/nitrogen.png";
import phosphorusIcon from "../assets/InputIcons/phosphorus.png";
import potassiumIcon from "../assets/InputIcons/potassium.png";
import cropIcon from "../assets/InputIcons/crop.png";
import { BiRightArrow } from "react-icons/bi";

const FertilizerPrediction = () => {
  const [inputData, setInputData] = useState({
    crop: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
  });

  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [rawSuggestions, setRawSuggestions] = useState("");

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/predictfertilizer", {
        arr: [inputData.crop, inputData.nitrogen, inputData.phosphorus, inputData.potassium],
      });

      setResult(response.data.result);
      setRawSuggestions(typeof response.data.suggestions === "string" ? response.data.suggestions : "");
      setError("");
    } catch (error) {
      console.error("Error predicting fertilizer:", error.response?.data || error.message);
      setError("Error predicting fertilizer. Please try again.");
    }
  };

  const parsedSuggestions = htmlReactParser(rawSuggestions, {
    allowedTags: ["p", "br", "ul", "li", "b", "i", "strong", "em"],
    allowedAttributes: {
      "*": ["class"],
    },
  });

  useEffect(() => {
    if (rawSuggestions && parsedSuggestions) {
      console.log(parsedSuggestions);
    }
  }, [rawSuggestions, parsedSuggestions]);

  return (
    <div className="container mx-auto mt-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        {Object.entries(inputData).map(([key, value]) => (
          <div key={key} className="col-span-1 flex flex-col items-center">
            <label htmlFor={key} className="text-sm font-medium text-gray-700">
              {key}
            </label>
            <div className="flex items-center">
              {key === 'crop' && <img src={cropIcon} alt="Crop Icon" className="mr-2 w-14 h-14" />}
              {key === 'nitrogen' && <img src={nitrogenIcon} alt="Nitrogen Icon" className="mr-2 w-14 h-14" />}
              {key === 'phosphorus' && <img src={phosphorusIcon} alt="Phosphorus Icon" className="mr-2 w-14 h-14" />}
              {key === 'potassium' && <img src={potassiumIcon} alt="Potassium Icon" className="mr-2 w-14 h-14" />}
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                className="mt-1 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
        ))}
        <div className="col-span-3 flex justify-center mt-4">
          <button
            type="submit"
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tl from-cyan-500 to-blue-700 cursor-pointer hover:scale-105"
          >
            Predict Fertilizer
            <span className="group-hover:rotate-90  duration-300">
              <BiRightArrow size={20} />
            </span>
          </button>
        </div>
      </form>

      {error && (
        <div className="text-red-500 mt-2 text-center font-bold">{error}</div>
      )}
      {result && (
        <div className="mt-4 text-center font-bold">
          Fertilizer Prediction: {result}
        </div>
      )}

      {rawSuggestions && parsedSuggestions && (
        <div className="mt-4 text-center font-bold">
          Suggestions:
          <div dangerouslySetInnerHTML={{ __html: parsedSuggestions }} />
        </div>
      )}
    </div>
  );
};

export default FertilizerPrediction;
