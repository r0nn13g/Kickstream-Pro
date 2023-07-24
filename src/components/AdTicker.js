import Ticker, { NewsTicker } from 'nice-react-ticker';
import '../styles/ticker-styles.css';

const AdTicker = () => {
  return(
    <div className="ticker">
          <Ticker isNewsTicker={true}>
            <NewsTicker id="1"  title="                                                 KICKSTER - live streaming solutions for futuristic beings   |   create your own personalized watch list   |   BruceDropEmOff & xQc sign 2yr / $100M deal with Kick   |   who is the next big signing? | designed by r0nn13g" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" />
          </Ticker>
    </div>
  )
};

export default AdTicker;
