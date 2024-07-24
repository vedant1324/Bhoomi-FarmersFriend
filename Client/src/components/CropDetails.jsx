import React, { useState, useEffect } from "react";
import sendUserInputToBackend from "./sendUserInputToBackend";
import { AiOutlineLoading } from "react-icons/ai";
import { TiPin } from "react-icons/ti";

const CropDetails = ({ cropName }) => {
  const [bestWayToGrow, setBestWayToGrow] = useState("");
  const [bestPractice, setBestPractice] = useState("");
  const [trendsAndCharts, setTrendsAndCharts] = useState("");
  const [priceAndMore, setPriceAndMore] = useState("");
  const [additionalInfo1, setAdditionalInfo1] = useState("");
  const [additionalInfo2, setAdditionalInfo2] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (query) => {
    try {
      const generatedText = await sendUserInputToBackend(query, "english");
      return generatedText;
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Wait a min, loading....";
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCardData = async (query, setter) => {
      setLoading(true);
      const result = await fetchData(query);
      setter(result);
    };

    fetchCardData(
      `benefits of organic farming for ${cropName}`,
      setAdditionalInfo2
    );
    fetchCardData(
      `eco-friendly fertilizers recommended for ${cropName}`,
      setPriceAndMore
    );
    fetchCardData(`crop management practices ${cropName}`, setBestWayToGrow);
    fetchCardData(`crop market trends ${cropName}`, setBestPractice);
    fetchCardData(
      ` nutritive Uses and contents of ${cropName}`,
      setTrendsAndCharts
    );

    fetchCardData(`pest control methods ${cropName}`, setAdditionalInfo1);
  }, [cropName]);

  return (
    <div className="mt-8 grid grid-cols-2 gap-8">
      {loading ? (
        <div className="card p-6 bg-white rounded-xl shadow-md text-center">
          <AiOutlineLoading className="animate-spin mx-auto mb-2" size={24} />
          Loading...
        </div>
      ) : (
        <>
          <div className="card p-6 bg-white rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="flex flex-row ">
              <TiPin size={30} />
              <h3 className="text-xl font-semibold mb-4 ml-2">
                Benefits of Organic Farming
              </h3>
            </div>
            <p>{additionalInfo2}</p>
          </div>
          <div className="card p-6 bg-white rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="flex flex-row ">
              <TiPin size={30} />
              <h3 className="text-xl font-semibold mb-4 ml-2">
                Eco-friendly fertilizers recommended for {cropName}
              </h3>
            </div>
            <p>{priceAndMore}</p>
          </div>
          <div className="card p-6 bg-white rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="flex flex-row ">
              <TiPin size={30} />
              <h3 className="text-xl font-semibold mb-4 ml-2">
                Best crop management practices
              </h3>
            </div>
            <p>{bestWayToGrow}</p>
          </div>
          <div className="card p-6 bg-white rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="flex flex-row ">
              <TiPin size={30} />
              <h3 className="text-xl font-semibold mb-4 ml-2">Crop market trends</h3>
            </div>
            <p>{bestPractice}</p>
          </div>
          <div className="card p-6 bg-white rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="flex flex-row ">
              <TiPin size={30} />
              <h3 className="text-xl font-semibold mb-4 ml-2">
                Pest Control Methods
              </h3>
            </div>
            <p>{additionalInfo1}</p>
          </div>

          <div className="card p-6 bg-white rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <div className="flex flex-row ">
              <TiPin size={30} />
              <h3 className="text-xl font-semibold mb-4 ml-2">
                Nutritive Uses and contents of {cropName}
              </h3>
            </div>
            <p>{trendsAndCharts}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CropDetails;
