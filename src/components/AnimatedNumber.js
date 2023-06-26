import { useEffect } from "react";

const AnimatedNumber = ({ viewerCount }) => {
  useEffect(() => {
    let valueDisplays = document.querySelectorAll(".viewer-count");
    let interval = 5000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 1;  //  Start value for the animation
      let endValue = parseInt(viewerCount); // Parse the viewerCount prop
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay = endValue;

        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, [viewerCount]);

  return null; // Return null as we don't need to render anything
};

export default AnimatedNumber;
