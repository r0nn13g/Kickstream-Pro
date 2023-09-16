import React, { useState, useEffect } from 'react';

function getTimeZoneOffset() {
  const now = new Date();
  return now.getTimezoneOffset();
}

const CountdownComponent = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    function calculateCountDownDate() {
      const timeZoneOffset = getTimeZoneOffset();
      const targetDate = new Date("Sep 14, 2023 15:00:00");
      const adjustedDate = new Date(targetDate.getTime() + timeZoneOffset * 60000);
      return adjustedDate.getTime();
    }

    const countDownDate = calculateCountDownDate();

    const interval = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
      } else {
        setCountdown({ days, hours, minutes, seconds, expired: false });
      }
    }, 1000);
    return () => {
      clearInterval(interval); 
    };
  }, []);

  return (
    <div>
      {countdown.expired ? (
        <span>UNBANNED</span>
      ) : (
        <div  style={{textAlign:"center", marginTop: '100px'}}>
          <img style={{height: "200px"}} src='https://media.discordapp.net/attachments/1124460443054919691/1146766843470688366/fruitenjoyer.gif?width=480&height=270' alt='fasdf'/>
        <span>
          <div style={{textAlign:"center"}}><h3>Johnny Somali Free in</h3></div>
        <div style={{textAlign:"center", color: countdown.expired ? "green" : "red" }}><h3>{countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s</h3></div>
        </span>
      </div>
      )}
    </div>
  );
};

export default CountdownComponent;
