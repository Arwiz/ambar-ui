/** @format */

import React, { useState, useEffect } from "react";

export default function Spinner(props) {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(props.showSpinner);
  }, [props]);
  return (
    <>
      {showSpinner && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}
