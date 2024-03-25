import Ticker, { NewsTicker } from 'nice-react-ticker';
import '../styles/ticker-styles.css';

const AdTicker = () => {
  return(
    <div className="ticker">
          <Ticker isNewsTicker={true}>
             <NewsTicker id="1"  title="Kickster® - The #1 Live Streaming Dashboard for Kick Live streaming platform" url="https://www.kick.com" />
          </Ticker>
    </div>
  )
};

export default AdTicker;
