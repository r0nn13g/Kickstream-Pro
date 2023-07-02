import React, { useEffect } from 'react';
import notificationSound from '../assets/notification-tone-swift-gesture.mp3'

const NotificationComponent = ({ item }) => {
  useEffect(() => {
    if (item.livestream !== null) {
      sendNotification();
    }
  }, [item.livestream]);

  const sendNotification = () => {
    // Replace this with your actual notification implementation
    // For example, you can use browser's built-in Notification API
    if ('Notification' in window && Notification.permission === 'granted') {
      console.log('online')
      const audio = new Audio(notificationSound);
        audio.play();  
      new Notification('Live Notification', {
        body: 'The stream is now live!',
      });
    }
  };

  const isLive = item.livestream === null ? (
    <p id="offline-live">offline</p>
  ) : (
    <p id="online-live">LIVE</p>
  );

  return <div>{isLive}</div>;
};

export default NotificationComponent;