import React, {Suspense, lazy} from "react";

// Dynamic loading
const Cat = lazy(() => import("../../components/Cat.js"));

const GeneralApp = () => {

  return (
    <>
      <Suspense fallback="Loading..">
        <Cat/>
      </Suspense>
    </>
  );
};

export default GeneralApp;
