import React, { useState, useEffect } from 'react';

const CountdownComponent = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    const interval = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is over, clear the interval
      if (distance <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
      } else {
        setCountdown({ days, hours, minutes, seconds, expired: false });
      }
    }, 1000);

    return () => {
      // Cleanup on unmount
      clearInterval(interval); 
    };
  }, []);

  return (
    <div>
      {countdown.expired ? (
        <span>UNBANNED</span>
      ) : (
        <span>
          {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
        </span>
      )}
    </div>
  );
};

export default CountdownComponent;
