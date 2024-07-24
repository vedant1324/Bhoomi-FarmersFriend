import React, { useState } from "react";
import Lottie from "lottie-react";
import farmerAnimation from "../assets/animations/happyfarmer.json";

const WhatIsBhoomi = () => {
  const cardImages = [
    ["1.jpeg", "2.jpeg"],
    ["3.jpeg", "4.jpeg"],
    ["5.jpeg", "6.jpeg"],
  ];

  const challengeImages = [
    "soilerosion.jpg",
    "waterscarcity.jpg",
    "airpollution.jpg",
  ];

  const challengeNames = ["Drought", "Water Scarcity", "Air Pollution"];

  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const toggleLanguage = () => {
    setSelectedLanguage((prevLanguage) =>
      prevLanguage === "english" ? "hindi" : "english"
    );
  };

  const getLocalizedContent = (englishContent, hindiContent) => {
    return selectedLanguage === "english" ? englishContent : hindiContent;
  };

  return (
    <div className="p-0 bg-gradient-to-b from-green-100 via-green-200 to-green-400">
      {/* Navigation Bar */}
      <div className="bg-green-100 flex justify-between items-center mb-6 h-16 p-5 fixed w-full z-50 top-0">
        {/* Left Side (Logo) */}
        <div className="flex items-center">
          <img src="logobhoomi.png" alt="Bhoomi Logo" className="h-14 w-14" />
          <h1 className="text-2xl font-bold ml-2">Bhoomi</h1>
        </div>
        <div className="flex items-center">
          
        </div>

        {/* Right Side (Signup and Go Back to Dashboard) */}
        <div className="flex items-center">
        <button
            onClick={toggleLanguage}
            className="text-blue-500 mr-6 text-xl font-bold  hover:text-blue-900 focus:outline-none"
          >
            {getLocalizedContent("Switch to Hindi", "अंग्रेजी में स्विच करें")}
          </button>
          <a
            href="/about-us"
            className=" bg-blue-500 text-white py-2 px-4 rounded-md mr-4  hover:scale-110 duration-300"
          >
            {getLocalizedContent("About Us", "हमारे बारे में")}
          </a>
          <a
            href="/dashboard"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 font-bold hover:scale-110 duration-300"
          >
            {getLocalizedContent(
              "Go Back to Dashboard",
              "डैशबोर्ड पर वापस जाएं"
            )}
          </a>
          <button
            onClick={() => (window.location.href = "/register")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md  hover:scale-110 duration-300"
          >
            {getLocalizedContent("Sign Up", "साइन अप")}
          </button>
        </div>
        {/* Language Switch */}
        
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold mt-6 ml-3 flex-row transition-all duration-150 hover:text-blue-500">
            {getLocalizedContent("What is Bhoomi?", "भूमि क्या है?")}
          </h2>
          <p className="text-2xl mb-1 mt-3 px-48">
            {getLocalizedContent(
              "Bhoomi is a revolutionary web application designed to assist farmers in making informed decisions about soil health and crop selection. Our goal is to empower you with the tools and knowledge needed to optimize your agricultural practices for sustainability and productivity.",
              "भूमि एक क्रांतिकारी वेब एप्लिकेशन है जो किसानों को मिट्टी की स्वास्थ्य और फसल चयन के बारे में सूचित निर्णय लेने में मदद करने के लिए डिज़ाइन की गई है। हमारा लक्ष्य आपको उन उपकरणों और ज्ञान के साथ सशक्त बनाना है जो आपको अपने कृषि अभ्यास को टिकाऊ और उत्पादकता के लिए समृद्धि प्राप्त करने की आवश्यकता है।"
            )}
          </p>
          <div className="w-1/2 mx-auto">
            <Lottie
              options={{
                animationData: farmerAnimation,
                loop: true,
                autoplay: true,
              }}
              height={400}
              width={400}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-4  relative z-10">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">
            {getLocalizedContent("Services We Provide", "हमारी सेवाएं")}
          </h2>
          <div className="flex flex-row gap-10 items-center justify-center">
            {/* Crop Prediction Card */}
            <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="croppredict.png"
                alt="Crop Prediction"
                className="rounded-t-lg h-80 w-full object-cover"
              />
              <div className="p-2">
                <h3 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  {getLocalizedContent("Crop Prediction", "फसल का पूर्वानुमान")}
                </h3>
                <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
                  {getLocalizedContent(
                    "Predict the most suitable crops for your land based on soil analysis and environmental factors.",
                    "मिट्टी के विश्लेषण और पर्यावरणीय कारकों के आधार पर अपनी ज़मीन के लिए सबसे उपयुक्त फसलों का पूर्वानुमान करें।"
                  )}
                </p>
              </div>
            </div>

            {/* Fertilizer Prediction Card */}
            <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="fertilizerPredict.png"
                alt="Fertilizer Prediction"
                className="rounded-t-lg h-80 w-full object-cover"
              />
              <div className="p-2">
                <h3 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  {getLocalizedContent(
                    "Fertilizer Prediction",
                    "उर्वरक का पूर्वानुमान"
                  )}
                </h3>
                <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
                  {getLocalizedContent(
                    "Receive personalized recommendations for fertilizers to optimize soil nutrients and enhance crop growth.",
                    "मिट्टी के पोषण को अनुकूलित करने और पौध विकास को बढ़ावा देने के लिए उर्वरक के लिए व्यक्तिगत सुझाव प्राप्त करें।"
                  )}
                </p>
              </div>
            </div>

            {/* Disease Prediction Card */}
            <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="diseasepredict.png"
                alt="Disease Prediction"
                className="rounded-t-lg h-80 w-full object-cover"
              />
              <div className="p-2">
                <h3 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  {getLocalizedContent(
                    "Disease Prediction",
                    "रोग का पूर्वानुमान"
                  )}
                </h3>
                <p className="mb-2 font-normal text-xs text-gray-700 dark:text-gray-400">
                  {getLocalizedContent(
                    "Identify potential crop diseases early on through predictive analysis, ensuring timely intervention.",
                    "पूर्वानुमानात्मक विश्लेषण के माध्यम से संभावित कृषि रोगों की पहचान सुनिश्चित करें, समय पर हस्तक्षेप सुनिश्चित करें।"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Does Bhoomi Work Section */}
      <h2 className="text-4xl font-bold mt-12 mb-4 ml-2 transition-all duration-300 hover:text-blue-500 px-12">
        {getLocalizedContent("How Does Bhoomi Work?", "भूमि कैसे काम करता है?")}
      </h2>
      <p className="text-lg mb-4 ml-2 px-12">
        <span className="font-bold">
          {getLocalizedContent(
            "Soil Nutrient Analysis:",
            "मिट्टी के पोषण विश्लेषण:"
          )}
        </span>
        {getLocalizedContent(
          "Bhoomi utilizes advanced machine learning algorithms to analyze soil samples and determine their nutrient composition. By understanding the specific nutrient levels in your soil, you can make informed decisions about fertilization and soil management.",
          "भूमि उन्नत मशीन लर्निंग एल्गोरिदम का उपयोग करता है ताकि मिट्टी के नमूनों का विश्लेषण कर सके और उनके पोषण संरचना का निर्धारण कर सके। अपनी मिट्टी में विशिष्ट पोषण स्तरों को समझकर आप उर्वरक और मिट्टी प्रबंधन के बारे में सूचित निर्णय ले सकते हैं।"
        )}
        <br />
        <br />
        <span className="font-bold">
          {getLocalizedContent("Crop Recommendation:", "फसल की सिफारिश:")}
        </span>
        {getLocalizedContent(
          "Based on the analysis of your soil's nutrient composition and other environmental factors, Bhoomi provides personalized recommendations for suitable crops. These recommendations take into account factors such as climate, soil type, and crop compatibility, helping you maximize yields while preserving soil health.",
          "आपकी मिट्टी के पोषण संरचना और अन्य पर्यावरणीय कारकों के विश्लेषण पर आधारित, भूमि सुझाव देता है जो उपयुक्त फसलों के लिए। इन सुझावों में जलवायु, मिट्टी का प्रकार, और फसल संगतता जैसे कारकों का ध्यान रखा जाता है, जिससे आप मात्रा में वृद्धि कर सकते हैं जबकि मिट्टी स्वास्थ्य को संरक्षित रखते हैं।"
        )}
        <br />
        <br />
        <span className="font-bold">
          {getLocalizedContent(
            "Sustainable Farming Practices:",
            "सतत खेती व्यवसाय:"
          )}
        </span>
        {getLocalizedContent(
          "In addition to crop recommendations, Bhoomi offers insights into sustainable farming practices. Learn about crop rotation, cover cropping, and other techniques to improve soil fertility, reduce erosion, and minimize environmental impact.",
          "फसल के सुझावों के अलावा, भूमि सतत खेती व्यवसाय में अंतर्दृष्टि प्रदान करता है। मिट्टी की पोषण क्षमता में सुधार करने, इरोजन को कम करने, और पर्यावरणीय प्रभाव को कम करने के लिए क्रॉप रोटेशन, कवर क्रॉपिंग, और अन्य तकनीकों के बारे में जानें।"
        )}
      </p>

      {/* ... (rest of the code) */}

      {/* Challenges Section */}
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mt-8 mb-4 ml-4">
          {getLocalizedContent(
            "Challenges We Address",
            "हम उत्तरदाता किन चुनौतियों का सामना कर रहे हैं"
          )}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {challengeImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center m-7">
            <img
              src={image}
              alt={`challenge-image-${index + 1}`}
              className="rounded-md shadow-lg w-full h-full hover:scale-105 duration-300"
            />
            <p className="text- mt-2">
              {getLocalizedContent(
                `Challenge ${index + 1}`,
                challengeNames[index]
              )}
            </p>
          </div>
        ))}
      </div>

      {/* ... (rest of the code) */}

      {/* Benefits Section */}
      <h2 className="text-4xl font-bold mt-8 mb-4 ml-3 px-12">
        {getLocalizedContent("Benefits for Farmers", "किसानों के लिए लाभ")}
      </h2>
      <p className="text-lg mb-4 ml-4 px-12">
        <span className="font-bold">
          {getLocalizedContent(
            "Bhoomi is designed with the well-being of farmers in mind, offering a range of benefits that positively impact their livelihoods and overall farming experience.",
            "भूमि किसानों के कल्याण के साथ डिज़ाइन की गई है, जो उनके आजीविका और कुल कृषि अनुभव पर सकारात्मक प्रभाव डालती है।"
          )}
        </span>
        <ul className="list-disc ml-6">
          <li className="mb-2 transition-transform transform hover:scale-105">
            <span className="font-bold">
              {getLocalizedContent(
                "Increased Crop Yield:",
                "बढ़ी हुई फसल की पैदावार:"
              )}
            </span>{" "}
            {getLocalizedContent(
              "Bhoomi's intelligent insights and crop recommendations are tailored to optimize crop yields. Farmers can expect improved productivity and harvest outcomes.",
              "भूमि की बुद्धिमान साइटें और किसानों के लिए बनाए गए फसल की सिफारिशें फसल की पैदावार को अनुकूलित करने के लिए हैं। किसानों को बेहतर उत्पादकता और कटाई के परिणाम साधने की उम्मीद है।"
            )}
          </li>

          <li className="mb-2 transition-transform transform hover:scale-105 hover:lightg">
            <span className="font-bold">
              {getLocalizedContent("Cost Reduction:", "लागत कमी:")}
            </span>{" "}
            {getLocalizedContent(
              "By providing accurate predictions and personalized recommendations, Bhoomi helps farmers optimize resource utilization, reducing unnecessary expenses on fertilizers and water.",
              "सटीक पूर्वानुमान और व्यक्तिगत सिफारिशें देकर, भूमि किसानों को संसाधन उपयोग को अनुकूलित करने में मदद करती है, उर्वरक और पानी पर अनावश्यक खर्च को कम करके।"
            )}
          </li>

          <li className="mb-2 transition-transform transform hover:scale-105">
            <span className="font-bold">
              {getLocalizedContent(
                "Sustainable Farming Practices:",
                "सतत खेती के अभ्यास:"
              )}
            </span>{" "}
            {getLocalizedContent(
              "Bhoomi encourages and supports sustainable farming methods, contributing to the long-term health of the land and the environment. This ensures a more resilient and eco-friendly agriculture ecosystem.",
              "भूमि सतत खेती के विधानों को प्रोत्साहित करती है और समर्थन प्रदान करती है, जो भूमि और पर्यावरण के दीर्घकालिक स्वास्थ्य के लाभ में होते हैं। इससे एक और सहारी और पारिस्थितिक खेती पारिस्थितिकी बनती है।"
            )}
          </li>

          <li className="mb-2 transition-transform transform hover:scale-105">
            <span className="font-bold">
              {getLocalizedContent(
                "Access to Modern Technologies:",
                "आधुनिक तकनीक का पहुंच:"
              )}
            </span>{" "}
            {getLocalizedContent(
              "Farmers gain access to cutting-edge technologies like machine learning and weather analytics through Bhoomi. This empowers them with valuable insights that were previously inaccessible.",
              "किसान भूमि के माध्यम से मशीन लर्निंग और मौसम विश्लेषण जैसी क्षुद्र प्रौद्योगिकियों का उपयोग कर सकते हैं। इससे उन्हें पहले अज्ञात थी वहमूल्य दृष्टिकोण मिलता है।"
            )}
          </li>

          <li className="mb-2 transition-transform transform hover:scale-105">
            <span className="font-bold ">
              {getLocalizedContent("Risk Mitigation:", "जोखिम संयोजन:")}
            </span>{" "}
            {getLocalizedContent(
              "Bhoomi's predictive capabilities help farmers anticipate and mitigate risks related to weather conditions, crop diseases, and market fluctuations. This enhances their ability to make informed decisions and safeguard their crops.",
              "भूमि की पूर्वानुमान क्षमताएँ किसानों को मौसम की स्थिति, फसल की बीमारियों और बाजार की उतार-चढ़ाव से जुड़े खतरों को पहले ही अनुमान और संयोजन करने में मदद करती हैं। इससे उनकी योजना बनाने और उनकी फसलों की रक्षा करने की क्षमता बढ़ती है।"
            )}
          </li>
        </ul>
      </p>

      {/* ... (rest of the code) */}
    </div>
  );
};

export default WhatIsBhoomi;
