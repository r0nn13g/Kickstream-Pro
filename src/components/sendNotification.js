import React from 'react';
import notificationSound from '../assets/notification-tone-swift-gesture.mp3'

       const sendNotification = () => {
        if('Notification' in window && Notification.permission === 'granted') {
          console.log('online');
          const audio = new Audio(notificationSound);
          audio.play();
        }
      };

export default sendNotification;