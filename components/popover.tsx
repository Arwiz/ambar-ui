/** @format */

import React, { useState, useEffect } from "react";

export default function Popover(props) {
  const [isError, setIsError] = useState(false);
  const [showPopOver, setShowPopOver] = useState(false);
  useEffect(() => {
    setIsError(props.isError);
    setShowPopOver(props.IsPopOver);
  }, [props]);
  return (
    <>
      {showPopOver && (
        <div className="popover border-1">
          <span className="text-red-600">Error</span>
          <div className="popover-content">{props.message}</div>
        </div>
      )}
    </>
  );
}
