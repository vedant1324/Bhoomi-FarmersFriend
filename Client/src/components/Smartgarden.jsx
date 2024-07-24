// Smartgarden.js

import React, { useState, useEffect, useRef } from "react";
import Joyride from "react-joyride";
import CropPrediction from "./CropPrediction";
import DiseasePrediction from "./DiseasePrediction";
import FertilizerPrediction from "./FertilizerPrediction";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FiSun,
  FiCloud,
  FiCloudDrizzle,
  FiCloudRain,
  FiCloudSnow,
  FiCloudLightning,
  FiCloudOff,
  FiWind,
} from 'react-icons/fi';
import { BsCloudHaze } from "react-icons/bs";

const Smartgarden = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Amrāvati&appid=e792f8ca0784f2f0a0c578241f80e6f2"
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const [run, setRun] = useState(true);

  const steps = [
    {
      target: ".video",
      content: "Welcome to Bhoomi! New here? Explore 'What is Bhoomi' for a quick introduction",
      placement: "top",
    },
    {
      target: ".weather",
      content: "Keep track of your local weather with Bhoomi's Weather Card.",
      placement: "top",
    },
    {
      target: ".cropCard",
      content: "Plan your crops wisely with Bhoomi's predictions. Maximize yield, minimize guesswork.",
      placement: "top",
    },
    {
      target: ".bhoomiKart",
      content: "Explore BhoomiKart: Get access to your agricultural marketplace.",
      placement: "top",
    },
    {
      target: ".chatBot",
      content: "Connect with Bhoomi's Chatbot for instant farming insights. Quick answers, anytime.",
      placement: "top",
    },
    {
      target: ".sideBarCard",
      content: "Navigate through Bhoomi's Help and Support for quick solutions. ",
      placement: "top",
    }
  ];

  useEffect(() => {
    // Start Joyride when component mounts
    setRun(true);
  }, []);
  const [showCropPrediction, setShowCropPrediction] = useState(false);
  const [showDiseasePrediction, setShowDiseasePrediction] = useState(false);
  const [showFertilizerPrediction, setShowFertilizerPrediction] =
    useState(false);

  const hideAllPredictions = () => {
    setShowCropPrediction(false);
    setShowDiseasePrediction(false);
    setShowFertilizerPrediction(false);
  };

  const cropPredictionRef = useRef(null);
  const fertilizerPredictionRef = useRef(null);
  const diseasePredictionRef = useRef(null);

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const getWeatherIcon = (weatherDescription) => {
    switch (weatherDescription.toLowerCase()) {
      case 'clear':
        return <FiSun size={32} />;
      case 'clouds':
        return <FiCloud size={32} />;
      case 'drizzle':
        return <FiCloudDrizzle size={32} />;
      case 'rain':
        return <FiCloudRain size={32} />;
      case 'snow':
        return <FiCloudSnow size={32} />;
      case 'thunderstorm':
        return <FiCloudLightning size={32} />;
      case 'mist':
      case 'smoke':
      case 'haze':
        return <BsCloudHaze size={32} />;
      case 'wind':
        return <FiWind size={32} />;
      case 'dust':
      case 'sand':
      case 'tornado':
        return <FiCloudOff size={32} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4 h-screen relative">
      <Joyride
        steps={steps}
        run={run}
        continuous
        showProgress
        showSkipButton
        callback={({ action, index, status }) => {
          if (["finished", "skipped"].includes(status)) {
            setRun(false);
          }
        }}
      />
      <div className="flex flex-row m-1 h-full rounded-3xl">
        {/* Video Section */}
        <div className="video h-68 w-96 flex-1 relative">
          {/* Placeholder for video */}
          <video
            className="absolute inset-0 w-full h-full object-fill rounded-2xl"
            autoPlay
            loop
            muted
          >
            <source src="dashvideo1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 flex flex-col items-start justify-center text-white">
            <h2 className="text-5xl font-signature l mb-4 ml-9 tracking-wide">
              Sow the Seeds of Progress
            </h2>
            <div className="flex space-x-4 ml-9">
              <Link to="/what-is-bhoomi" className="bg-transparent text-xl hover:bg-white text-white hover:text-black py-2 px-4 border border-white rounded">
                What is Bhoomi?
              </Link>

            </div>
          </div>
        </div>
        {/* Weather Section */}
        <div className="weather h-60 w-96 border-2 ml-3 flex items-start justify-start relative">
          {/* Background Photo for Weather */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url('weatherbg.png')` }}
          ></div>

          <div className="absolute flex flex-col items-start justify-start mt-4 ml-4">
            <div className="flex items-center mb-2">
              <div className="mr-2">
                {/* Weather icon based on weather description */}
                {weatherData &&
                  weatherData.weather &&
                  getWeatherIcon(weatherData.weather[0].main)}
              </div>
              <p className="text-3xl font-bold">
                {weatherData &&
                  weatherData.weather &&
                  weatherData.weather[0].description}
              </p>
            </div>
            <span className="text-xl font-bold">
              {weatherData &&
                weatherData.main &&
                (weatherData.main.temp - 273.15).toFixed(1)}{" "}
              °C
            </span>
            <p className="text-base">{weatherData && weatherData.name}</p>
          </div>
        </div>
      </div>

      <div className="py-1 px-6 mt-1 font-mukta w-full text-center">
        <h3
          className="text-5xl font-passion text-white tracking-wider "
          style={{ WebkitTextStroke: "2px  #097969" }}
        >
          BHOOMI'S FEATURES :
        </h3>
      </div>

      <div className="cropCard flex flex-row gap-10 items-center justify-center">
  {/* Crop Prediction Card */}
  <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <a href="#">
      <img className="rounded-t-lg h-64 w-full object-cover" src="croppredict.png" alt="" />
    </a>
    <div className="p-2">
      <a href="#">
        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          CROP PREDICTION
        </h5>
      </a>
      <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
        Predicting optimal crops based on advanced soil analysis and
        environmental factors for enhanced agricultural yield and resource
        efficiency.
      </p>
      <button
        onClick={() => {
          hideAllPredictions();
          setShowCropPrediction(!showCropPrediction);
          handleScrollTo(cropPredictionRef);
        }}
        className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Predict Now!
      </button>
    </div>
  </div>

  {/* Fertilizer Prediction Card */}
  <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <a href="#">
      <img className="rounded-t-lg h-64 w-full object-cover" src="fertilizerPredict.png" alt="" />
    </a>
    <div className="p-2">
      <a href="#">
        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          FERTILIZER PREDICTION
        </h5>
      </a>
      <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
        Optimizing soil nutrient management through personalized fertilizer
        predictions for improved crop health and growth.
      </p>
      <button
        onClick={() => {
          hideAllPredictions();
          setShowFertilizerPrediction(!showFertilizerPrediction);
          handleScrollTo(fertilizerPredictionRef);
        }}
        className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Predict Now!
      </button>
    </div>
  </div>

  {/* Plant Disease Prediction Card */}
  <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <a href="#">
      <img className="rounded-t-lg h-64 w-full object-cover" src="diseasepredict.png" alt="" />
    </a>
    <div className="p-2">
      <a href="#">
        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          PLANT DISEASE PREDICTION
        </h5>
      </a>
      <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
        Early identification and management of potential crop diseases through
        advanced predictive analysis for a healthier and more resilient harvest.
      </p>
      <button
        onClick={() => {
          hideAllPredictions();
          setShowDiseasePrediction(!showDiseasePrediction);
          handleScrollTo(diseasePredictionRef);
        }}
        className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Predict Now!
      </button>
    </div>
  </div>
</div>
<br />

      <div ref={cropPredictionRef}>
        {showCropPrediction && <CropPrediction />}
      </div>

      {/* Disease Prediction Component */}
      <div ref={diseasePredictionRef}>
        {showDiseasePrediction && <DiseasePrediction />}
      </div>

      {/* Fertilizer Prediction Component */}
      <div ref={fertilizerPredictionRef}>
        {showFertilizerPrediction && <FertilizerPrediction />}
      </div>
    </div>
  );
};

export default Smartgarden;
