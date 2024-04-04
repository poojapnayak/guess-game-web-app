// import React from "react";
// import "./SpeedSlider.css";

// function SpeedSlider({ speed, onSpeedChange }) {
//   return (
//     <div className="SpeedSlider">
//       <label htmlFor="speedRange">Speed Slider:</label>
//       <input
//         type="range"
//         id="speedRange"
//         className="slider"
//         min="1"
//         max="5"
//         value={speed}
//         onChange={onSpeedChange}
//       />
//     </div>
//   );
// }

// export default SpeedSlider;

import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import "./SpeedSlider.css";

function SpeedSlider({ onSpeedChange }) {
  const [speed, setSpeed] = useState(1); // Initial speed value

  const marks = [
    {
      value: 1,
      label: "1x",
    },
    {
      value: 2,
      label: "2x",
    },
    {
      value: 3,
      label: "3x",
    },
    {
      value: 4,
      label: "4x",
    },
    {
      value: 5,
      label: "5x",
    },
  ];

  function valuetext(value) {
    return `${value}x`;
  }

  const handleSpeedChange = (e) => {
    const newValue = e.target.value;
    setSpeed(newValue);
    onSpeedChange(newValue);
  };

  return (
    <div className="speedSlider-container">
      <Typography id="speed-slider" gutterBottom>
        Speed
      </Typography>
      <Slider
        className="mySlider"
        value={speed}
        onChange={handleSpeedChange}
        aria-labelledby="speed slider"
        getAriaValueText={valuetext}
        valueLabelDisplay="off"
        step={1}
        min={1}
        max={5}
        marks={marks}
      />
    </div>
  );
}

export default SpeedSlider;
