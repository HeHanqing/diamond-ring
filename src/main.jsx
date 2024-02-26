import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="h-screen w-screen bg-main">
          <p className="h-screen font-gilroy flex justify-center items-center text-white">
            Loading... Please Wait
          </p>
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
