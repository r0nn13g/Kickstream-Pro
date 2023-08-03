import Ticker, { NewsTicker } from 'nice-react-ticker';
import '../styles/ticker-styles.css';

const AdTicker = () => {
  return(
    <div className="ticker">
          <Ticker isNewsTicker={true}>
            <NewsTicker id="2"  title="   r0nn13g       | Kickster® - live streaming solutions for futuristic beings   |   create your own personalized watch list   |   Keep track of trending channels without leaving the stream!   |   BruceDropEmOff & xQc sign 2yr / $100M deal with Kick   |   who is the next big signing?    |    r0nn13g" url="https://www.kick.com" />
          </Ticker>
    </div>
  )
};

export default AdTicker;
