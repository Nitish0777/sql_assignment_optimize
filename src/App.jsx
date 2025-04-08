import React, { Suspense, lazy, useEffect } from "react";
import QueryProvider from "./context/QueryProvider";

const Home = lazy(() => import("./pages/Home"));

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
  }, []);

  return (
    <QueryProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </QueryProvider>
  );
}

export default App;
