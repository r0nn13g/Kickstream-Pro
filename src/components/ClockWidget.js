import React  from 'react';
import Clock from 'react-live-clock';

    const ClockWidget = () => {
      const currentLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.log(currentLocation);
        return(
            <div>
             <Clock format={'HH:mm:ss'} ticking={true} />
            </div>
        )
    }

export default ClockWidget;
    