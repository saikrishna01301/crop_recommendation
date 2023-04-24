import { createContext, useState } from "react";

//actual value you want to access

export const predictionResultContext = createContext({
  result: "",
  setResult: () => null,
});

export const PredictionResultProvider = ({ children }) => {
  const [result, setResult] = useState("");
  const value = { result, setResult };

  return (
    <predictionResultContext.Provider value={value}>
      {children}
    </predictionResultContext.Provider>
  );
};
